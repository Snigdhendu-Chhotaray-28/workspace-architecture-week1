# Engineering Fundamentals: Git & GitHub Best Practices

Version control is the lifeblood of distributed software engineering teams. Mastering Git allows you to experiment fearlessly, preserve clean project history, and collaborate without stepping on teammates' toes.

---

## 1. The Anatomy of an Atomic Commit

An **atomic commit** encapsulates a single logical change. It should:
1. Touch only files directly relevant to that specific task.
2. Leave the repository in a fully compiling, green test state.
3. Be accompanied by a clear Conventional Commit message.

**Why it matters**: If a bug is introduced, `git bisect` or `git revert` can pinpoint and undo the exact commit without reverting unrelated features.

---

## 2. Rebase vs. Merge: Keeping History Linear

When incorporating recent changes from `main` into your feature branch, prefer `git rebase` over `git merge`:

```mermaid
gitGraph
   commit id: "Initial"
   branch main
   checkout main
   commit id: "Main-1"
   branch feat/onboarding
   checkout feat/onboarding
   commit id: "Feat-1"
   checkout main
   commit id: "Main-2"
   checkout feat/onboarding
   commit id: "Feat-2"
```

### The Rebase Workflow:
```bash
# 1. Fetch latest changes from origin
git fetch origin

# 2. Rebase your feature branch onto origin/main
git checkout feat/your-feature
git rebase origin/main

# 3. If conflicts arise, resolve them, then:
git add <conflicted-file>
git rebase --continue
```
*Result*: A completely linear, readable commit history with zero clutter merge commits.

---

## 3. Resolving Merge Conflicts Confidently

1. **Don't Panic**: Conflicts simply mean Git detected edits on the same lines across different commits.
2. **Use VS Code / Antigravity Merge Editor**:
   - Compare "Current Change" vs "Incoming Change".
   - Select "Accept Both" or make manual edits to synthesize the correct code.
3. **Verify**: Always run `npm test` after resolving conflicts before finishing the rebase or commit.

---

## 4. Writing Excellent Pull Requests

- **Keep It Bite-Sized**: PRs under 300 lines are reviewed 2x faster and receive significantly higher quality feedback.
- **Provide Context**: Answer "Why this change?" and "How was it verified?".
- **Include Screenshots/Logs**: Visual proof of functionality accelerates reviewer approval.
