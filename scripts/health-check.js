#!/usr/bin/env node

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m'
};

function runCmd(command) {
  try {
    return execSync(command, { encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe'] }).trim();
  } catch (err) {
    return null;
  }
}

console.log(`${colors.bright}${colors.cyan}================================================================${colors.reset}`);
console.log(`${colors.bright}${colors.cyan}   INTERNSHIP ONBOARDING WORKSPACE - ENVIRONMENT HEALTH CHECK   ${colors.reset}`);
console.log(`${colors.bright}${colors.cyan}================================================================${colors.reset}\n`);

let passedCount = 0;
let warnedCount = 0;
let failedCount = 0;

function report(status, label, details, tip) {
  if (status === 'PASS') {
    passedCount++;
    console.log(`  ${colors.green}[PASS]${colors.reset} ${label.padEnd(35)} : ${details}`);
  } else if (status === 'WARN') {
    warnedCount++;
    console.log(`  ${colors.yellow}[WARN]${colors.reset} ${label.padEnd(35)} : ${details}`);
    if (tip) console.log(`         ${colors.gray}└─ Remedy: ${tip}${colors.reset}`);
  } else {
    failedCount++;
    console.log(`  ${colors.red}[FAIL]${colors.reset} ${label.padEnd(35)} : ${details}`);
    if (tip) console.log(`         ${colors.gray}└─ Remedy: ${tip}${colors.reset}`);
  }
}

// 1. Check Node.js
const nodeVersion = process.version;
const majorNode = parseInt(nodeVersion.replace(/^v/, '').split('.')[0], 10);
if (majorNode >= 18) {
  report('PASS', 'Node.js Runtime', `${nodeVersion} (Supported >= v18)`);
} else {
  report('FAIL', 'Node.js Runtime', `${nodeVersion} (Node 18+ required)`, 'Install Node.js 18+ from https://nodejs.org');
}

// 2. Check npm
const npmVersion = runCmd('npm -v');
if (npmVersion) {
  report('PASS', 'npm Package Manager', `v${npmVersion}`);
} else {
  report('FAIL', 'npm Package Manager', 'npm not found in PATH', 'Ensure npm is installed alongside Node.js');
}

// 3. Check Git CLI
const gitVersion = runCmd('git --version');
if (gitVersion) {
  report('PASS', 'Git Version Control CLI', gitVersion);
} else {
  report('FAIL', 'Git Version Control CLI', 'Git not found in PATH', 'Install Git from https://git-scm.com');
}

// 4. Check Git Repository State
const gitStatus = runCmd('git status --porcelain');
if (gitStatus !== null) {
  report('PASS', 'Git Repository Init', 'Workspace is an active Git repository');
} else {
  report('FAIL', 'Git Repository Init', 'Workspace is not a Git repo', 'Run: git init');
}

// 5. Check Git Identity Config
const gitUser = runCmd('git config user.name');
const gitEmail = runCmd('git config user.email');
if (gitUser && gitEmail) {
  report('PASS', 'Git User Identity', `${gitUser} <${gitEmail}>`);
} else {
  report('WARN', 'Git User Identity', 'user.name or user.email not configured in git config', 'Run: git config --global user.name "Your Name" && git config --global user.email "you@example.com"');
}

// 6. Check Python (optional/role-specific toolchain)
const pyVersion = runCmd('python --version') || runCmd('python3 --version');
if (pyVersion) {
  report('PASS', 'Python Runtime (Secondary)', pyVersion);
} else {
  report('WARN', 'Python Runtime (Secondary)', 'Not detected in PATH (optional for fullstack tracks)');
}

// 7. Verify Directory Structure
const requiredDirs = ['src', 'src/core', 'src/utils', 'tests', 'docs', 'docs/fundamentals', 'config', 'scripts', '.vscode'];
let allDirsExist = true;
for (const dir of requiredDirs) {
  const fullPath = path.join(rootDir, dir);
  if (!fs.existsSync(fullPath)) {
    allDirsExist = false;
    report('FAIL', `Directory [${dir}]`, 'Missing directory');
  }
}
if (allDirsExist) {
  report('PASS', 'Workspace Directory Layout', 'All 9 architectural directories verified');
}

// 8. Verify Critical Configuration Files
const criticalFiles = [
  'package.json',
  '.gitignore',
  '.env.example',
  '.vscode/settings.json',
  '.vscode/extensions.json',
  'docs/ARCHITECTURE.md',
  'docs/WORKFLOW.md',
  'ONBOARDING_CHECKLIST.md',
  'README.md'
];

let allFilesExist = true;
for (const file of criticalFiles) {
  const fullPath = path.join(rootDir, file);
  if (!fs.existsSync(fullPath)) {
    allFilesExist = false;
    report('FAIL', `Config File [${file}]`, 'Missing file');
  }
}
if (allFilesExist) {
  report('PASS', 'Critical Files & Docs', 'All configurations, templates & docs present');
}

// Summary
console.log(`\n${colors.bright}Diagnostics Summary:${colors.reset}`);
console.log(`  Passed: ${colors.green}${passedCount}${colors.reset} | Warnings: ${colors.yellow}${warnedCount}${colors.reset} | Failures: ${colors.red}${failedCount}${colors.reset}`);

if (failedCount === 0) {
  console.log(`\n${colors.bright}${colors.green}✔ WORKSPACE HEALTH CHECK PASSED: System ready for engineering sprint!${colors.reset}\n`);
  process.exit(0);
} else {
  console.log(`\n${colors.bright}${colors.red}✖ WORKSPACE HEALTH CHECK FAILED: Please resolve the failures above.${colors.reset}\n`);
  process.exit(1);
}
