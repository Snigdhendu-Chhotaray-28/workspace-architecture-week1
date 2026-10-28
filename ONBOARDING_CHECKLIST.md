# Internship Onboarding Progress Tracker

Welcome to your internship journey! This interactive checklist is designed to guide your progression from Day 1 setup through your first production pull request. Check off each milestone as you complete it.

---

## 🏁 Phase 1: Day 1 - Environment Setup & Foundation

- [x] **Workspace Orientation**
  - [x] Read root `README.md` welcome portal
  - [x] Review `docs/ARCHITECTURE.md` to understand directory conventions
  - [x] Review `docs/WORKFLOW.md` for team rituals and communication channels
- [x] **Toolchain & Runtime Verification**
  - [x] Verify Node.js v18+ is installed (`node -v`)
  - [x] Verify npm is installed (`npm -v`)
  - [x] Verify Git is installed (`git --version`)
  - [x] Run automated health check (`npm run healthcheck`)
- [x] **Environment Configuration**
  - [x] Copy `.env.example` to `.env`
  - [x] Configure your name and mentor's name in `.env`
  - [x] Open project in VS Code / Antigravity with `.vscode/settings.json` enabled

---

## 🚀 Phase 2: Day 2 - Hello World & Version Control Mastery

- [x] **"Hello World" Milestone Execution**
  - [x] Run `npm start` and verify formatted welcome output
  - [x] Run automated test suite (`npm test`) with 100% pass rate
- [ ] **Git & GitHub Integration**
  - [ ] Configure Git identity:
    ```bash
    git config --global user.name "Your Name"
    git config --global user.email "you@example.com"
    ```
  - [ ] Review `CONTRIBUTING.md` for branch naming rules and Conventional Commits
  - [ ] Create a personal test branch (`feat/intern-profile-[yourname]`)
  - [ ] Push test branch to origin and open a draft PR using `.github/pull_request_template.md`

---

## 📚 Phase 3: Days 3-4 - Engineering Fundamentals Track

- [ ] **Core Engineering Deep Dives**
  - [ ] Read `docs/fundamentals/clean-code-and-conventions.md`
  - [ ] Read `docs/fundamentals/git-and-github-best-practices.md`
  - [ ] Read `docs/fundamentals/modern-software-engineering.md`
- [ ] **Practical Exercise**
  - [ ] Add a new helper function in `src/utils/` (e.g., date formatter or string sanitizer)
  - [ ] Write corresponding unit tests in `tests/`
  - [ ] Verify test suite passes (`npm test`)

---

## 🎯 Phase 4: Day 5 - First PR & Week 1 Sign-Off

- [ ] **Team Synchronization**
  - [ ] Attend daily standup and post async 3-bullet update in `#standup-async`
  - [ ] Complete 1-on-1 weekly sync with assigned mentor
- [ ] **Pull Request Lifecycle**
  - [ ] Submit PR for your Week 1 exercise
  - [ ] Address mentor code review comments
  - [ ] Achieve PR approval and merge to `main`
- [ ] **Final Week 1 Sign-Off**
  - [ ] Run final health check diagnostic (`npm run healthcheck`)
  - [ ] Mentor sign-off on onboarding checklist completion

---

## Mentor & Intern Sign-Off

| Role | Name | Signature / Status | Date |
| :--- | :--- | :--- | :--- |
| **Intern** | Engineering Intern | [ ] Completed Week 1 Tasks | |
| **Mentor** | Senior Mentor | [ ] Approved & Production Ready | |
