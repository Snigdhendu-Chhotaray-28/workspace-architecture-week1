# Developer CLI & Environment Cheat Sheet

Keep this quick reference handy for daily engineering workflows.

---

## 1. Project Lifecycle Commands

```bash
# Run automated health check diagnostics
npm run healthcheck

# Execute test suite
npm test

# Run tests in continuous watch mode (re-runs on file save)
npm run test:watch

# Launch the Hello World application entrypoint
npm start

# Run setup & toolchain bootstrapper on Windows (PowerShell)
npm run setup:win

# Run setup & toolchain bootstrapper on macOS/Linux (Bash)
npm run setup:unix
```

---

## 2. Git & Version Control Commands

```bash
# Check current repo status & staged changes
git status

# Create and switch to a new feature branch
git checkout -b feat/your-feature-name

# Stage all modified files
git add .

# Commit with Conventional Commit formatting
git commit -m "feat(core): implement new feature description"

# Pull latest updates from main before opening PR
git fetch origin
git rebase origin/main

# Push new branch to remote repository
git push -u origin feat/your-feature-name

# View clean, one-line graphical commit history
git log --oneline --graph --decorate -n 15
```

---

## 3. Environment & Configuration Shortcuts

```bash
# Windows PowerShell: Copy example environment
Copy-Item .env.example .env

# macOS / Linux Bash: Copy example environment
cp .env.example .env

# Inspect active environment variables in PowerShell
Get-ChildItem env:

# Inspect active environment variables in Bash
printenv
```

---

## 4. Antigravity & VS Code Shortcuts

| Action | Windows / Linux | macOS |
| :--- | :--- | :--- |
| **Command Palette** | `Ctrl + Shift + P` | `Cmd + Shift + P` |
| **Quick Open File** | `Ctrl + P` | `Cmd + P` |
| **Toggle Terminal** | `Ctrl + \`` | `Cmd + \`` |
| **Format Document** | `Shift + Alt + F` | `Shift + Option + F` |
| **Multi-Cursor Edit** | `Alt + Click` | `Option + Click` |
| **Start Debugging** | `F5` | `F5` |
