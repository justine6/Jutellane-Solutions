<# 
.SYNOPSIS
  One-click deploy for Jutellane Solutions on Vercel.

.DESCRIPTION
  - Ensures the project is linked to the correct team scope.
  - Deploys either Preview (default) or Production (--prod).
  - Prints the resulting deployment URL.

.PARAMETER Prod
  Deploy to Production when present. Otherwise makes a Preview deployment.

.PARAMETER ProjectName
  Vercel project name. Default matches the current project.

.PARAMETER Scope
  Vercel team/org scope. Default is 'jutellane'.

.EXAMPLES
  # Preview deploy (recommended for feature branches)
  .\Deploy-Jutellane.ps1

  # Production deploy
  .\Deploy-Jutellane.ps1 -Prod

  # Override project name (rare)
  .\Deploy-Jutellane.ps1 -Prod -ProjectName 'jutellane-solutions-9ivg'
#>

param(
  [switch]$Prod,
  [string]$ProjectName = "jutellane-solutions-9ivg",
  [string]$Scope = "jutellane"
)

function Invoke-Vercel {
  param([string]$Args)
  # Always use the latest CLI via npx so you don’t need a global install
  return & npx vercel@latest $Args
}

Write-Host "🔧 Scope: $Scope" -ForegroundColor Cyan
Write-Host "📦 Project: $ProjectName" -ForegroundColor Cyan
Write-Host ""

# 1) Make sure we’re logged in (this will no-op if you already are)
try {
  # This endpoint is harmless; if not logged in Vercel will prompt in the CLI.
  Write-Host "🔐 Checking Vercel auth…" -ForegroundColor DarkGray
  $null = Invoke-Vercel "--version"
} catch {
  Write-Warning "Vercel CLI needs login. You may be prompted in the next step."
}

# 2) Ensure the project is linked to this folder (.vercel/ folder)
$vercelLinkExists = Test-Path ".vercel/project.json"
if (-not $vercelLinkExists) {
  Write-Host "🔗 Linking this directory to Vercel project '$ProjectName' (scope '$Scope')…" -ForegroundColor Yellow
  Invoke-Vercel "link --yes --scope `"$Scope`" --project `"$ProjectName`""
  if ($LASTEXITCODE -ne 0) { throw "Failed to link Vercel project." }
} else {
  Write-Host "🔗 Project already linked (.vercel/project.json found)." -ForegroundColor DarkGray
}

# 3) Build deploy arguments
$deployArgs = @("--yes","--confirm","--scope `"$Scope`"","--name `"$ProjectName`"")
if ($Prod) {
  $deployArgs += "--prod"
  Write-Host "🚀 Deploying to PRODUCTION…" -ForegroundColor Green
} else {
  Write-Host "🚀 Deploying to PREVIEW…" -ForegroundColor Green
}

# 4) Run the deployment
$fullArgs = ($deployArgs -join " ")
$deployOutput = Invoke-Vercel $fullArgs 2>&1
if ($LASTEXITCODE -ne 0) {
  Write-Error "Vercel deployment failed.`n$deployOutput"
  exit 1
}

# 5) Try to extract the URL from output
$match = [regex]::Match($deployOutput, "(https?://[a-z0-9\-.]+\.vercel\.app)")
if ($match.Success) {
  $url = $match.Value
  if ($Prod) {
    Write-Host "✅ Production deployment ready:" -ForegroundColor Green
  } else {
    Write-Host "✅ Preview deployment ready:" -ForegroundColor Green
  }
  Write-Host "   $url" -ForegroundColor Cyan
} else {
  Write-Host $deployOutput
  Write-Warning "Could not automatically detect the deployment URL from output."
}

exit 0
