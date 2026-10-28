# ==============================================================================
# PowerShell Environment Health Check Script
# ==============================================================================

Write-Host "================================================================" -ForegroundColor Cyan
Write-Host "   INTERNSHIP ONBOARDING WORKSPACE - POWERSHELL HEALTH CHECK   " -ForegroundColor Cyan
Write-Host "================================================================" -ForegroundColor Cyan
Write-Host ""

$Passed = 0
$Warned = 0
$Failed = 0

function Report-Check($status, $label, $details, $remedy) {
    if ($status -eq "PASS") {
        $script:Passed++
        Write-Host "  [PASS] " -ForegroundColor Green -NoNewline
        Write-Host ("{0,-35} : {1}" -f $label, $details)
    } elseif ($status -eq "WARN") {
        $script:Warned++
        Write-Host "  [WARN] " -ForegroundColor Yellow -NoNewline
        Write-Host ("{0,-35} : {1}" -f $label, $details)
        if ($remedy) { Write-Host ("         └─ Remedy: {0}" -f $remedy) -ForegroundColor DarkGray }
    } else {
        $script:Failed++
        Write-Host "  [FAIL] " -ForegroundColor Red -NoNewline
        Write-Host ("{0,-35} : {1}" -f $label, $details)
        if ($remedy) { Write-Host ("         └─ Remedy: {0}" -f $remedy) -ForegroundColor DarkGray }
    }
}

# 1. Node.js Check
try {
    $nodeVer = (node -v 2>$null)
    if ($nodeVer) {
        Report-Check "PASS" "Node.js Runtime" "$nodeVer"
    } else {
        Report-Check "FAIL" "Node.js Runtime" "Node.js not found" "Install Node.js from https://nodejs.org"
    }
} catch {
    Report-Check "FAIL" "Node.js Runtime" "Error testing node" "Install Node.js"
}

# 2. npm Check
try {
    $npmVer = (npm -v 2>$null)
    if ($npmVer) {
        Report-Check "PASS" "npm Package Manager" "v$npmVer"
    } else {
        Report-Check "FAIL" "npm Package Manager" "npm not found" "Install npm with Node.js"
    }
} catch {
    Report-Check "FAIL" "npm Package Manager" "Error testing npm" "Install npm"
}

# 3. Git Check
try {
    $gitVer = (git --version 2>$null)
    if ($gitVer) {
        Report-Check "PASS" "Git CLI" "$gitVer"
    } else {
        Report-Check "FAIL" "Git CLI" "Git not found" "Install Git from https://git-scm.com"
    }
} catch {
    Report-Check "FAIL" "Git CLI" "Error checking Git" "Install Git"
}

# 4. Check critical files
$RequiredFiles = @("package.json", ".gitignore", ".env.example", "README.md", "ONBOARDING_CHECKLIST.md")
$FilesOk = $true
foreach ($file in $RequiredFiles) {
    if (-not (Test-Path $file)) {
        $FilesOk = $false
        Report-Check "FAIL" "File Check [$file]" "File does not exist" "Restore file"
    }
}
if ($FilesOk) {
    Report-Check "PASS" "Critical Repository Files" "All required baseline files present"
}

# Summary
Write-Host ""
Write-Host "Diagnostics Summary:" -ForegroundColor White
Write-Host ("  Passed: {0} | Warnings: {1} | Failures: {2}" -f $Passed, $Warned, $Failed)

if ($Failed -eq 0) {
    Write-Host ""
    Write-Host "✔ SYSTEM HEALTH CHECK PASSED: Environment ready!" -ForegroundColor Green
    exit 0
} else {
    Write-Host ""
    Write-Host "✖ SYSTEM HEALTH CHECK FAILED: Please address listed issues." -ForegroundColor Red
    exit 1
}
