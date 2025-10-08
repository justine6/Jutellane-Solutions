param(
    [string]$message = "chore: update project",
    [switch]$Force
)

if (-not (Test-Path ".git")) {
    Write-Host " Not a Git repository. Run in the repo root." -ForegroundColor Red
    exit 1
}

$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "ℹ No changes to commit." -ForegroundColor Yellow
} else {
    Write-Host " Staging..." -ForegroundColor Cyan
    git add .

    Write-Host " Committing..." -ForegroundColor Cyan
    git commit -m $message
    Write-Host " Changes committed." -ForegroundColor Green
}

$branch = git rev-parse --abbrev-ref HEAD
Write-Host " Pulling from '$branch'..." -ForegroundColor Cyan
git pull origin $branch --allow-unrelated-histories

if ($Force) {
    Write-Host "⚠️ Force pushing to '$branch'..." -ForegroundColor Yellow
    git push -u origin $branch --force
} else {
    Write-Host "⬆️ Pushing to '$branch'..." -ForegroundColor Cyan
    git push -u origin $branch
}
