# Contributing Guidelines & Git Standards

Welcome to the engineering team! To maintain high code quality, consistency, and an effortless collaboration experience across team members, all contributors follow these standardized workflows.

---

## 1. Branch Naming Conventions

Never commit directly to the `main` branch. Always cut a feature or bugfix branch using the following structure:

| Branch Type | Syntax | Example | Description |
| :--- | :--- | :--- | :--- |
| **Feature** | `feat/<short-description>` | `feat/auth-middleware` | Introducing a new capability or module |
| **Bug Fix** | `fix/<short-description>` | `fix/null-pointer-logger` | Resolving an existing defect |
| **Docs** | `docs/<short-description>` | `docs/update-architecture` | Updating or creating documentation |
| **Refactor** | `refactor/<short-description>` | `refactor/config-loader` | Code changes that improve design |
| **Test** | `test/<short-description>` | `test/greeting-edge-cases` | Adding or updating unit/integration tests |
| **Chore** | `chore/<short-description>` | `chore/update-dependencies` | Tooling, build config, or cleanup |

---

## 2. Commit Message Standards (Conventional Commits)

We enforce the [Conventional Commits](https://www.conventionalcommits.org/) specification. Each commit message must follow this structure:

```
<type>(<optional scope>): <subject>

[optional body]

[optional footer(s)]
```

### Valid Types:
- `feat`: A new feature for the user or downstream consumer
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (formatting, missing semicolons, etc.)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to build process, tooling, or auxiliary dependencies

### Good Examples:
```bash
git commit -m "feat(core): implement greeting builder with customized name support"
git commit -m "fix(config): handle missing .env file gracefully"
git commit -m "docs(workflow): add escalation protocols for blocking issues"
```

---

## 3. Pull Request (PR) Workflow

1. **Pull the latest main branch**:
   ```bash
   git checkout main
   git pull origin main
   ```
2. **Create your feature branch**:
   ```bash
   git checkout -b feat/your-feature-name
   ```
3. **Make atomic, tested commits**:
   - Keep commits small, logical, and focused on one concern.
4. **Run Pre-Flight Local Verification**:
   ```bash
   npm run healthcheck
   npm test
   npm start
   ```
5. **Push your branch to GitHub**:
   ```bash
   git push -u origin feat/your-feature-name
   ```
6. **Open a Pull Request**:
   - Fill out all sections of `.github/pull_request_template.md`.
   - Request review from your assigned mentor.
   - Address any review feedback with additional commits.

---

## 4. Code Quality & Review Standards

- **Readability first**: Write self-documenting code with meaningful names.
- **Fail gracefully**: Explicitly handle edge cases and log informative diagnostics.
- **Test coverage**: Any new logic in `src/core/` or `src/utils/` must be accompanied by corresponding tests in `tests/`.
- **Zero broken builds**: PRs will only be merged once all CI checks in `.github/workflows/ci.yml` pass.
