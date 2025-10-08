# scripts/start-watch.ps1
# Supervises both watch-media.ps1 and watch-sounds.ps1
# Auto-restarts if they crash, rotates logs daily, runs hidden.

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$logDir = Join-Path $scriptDir "logs"
$logFile = Join-Path $logDir "start-watch.log"

# Ensure log directory exists
if (-not (Test-Path $logDir)) {
    New-Item -ItemType Directory -Force -Path $logDir | Out-Null
}

# Rotate logs daily
$today = (Get-Date).ToString("yyyy-MM-dd")
$archivedLog = Join-Path $logDir "start-watch-$today.log"

if (Test-Path $logFile) {
    $lastWrite = (Get-Item $logFile).LastWriteTime.ToString("yyyy-MM-dd")
    if ($lastWrite -ne $today) {
        Move-Item -Path $logFile -Destination $archivedLog -Force
    }
}

function Write-Log($msg) {
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $entry = "[$timestamp] $msg"
    Add-Content $logFile $entry
}

$mediaWatcher = Join-Path $scriptDir "watch-media.ps1"
$soundsWatcher = Join-Path $scriptDir "watch-sounds.ps1"

# Check if scripts exist
if (-not (Test-Path $mediaWatcher)) {
    Write-Log "❌ Missing: $mediaWatcher"
    exit 1
}
if (-not (Test-Path $soundsWatcher)) {
    Write-Log "❌ Missing: $soundsWatcher"
    exit 1
}

function Start-Watchers {
    Write-Log "🚀 Starting watchers..."

    $global:mediaProc = Start-Process powershell -ArgumentList "-ExecutionPolicy Bypass -File `"$mediaWatcher`"" -WindowStyle Hidden -PassThru
    $global:soundsProc = Start-Process powershell -ArgumentList "-ExecutionPolicy Bypass -File `"$soundsWatcher`"" -WindowStyle Hidden -PassThru

    Write-Log "✅ Media watcher PID: $($mediaProc.Id)"
    Write-Log "✅ Sounds watcher PID: $($soundsProc.Id)"
}

# --- Main Supervisor Loop ---
Start-Watchers

while ($true) {
    Start-Sleep -Seconds 5

    $mediaRunning = Get-Process -Id $mediaProc.Id -ErrorAction SilentlyContinue
    $soundsRunning = Get-Process -Id $soundsProc.Id -ErrorAction SilentlyContinue

    if (-not $mediaRunning -or -not $soundsRunning) {
        Write-Log "⚠️ One watcher stopped. Restarting both..."
        try { Stop-Process -Id $mediaProc.Id -Force -ErrorAction SilentlyContinue } catch {}
        try { Stop-Process -Id $soundsProc.Id -Force -ErrorAction SilentlyContinue } catch {}

        Start-Watchers
    }
}
