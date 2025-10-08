# scripts/watch-media.ps1
# Watches Downloads for .mp3/.mp4 and moves them into /public/sounds or /public/videos
# Logs actions daily → scripts/logs/watch-YYYY-MM-DD.log
# Auto-cleans logs older than N days (configurable)
# Rotates logs if size exceeds max threshold (configurable)

# 🔧 Config
$logRetentionDays = 7   # Number of days to keep logs
$maxLogSizeMB = 5       # Maximum log size in MB before rotation
$downloads = [Environment]::GetFolderPath("UserProfile") + "\Downloads"
$sounds = "$PSScriptRoot\..\public\sounds"
$videos = "$PSScriptRoot\..\public\videos"
$thumbnails = "$videos\thumbnails"
$logDir = "$PSScriptRoot\logs"

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

function Write-Log($msg) {
    Rotate-LogIfNeeded
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $entry = "[$timestamp] $msg"
    $logFile = Get-LogFile
    Add-Content $logFile $entry
    Write-Host $entry
}

# 🔥 Auto-clean old logs (older than $logRetentionDays)
Get-ChildItem $logDir -Filter "watch-*.log" | Where-Object {
    $_.LastWriteTime -lt (Get-Date).AddDays(-$logRetentionDays)
} | ForEach-Object {
    Remove-Item $_.FullName -Force
    Write-Host "🗑️ Deleted old log: $($_.Name)"
}

Write-Log "👀 Watching $downloads for .mp3 and .mp4 files... (Retention: $logRetentionDays days, Max size: $maxLogSizeMB MB)"

$fsw = New-Object IO.FileSystemWatcher $downloads, "*.*"
$fsw.IncludeSubdirectories = $false
$fsw.EnableRaisingEvents = $true

Register-ObjectEvent $fsw Created -Action {
    $path = $Event.SourceEventArgs.FullPath
    $ext = [IO.Path]::GetExtension($path).ToLower()

    Start-Sleep -Milliseconds 800  # wait for file to finish writing

    if ($ext -eq ".mp3") {
        $name = "sound_{0:yyyyMMdd_HHmmss}.mp3" -f (Get-Date)
        $dest = Join-Path $using:sounds $name
        Move-Item $path $dest -Force
        Write-Log "✅ Moved sound → $dest"
    }
    elseif ($ext -eq ".mp4") {
        $name = "video_{0:yyyyMMdd_HHmmss}.mp4" -f (Get-Date)
        $dest = Join-Path $using:videos $name
        Move-Item $path $dest -Force
        Write-Log "✅ Moved video → $dest"

        # Generate placeholder thumbnail
        $thumb = Join-Path $using:thumbnails ($name.Replace(".mp4", ".jpg"))
        Add-Content $thumb "Thumbnail placeholder for $name"
        Write-Log "🖼️ Created thumbnail → $thumb"
    }
    else {
        Write-Log "ℹ️ Ignored non-media file: $path"
    }
}
