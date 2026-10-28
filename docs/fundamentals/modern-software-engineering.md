# Engineering Fundamentals: Modern Software Engineering

Transitioning from academic exercises to production engineering requires understanding how modern systems are built, tested, packaged, and operated at scale.

---

## 1. The Twelve-Factor App Principles (Highlights)

Modern scalable web applications adhere to the Twelve-Factor principles:
1. **Codebase**: One codebase tracked in revision control, many deploys.
2. **Dependencies**: Explicitly declare and isolate dependencies (e.g., `package.json`).
3. **Config**: Store configuration in the environment, not in code (`.env`, `process.env`).
4. **Logs**: Treat logs as event streams rather than static files.
5. **Dev/Prod Parity**: Keep development, staging, and production as similar as possible.

---

## 2. Asynchronous Event-Driven Architectures

Modern Node.js and JavaScript applications run on a single-threaded event loop:
- **Non-blocking I/O**: Network requests, file reads, and database queries are delegated to the operating system kernel or thread pool.
- **Async/Await**: Always prefer `async/await` over raw promise chains (`.then().catch()`) or callback pyramids.
- **Error Propagation**: Always wrap asynchronous operations in `try/catch` blocks or use global unhandled rejection handlers.

---

## 3. The Testing Pyramid

A balanced test portfolio provides confidence without sacrificing execution speed:

```
        / \
       /   \        E2E Tests (Slow, high integration confidence)
      /-----\
     /       \      Integration Tests (API routes, database connectors)
    /---------\
   /           \    Unit Tests (Fast, test isolated functions in milliseconds)
  /-------------\
```

- **Unit Tests (`tests/*.test.js`)**: Fast, deterministic, test individual functions (`buildWelcomeMessage`).
- **Integration Tests**: Verify that multiple modules (configuration, logger, core) communicate properly.
- **Smoke Tests**: Sanity checks run immediately after bootstrap to ensure the environment boots without crashing.

---

## 4. Continuous Integration & Delivery (CI/CD)

- Every commit pushed to GitHub triggers automated pipelines (`.github/workflows/ci.yml`).
- If a linter fails or a single test breaks, the branch is marked red and cannot be merged into `main`.
- This automated barrier protects production stability and allows engineers to ship rapidly with confidence.
