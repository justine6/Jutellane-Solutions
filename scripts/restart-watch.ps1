# scripts/restart-watch.ps1
# Restarts the supervisor and watchers (stop  start) with logging

$logFile = "$PSScriptRoot\logs\watch.log"

function Write-Log($message) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $entry = "[$timestamp] [RESTART] $message"
    Add-Content -Path $logFile -Value $entry
    Write-Host $entry
}

Write-Log " Restart requested..."

# Run the stop script
& "$PSScriptRoot\stop-watch.ps1"
Write-Log "Stopped all watchers."

# Small delay to ensure everything is stopped
Start-Sleep -Seconds 2

# Start the supervisor again (hidden window)
Start-Process powershell -ArgumentList "-ExecutionPolicy Bypass -File `"$PSScriptRoot\start-watch.ps1`"" -WindowStyle Hidden
Write-Log "Started supervisor (start-watch.ps1)."

Write-Log " Restart completed."
