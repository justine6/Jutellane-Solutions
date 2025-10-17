# scripts/watch-media.ps1
# Watches Downloads for .mp3/.mp4 and moves them into /public/sounds or /public/videos
# Logs actions daily → scripts/logs/watch-YYYY-MM-DD.log
# Auto-cleans logs older than N days and rotates logs if size exceeds max threshold

# 🔧 Config
$logRetentionDays = 7   # Keep logs N days
$maxLogSizeMB = 5       # Rotate if log exceeds N MB
$downloads   = [Environment]::GetFolderPath("UserProfile") + "\Downloads"
$sounds      = "$PSScriptRoot\..\public\sounds"
$videos      = "$PSScriptRoot\..\public\videos"
$thumbnails  = "$videos\thumbnails"
$logDir      = "$PSScriptRoot\logs"

# Ensure target folders exist
foreach ($folder in @($sounds, $videos, $thumbnails, $logDir)) {
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Force -Path $folder | Out-Null
    }
}

function Get-LogFile {
    $date = Get-Date -Format "yyyy-MM-dd"
    return Join-Path $logDir "watch-$date.log"
}

function Rotate-LogIfNeeded {
    $logFile = Get-LogFile
    if (Test-Path $logFile) {
        $sizeMB = (Get-Item $logFile).Length / 1MB
        if ($sizeMB -ge $maxLogSizeMB) {
            $timestamp = Get-Date -Format "HHmmss"
            $archived = $logFile.Replace(".log", "_$timestamp.log")
            Rename-Item $logFile $archived -Force
            Write-Host "♻️ Rotated log: $archived (exceeded $maxLogSizeMB MB)"
        }
    }
}

function Write-Log($context, $msg, $level="INFO") {
    Rotate-LogIfNeeded
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $entry = "[$timestamp] [$context] [$level] $msg"
    $logFile = Get-LogFile
    Add-Content $logFile $entry
    Write-Host $entry
}

# 🧹 Auto-clean old logs
Get-ChildItem $logDir -Filter "watch-*.log" | Where-Object {
    $_.LastWriteTime -lt (Get-Date).AddDays(-$logRetentionDays)
} | ForEach-Object {
    Remove-Item $_.FullName -Force
    Write-Host "🗑️ Deleted old log: $($_.Name)"
}

Write-Log "WATCH-MEDIA" "👀 Watching $downloads for .mp3 and .mp4 files (Retention: $logRetentionDays days, Max size: $maxLogSizeMB MB)" "INFO"

# --- File System Watcher
$fsw = New-Object IO.FileSystemWatcher $downloads, "*.*"
$fsw.IncludeSubdirectories = $false
$fsw.EnableRaisingEvents = $true

Register-ObjectEvent $fsw Created -Action {
    $path = $Event.SourceEventArgs.FullPath
    $ext = [IO.Path]::GetExtension($path).ToLower()

    Start-Sleep -Milliseconds 800  # allow file write to complete

    try {
        if ($ext -eq ".mp3") {
            $name = "sound_{0:yyyyMMdd_HHmmss}.mp3" -f (Get-Date)
            $dest = Join-Path $using:sounds $name
            Move-Item $path $dest -Force
            Write-Log "WATCH-MEDIA" "✅ Moved sound → $dest"
        }
        elseif ($ext -eq ".mp4") {
            $name = "video_{0:yyyyMMdd_HHmmss}.mp4" -f (Get-Date)
            $dest = Join-Path $using:videos $name
            Move-Item $path $dest -Force
            Write-Log "WATCH-MEDIA" "✅ Moved video → $dest"

            # Thumbnail placeholder
            $thumb = Join-Path $using:thumbnails ($name.Replace(".mp4", ".jpg"))
            Add-Content $thumb "Thumbnail placeholder for $name"
            Write-Log "WATCH-MEDIA" "🖼️ Created thumbnail → $thumb"
        }
        else {
            Write-Log "WATCH-MEDIA" "⚠ Ignored non-media file: $path" "WARN"
        }
    }
    catch {
        Write-Log "WATCH-MEDIA" "❌ Error processing file $path – $($_.Exception.Message)" "ERROR"
    }
}

# Keep alive
Write-Log "WATCH-MEDIA" "Watcher started. Press Ctrl+C to exit." "INFO"
while ($true) { Start-Sleep -Seconds 2 }
