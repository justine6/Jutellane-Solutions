param(
    [string]$message = "chore: update project"
)

try {
    # Ensure we are in a git repo
    if (-not (Test-Path ".git")) {
        throw "❌ Not a git repository. Please run inside your project folder."
    }

    # Detect current branch
    $branch = git rev-parse --abbrev-ref HEAD
    Write-Host "🌿 Current branch: $branch" -ForegroundColor Cyan

    # Check for changes
    $status = git status --porcelain
    if ([string]::IsNullOrWhiteSpace($status)) {
        Write-Host "ℹ️ No changes to commit. Skipping push." -ForegroundColor Yellow
        exit 0
    }

    Write-Host "🔄 Staging changes..." -ForegroundColor Cyan
    git add .

    Write-Host "📝 Creating commit..." -ForegroundColor Cyan
    git commit -m $message

    # Try pulling remote branch
    Write-Host "⬇️ Syncing with remote branch '$branch'..." -ForegroundColor Cyan
    $pullResult = git pull origin $branch --allow-unrelated-histories 2>&1

    if ($LASTEXITCODE -ne 0 -and $pullResult -match "couldn't find remote ref") {
        Write-Host "⚠️ Remote branch '$branch' does not exist. Creating it on GitHub..." -ForegroundColor Yellow
        git push -u origin $branch
    }
    else {
        Write-Host "⬆️ Pushing to GitHub branch '$branch'..." -ForegroundColor Cyan
        git push -u origin $branch
    }

    Write-Host "✅ Push completed successfully to branch '$branch'!" -ForegroundColor Green
}
catch {
    Write-Host "❌ Error: $($_.Exception.Message)" -ForegroundColor Red
}
