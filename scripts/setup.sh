#!/usr/bin/env bash
# ==============================================================================
# Automated Workspace Bootstrapper & Toolchain Setup (macOS / Linux / WSL)
# ==============================================================================

set -eo pipefail

CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${CYAN}================================================================${NC}"
echo -e "${CYAN}   BOOTSTRAPPING INTERNSHIP ONBOARDING WORKSPACE (UNIX)         ${NC}"
echo -e "${CYAN}================================================================${NC}"
echo ""

# 1. Setup .env file
if [ ! -f ".env" ]; then
    if [ -f ".env.example" ]; then
        cp .env.example .env
        echo -e "  ${GREEN}✔${NC} Created '.env' from '.env.example' template."
    else
        echo -e "  ${YELLOW}⚠${NC} Warning: .env.example not found."
    fi
else
    echo -e "  ${GREEN}✔${NC} '.env' file already exists."
fi

# 2. Run Diagnostics
echo -e "\n${CYAN}Running environment health diagnostics...${NC}"
node scripts/health-check.js

# 3. Execute Smoke Test Suite
echo -e "\n${CYAN}Running test verification suite...${NC}"
npm test

echo -e "\n${GREEN}================================================================${NC}"
echo -e "${GREEN}  ✔ WORKSPACE INITIALIZATION & SETUP COMPLETED SUCCESSFULLY!    ${NC}"
echo -e "${GREEN}================================================================${NC}"
echo "Next Steps:"
echo "  1. Review 'ONBOARDING_CHECKLIST.md' for daily progression."
echo "  2. Explore 'docs/ARCHITECTURE.md' and 'docs/WORKFLOW.md'."
echo "  3. Run 'npm start' to test the verified Hello World app."
echo ""
