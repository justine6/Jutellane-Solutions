param(
    [ValidateSet("start","stop","restart","status","help")]
    [string]$Action = "help"
)

# --- Paths ---
$scriptDir   = Split-Path -Parent $MyInvocation.MyCommand.Path
$watchSounds = Join-Path $scriptDir "watch-sounds.ps1"
$watchMedia  = Join-Path $scriptDir "watch-media.ps1"
$logDir      = Join-Path $scriptDir "logs"

# --- Config ---
$logRetentionDays = 7   # keep logs for 7 days
$maxLogSizeMB     = 5   # rotate if larger than 5 MB
$healthInterval   = 300 # 5 minutes

# Try load BurntToast (non-fatal if missing)
$ToastAvailable = $false
try {
    Import-Module BurntToast -ErrorAction Stop
    $ToastAvailable = $true
} catch { $ToastAvailable = $false }

# --- Helpers for Logging / Notifications ---
function Get-LogFile {
    $date = Get-Date -Format "yyyy-MM-dd"
    return Join-Path $logDir "all-supervisor-$date.log"
}

function Rotate-LogIfNeeded {
    $logFile = Get-LogFile
    if (Test-Path $logFile) {
        $sizeMB = (Get-Item $logFile).Length / 1MB
        if ($sizeMB -ge $maxLogSizeMB) {
            $timestamp = Get-Date -Format "HHmmss"
            $archived = $logFile.Replace(".log", "_$timestamp.log")
            Rename-Item $logFile $archived -Force
            Write-Host "♻️ Rotated supervisor log: $archived (exceeded $maxLogSizeMB MB)"
        }
    }
}

function Cleanup-OldLogs {
    if (-not (Test-Path $logDir)) { return }
    Get-ChildItem $logDir -Filter "all-supervisor-*.log" | Where-Object {
        $_.LastWriteTime -lt (Get-Date).AddDays(-$logRetentionDays)
    } | ForEach-Object {
        Remove-Item $_.FullName -Force
        Write-Host "🗑️ Deleted old supervisor log: $($_.Name)"
    }
}

function Write-Log($level, $message) {
    if (-not (Test-Path $logDir)) { New-Item -Path $logDir -ItemType Directory -Force | Out-Null }
    Rotate-LogIfNeeded
    Cleanup-OldLogs

    $logFile = Get-LogFile
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    $entry = "[$timestamp] [SUPERVISOR] [$level] $message"
    Add-Content -Path $logFile -Value $entry
    Write-Host $entry
}

function Send-Notify($title, $message) {
    if ($script:ToastAvailable) {
        try {
            New-BurntToastNotification -Text $title, $message | Out-Null
            return
        } catch {
            # fall through to beep
        }
    }
    # Fallback: console + beep
    Write-Host "🔔 $title — $message" -ForegroundColor Cyan
    [console]::Beep(1000, 250)
}

# --- Helper: start a watcher ---
function Start-Watcher($scriptPath, $name) {
    if (-not (Test-Path $scriptPath)) {
        Write-Log "ERROR" "$name script not found at $scriptPath"
        Send-Notify "Watcher failed to start" "$name missing at $scriptPath"
        return
    }
    $proc = Start-Process powershell -ArgumentList "-NoProfile -ExecutionPolicy Bypass -File `"$scriptPath`"" -WindowStyle Hidden -PassThru
    Write-Log "INFO" "Started $name watcher (PID=$($proc.Id)) → $scriptPath"
    Send-Notify "$name started" "PID $($proc.Id) is now running."
}

# --- Helper: stop all watcher processes ---
function Stop-Watchers {
    $procs = Get-Process powershell -ErrorAction SilentlyContinue | Where-Object {
        $_.StartInfo.Arguments -match "watch-(sounds|media)\.ps1"
    }
    if ($procs) {
        foreach ($p in $procs) {
            try {
                Stop-Process -Id $p.Id -Force
                Write-Log "INFO" "Stopped watcher PID=$($p.Id)"
            }
            catch {
                Write-Log "ERROR" "Failed to stop PID=$($p.Id): $($_.Exception.Message)"
            }
        }
        Send-Notify "Watchers stopped" "All watcher processes have been terminated."
    }
    else {
        Write-Log "WARN" "No watcher processes found to stop."
    }

    # Stop health monitor
    Get-Job | Where-Object { $_.Name -eq "SupervisorHealth" } | Remove-Job -Force -ErrorAction SilentlyContinue
}

# --- Health Monitor ---
function Start-HealthMonitor {
    # Kill any existing monitor jobs
    Get-Job | Where-Object { $_.Name -eq "SupervisorHealth" } | Remove-Job -Force -ErrorAction SilentlyContinue

    Start-Job -Name "SupervisorHealth" -ScriptBlock {
        param($watchSounds, $watchMedia, $healthInterval, $scriptDir)

        # Try to import BurntToast inside the job
        $ToastAvailable = $false
        try { Import-Module BurntToast -ErrorAction Stop; $ToastAvailable = $true } catch { $ToastAvailable = $false }

        function Send-NotifyJob($title, $message) {
            if ($script:ToastAvailable) {
                try { New-BurntToastNotification -Text $title, $message | Out-Null; return } catch {}
            }
            # Fallback beep
            [console]::Beep(1100, 200)
        }

        while ($true) {
            Start-Sleep -Seconds $healthInterval

            $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
            $logFile = Join-Path $scriptDir "logs/all-supervisor-$(Get-Date -Format yyyy-MM-dd).log"

            foreach ($target in @(
                @{ Path = $watchSounds; Name = "WATCH-SOUNDS" },
                @{ Path = $watchMedia;  Name = "WATCH-MEDIA"  }
            )) {
                $running = Get-Process powershell -ErrorAction SilentlyContinue | Where-Object {
                    $_.StartInfo.Arguments -match [Regex]::Escape($target.Path)
                }

                if (-not $running) {
                    $entry = "[$timestamp] [SUPERVISOR] [HEALTH] $($target.Name) not running – restarting..."
                    Add-Content -Path $logFile -Value $entry

                    Start-Process powershell -ArgumentList "-NoProfile -ExecutionPolicy Bypass -File `"$($target.Path)`"" -WindowStyle Hidden | Out-Null
                    $entry2 = "[$timestamp] [SUPERVISOR] [HEALTH] $($target.Name) restarted."
                    Add-Content -Path $logFile -Value $entry2

                    Send-NotifyJob "$($target.Name) restarted" "Supervisor auto-recovered the watcher."
                }
                else {
                    $entry = "[$timestamp] [SUPERVISOR] [HEALTH] $($target.Name) OK (PID=$($running.Id))"
                    Add-Content -Path $logFile -Value $entry
                }
            }
        }
    } -ArgumentList $watchSounds, $watchMedia, $healthInterval, $scriptDir | Out-Null

    Write-Log "INFO" "Health monitor started (checks every $($healthInterval/60) minutes)."
    Send-Notify "Health monitor active" "Checks every $($healthInterval/60) minutes."
}

# --- Action Switch ---
switch ($Action) {
    "start" {
        Write-Log "INFO" "Launching all watchers..."
        Start-Watcher $watchSounds "WATCH-SOUNDS"
        Start-Watcher $watchMedia  "WATCH-MEDIA"
        Start-HealthMonitor
    }
    "stop" {
        Stop-Watchers
    }
    "restart" {
        Write-Log "INFO" "Restarting all watchers..."
        Stop-Watchers
        Start-Sleep -Seconds 2
        Start-Watcher $watchSounds "WATCH-SOUNDS"
        Start-Watcher $watchMedia  "WATCH-MEDIA"
        Start-HealthMonitor
    }
    "status" {
        $procs = Get-Process powershell -ErrorAction SilentlyContinue | Where-Object {
            $_.StartInfo.Arguments -match "watch-(sounds|media)\.ps1"
        }
        $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
        if ($procs) {
            Write-Log "STATUS" "✅ $($procs.Count) watcher(s) running at $timestamp"
            foreach ($p in $procs) {
                $uptime = (Get-Date) - $p.StartTime
                $uptimeFormatted = "{0:D2}h:{1:D2}m:{2:D2}s" -f $uptime.Hours, $uptime.Minutes, $uptime.Seconds
                Write-Host "   PID=$($p.Id) Args=$($p.StartInfo.Arguments) – Uptime=$uptimeFormatted" -ForegroundColor Green
            }
        }
        else {
            Write-Log "STATUS" "❌ No watchers running at $timestamp"
        }

        $healthJob = Get-Job | Where-Object { $_.Name -eq "SupervisorHealth" }
        if ($healthJob) {
            Write-Host "   🩺 Health monitor is active (every $($healthInterval/60) min)" -ForegroundColor Cyan
        } else {
            Write-Host "   ⚠️ Health monitor not running" -ForegroundColor Yellow
        }
    }
    "help" {
        Write-Host "Usage: .\all.ps1 -Action <start|stop|restart|status|help>" -ForegroundColor Yellow
        Write-Host "`nActions:" -ForegroundColor Yellow
        Write-Host "  start    - Start watchers + health monitor" -ForegroundColor Green
        Write-Host "  stop     - Stop all watchers + health monitor" -ForegroundColor Green
        Write-Host "  restart  - Restart watchers + health monitor" -ForegroundColor Green
        Write-Host "  status   - Show running watcher processes + health monitor" -ForegroundColor Green
        Write-Host "  help     - Show this help message" -ForegroundColor Green
    }
}
