#!/usr/bin/env bash
# ==============================================================================
# Bash Environment Health Check Script (macOS / Linux / WSL)
# ==============================================================================

set -eo pipefail

CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${CYAN}================================================================${NC}"
echo -e "${CYAN}   INTERNSHIP ONBOARDING WORKSPACE - BASH HEALTH CHECK          ${NC}"
echo -e "${CYAN}================================================================${NC}"
echo ""

PASSED=0
WARNED=0
FAILED=0

check_cmd() {
    local cmd_name="$1"
    local label="$2"
    local min_detail="$3"

    if command -v "$cmd_name" &> /dev/null; then
        local version=$("$cmd_name" --version 2>&1 | head -n 1)
        echo -e "  ${GREEN}[PASS]${NC} $(printf '%-30s' "$label") : $version"
        ((PASSED++))
    else
        echo -e "  ${RED}[FAIL]${NC} $(printf '%-30s' "$label") : $cmd_name command not found"
        ((FAILED++))
    fi
}

check_cmd "node" "Node.js Runtime"
check_cmd "npm" "npm Package Manager"
check_cmd "git" "Git Version Control"

echo ""
echo "Diagnostics Summary:"
echo "  Passed: $PASSED | Failures: $FAILED"

if [ "$FAILED" -eq 0 ]; then
    echo -e "\n${GREEN}✔ SYSTEM HEALTH CHECK PASSED: Environment ready!${NC}\n"
    exit 0
else
    echo -e "\n${RED}✖ SYSTEM HEALTH CHECK FAILED: Please install missing dependencies.${NC}\n"
    exit 1
fi
