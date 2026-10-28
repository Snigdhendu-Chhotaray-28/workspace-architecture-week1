# ==============================================================================
# Automated Workspace Bootstrapper & Toolchain Setup (Windows PowerShell)
# ==============================================================================

Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "   BOOTSTRAPPING INTERNSHIP ONBOARDING WORKSPACE (WINDOWS)      " -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Setup .env file
if (-not (Test-Path ".env")) {
    if (Test-Path ".env.example") {
        Copy-Item ".env.example" ".env"
        Write-Host "  ✔ Created '.env' from '.env.example' template." -ForegroundColor Green
    } else {
        Write-Host "  ⚠ Warning: .env.example not found." -ForegroundColor Yellow
    }
} else {
    Write-Host "  ✔ '.env' file already exists." -ForegroundColor Gray
}

# 2. Run Diagnostics
Write-Host "`nRunning environment health diagnostics..." -ForegroundColor Cyan
node scripts/health-check.js
if ($LASTEXITCODE -ne 0) {
    Write-Host "`n✖ Toolchain validation failed. Please check above issues." -ForegroundColor Red
    exit 1
}

# 3. Execute Smoke Test Suite
Write-Host "`nRunning test verification suite..." -ForegroundColor Cyan
npm test
if ($LASTEXITCODE -ne 0) {
    Write-Host "`n✖ Test verification failed." -ForegroundColor Red
    exit 1
}

Write-Host "`n================================================================" -ForegroundColor Green
Write-Host "  ✔ WORKSPACE INITIALIZATION & SETUP COMPLETED SUCCESSFULLY!    " -ForegroundColor Green
Write-Host "================================================================" -ForegroundColor Green
Write-Host "Next Steps:" -ForegroundColor White
Write-Host "  1. Review 'ONBOARDING_CHECKLIST.md' for daily progression."
Write-Host "  2. Explore 'docs/ARCHITECTURE.md' and 'docs/WORKFLOW.md'."
Write-Host "  3. Run 'npm start' to test the verified Hello World app."
Write-Host ""
