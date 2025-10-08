param (
    [string]$SourceFolder = "$env:USERPROFILE\OneDrive\Pictures\Screenshots",
    [string]$TargetFolder = ".\public\images"
)

# Make sure target folder exists
if (-not (Test-Path $TargetFolder)) {
    New-Item -ItemType Directory -Path $TargetFolder -Force | Out-Null
}

# Files to copy
$files = @("justine-banner.png", "justine-profile.jpg")

foreach ($file in $files) {
    $sourcePath = Join-Path $SourceFolder $file
    $targetPath = Join-Path $TargetFolder $file

    if (Test-Path $sourcePath) {
        Copy-Item $sourcePath $targetPath -Force
        Write-Host "✅ Copied $file to $TargetFolder" -ForegroundColor Green
    }
    else {
        Write-Host "⚠️ Skipped: $file not found in $SourceFolder" -ForegroundColor Yellow
    }
}

Write-Host "🎉 Update complete! Pushing changes to GitHub..." -ForegroundColor Cyan

# --- Git automation ---
try {
    git add $TargetFolder
    git commit -m "chore: update images (banner + profile)"
    git push origin main
    Write-Host "🚀 Changes pushed to GitHub successfully!" -ForegroundColor Green
}
catch {
    Write-Host "❌ Git push failed. Please check your repo setup." -ForegroundColor Red
}
