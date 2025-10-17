# scripts/watch-sounds.ps1
# Watches Downloads for .mp3 files and moves them into /public/sounds
# Logs actions daily → scripts/logs/watch-YYYY-MM-DD.log
# Auto-cleans logs older than N days and rotates logs if size exceeds max threshold

# 🔧 Config
$logRetentionDays = 7   # Keep logs N days
$maxLogSizeMB = 5       # Rotate if log exceeds N MB
$downloads   = [Environment]::GetFolderPath("UserProfile") + "\Downloads"
$sounds      = "$PSScriptRoot\..\public\sounds"
$logDir      = "$PSScriptRoot\logs"

# Ensure target folders exist
foreach ($folder in @($sounds, $logDir)) {
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

Write-Log "WATCH-SOUNDS" "👀 Watching $downloads for .mp3 files (Retention: $logRetentionDays days, Max size: $maxLogSizeMB MB)" "INFO"

# --- File System Watcher
$fsw = New-Object IO.FileSystemWatcher $downloads, "*.mp3"
$fsw.IncludeSubdirectories = $false
$fsw.EnableRaisingEvents = $true

Register-ObjectEvent $fsw Created -Action {
    $path = $Event.SourceEventArgs.FullPath

    Start-Sleep -Milliseconds 800  # allow file write to complete

    try {
        $name = "sound_{0:yyyyMMdd_HHmmss}.mp3" -f (Get-Date)
        $dest = Join-Path $using:sounds $name
        Move-Item $path $dest -Force
        Write-Log "WATCH-SOUNDS" "✅ Moved sound → $dest"
    }
    catch {
        Write-Log "WATCH-SOUNDS" "❌ Error processing file $path – $($_.Exception.Message)" "ERROR"
    }
}

# Keep alive
Write-Log "WATCH-SOUNDS" "Watcher started. Press Ctrl+C to exit." "INFO"
while ($true) { Start-Sleep -Seconds 2 }
