# scripts/stop-watch.ps1
# Stops the supervisor (start-watch.ps1) and both watchers cleanly

$scriptName = "start-watch.ps1"
$watchMedia = "watch-media.ps1"
$watchSounds = "watch-sounds.ps1"

Write-Host " Searching for running watchers and supervisor..."

# Stop supervisor
$supervisor = Get-Process powershell -ErrorAction SilentlyContinue | Where-Object {
    $_.StartInfo.Arguments -match $scriptName
}
if ($supervisor) {
    $supervisor | ForEach-Object {
        Write-Host "🛑 Stopping supervisor PID: $($_.Id)"
        Stop-Process -Id $_.Id -Force
    }
} else {
    Write-Host " No supervisor running."
}

# Stop media watcher
$media = Get-Process powershell -ErrorAction SilentlyContinue | Where-Object {
    $_.StartInfo.Arguments -match $watchMedia
}
if ($media) {
    $media | ForEach-Object {
        Write-Host " Stopping media watcher PID: $($_.Id)"
        Stop-Process -Id $_.Id -Force
    }
} else {
    Write-Host " No media watcher running."
}

# Stop sounds watcher
$sounds = Get-Process powershell -ErrorAction SilentlyContinue | Where-Object {
    $_.StartInfo.Arguments -match $watchSounds
}
if ($sounds) {
    $sounds | ForEach-Object {
        Write-Host " Stopping sounds watcher PID: $($_.Id)"
        Stop-Process -Id $_.Id -Force
    }
} else {
    Write-Host " No sounds watcher running."
}

Write-Host " All watcher processes stopped (if running)."
