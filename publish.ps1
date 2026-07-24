# publish.ps1
# Rebuilds the site (Tina Cloud content + Next static export) and deploys to
# Firebase Hosting — the "pr-website" site ONLY. Run this whenever content was
# edited in /admin (which commits to master) to push those edits live.
#
# Usage:   .\publish.ps1
# Prereq:  make sure your local repo has the latest content first:
#            git checkout master
#            git pull company master

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot
$env:Path += ";$env:APPDATA\npm"

if (-not (Test-Path ".env.local")) { throw ".env.local missing - cannot build" }

# Tina's CLI does not read .env.local, so load those vars into the environment.
Get-Content ".env.local" | ForEach-Object {
  if ($_ -match '^\s*([^#=][^=]*)=(.*)$') {
    [Environment]::SetEnvironmentVariable($matches[1].Trim(), $matches[2].Trim())
  }
}

Write-Host "Building (Tina Cloud + static export)..." -ForegroundColor Cyan
npm run build:cloud
if ($LASTEXITCODE -ne 0) { throw "Build failed" }

Write-Host "Deploying to Firebase Hosting (pr-website)..." -ForegroundColor Cyan
firebase deploy --only hosting:pr-website
if ($LASTEXITCODE -ne 0) { throw "Deploy failed" }

Write-Host "Published -> https://pr-website.web.app" -ForegroundColor Green
