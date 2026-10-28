# 🚀 Internship Onboarding Workspace

[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![CI Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](#)
[![Health Check](https://img.shields.io/badge/healthcheck-passing-blue.svg)](#)

Welcome to the engineering team! This repository represents your **standardized, production-grade onboarding workspace**. It is designed to take you from a fresh clone to an active, validated development state with zero friction.

---

## 🌟 Quick Start Guide

Get up and running in less than 2 minutes:

### Option A: Automated Bootstrapper (Recommended)
On **Windows (PowerShell)**:
```powershell
npm run setup:win
```

On **macOS / Linux / WSL (Bash)**:
```bash
npm run setup:unix
```

### Option B: Manual Setup Steps
1. **Initialize Local Environment**:
   ```bash
   cp .env.example .env    # On Windows: Copy-Item .env.example .env
   ```
2. **Run System Health Diagnostics**:
   ```bash
   npm run healthcheck
   ```
3. **Execute Test Suite**:
   ```bash
   npm test
   ```
4. **Launch "Hello World" Application**:
   ```bash
   npm start
   ```

---

## 🧭 Repository Navigation & Directory Layout

| Directory / File | Description |
| :--- | :--- |
| [`src/`](file:///src/) | Application source code (`src/index.js`, `src/core/`, `src/utils/`) |
| [`tests/`](file:///tests/) | Native zero-dependency unit and smoke test suites |
| [`config/`](file:///config/) | Environment variable loader and default configuration settings |
| [`scripts/`](file:///scripts/) | Cross-platform setup, automation, and diagnostic health check scripts |
| [`docs/`](file:///docs/) | Central documentation hub and engineering knowledge base |
| [`docs/fundamentals/`](file:///docs/fundamentals/) | In-depth engineering modules (Clean Code, Git, Modern Web) |
| [`.vscode/`](file:///.vscode/) | Workspace settings, recommended extensions, and debug launch profiles |
| [`.github/`](file:///.github/) | CI/CD pipelines (`ci.yml`) and pull request templates |
| [`ONBOARDING_CHECKLIST.md`](file:///ONBOARDING_CHECKLIST.md) | Interactive daily progression checklist for interns and mentors |
| [`CONTRIBUTING.md`](file:///CONTRIBUTING.md) | Branch naming rules, Conventional Commits, and code review standards |

---

## 🎯 Onboarding Milestones Tracker

| Milestone | Objective | Status | Verification Command |
| :---: | :--- | :---: | :--- |
| **M1** | **Workspace Orientation & Scaffolding** | ✅ Verified | Inspect folder tree |
| **M2** | **Toolchain & Automated Setup** | ✅ Verified | `npm run healthcheck` |
| **M3** | **Development Environment & VS Code Config** | ✅ Verified | `.vscode/settings.json` |
| **M4** | **Clean Architecture & Separation of Concerns** | ✅ Verified | `docs/ARCHITECTURE.md` |
| **M5** | **Role-Specific Core Fundamentals** | ✅ Verified | `docs/fundamentals/` |
| **M6** | **Git, GitHub & Version Control Protocols** | ✅ Verified | `CONTRIBUTING.md` |
| **M7** | **"Hello World" Execution Milestone** | ✅ Verified | `npm start` |
| **M8** | **Team Workflow & Standup Protocols** | ✅ Verified | `docs/WORKFLOW.md` |
| **M9** | **Curated Resource Hub & Cheatsheet** | ✅ Verified | `docs/RESOURCES.md` |
| **M10**| **Interactive Onboarding Tracker** | ✅ Verified | `ONBOARDING_CHECKLIST.md`|
| **M11**| **Automated End-to-End Health Check** | ✅ Verified | `npm run healthcheck` |

---

## 🛠 Available Lifecycle Scripts

- `npm start`: Runs the modular "Hello World" application entrypoint (`src/index.js`).
- `npm test`: Runs the full unit and smoke test suites via Node's native test runner.
- `npm run test:watch`: Runs tests in live watch mode upon file modification.
- `npm run healthcheck`: Runs the automated environment diagnostic script.
- `npm run setup:win`: Runs the automated PowerShell installer on Windows.
- `npm run setup:unix`: Runs the automated Bash installer on macOS/Linux.

---

## 🤝 Need Help?

- Check out [`docs/WORKFLOW.md`](file:///docs/WORKFLOW.md) for the **15-Minute Unblocking Rule**.
- Review the [`docs/CHEATSHEET.md`](file:///docs/CHEATSHEET.md) for quick terminal command references.
- Ping your mentor or post in `#dev-help-desk` with the 4-point question format.
