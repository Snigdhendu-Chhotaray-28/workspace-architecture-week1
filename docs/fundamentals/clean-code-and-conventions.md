# Engineering Fundamentals: Clean Code & Conventions

Clean code is code that is easy to read, easy to understand, and easy to change. As Martin Fowler famously stated: *"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."*

---

## 1. Meaningful Names

- **Intention-Revealing**: Names should answer why it exists, what it does, and how it is used.
  ```javascript
  // ❌ Poor
  const d = 86400;
  const list = getUserList();

  // ✔ Clean
  const SECONDS_IN_A_DAY = 86400;
  const activeEngineeringUsers = getActiveUsersByRole('engineering');
  ```
- **Avoid Encodings**: Avoid Hungarian notation or type suffixes (`userArray`, `nameString`).
- **Pronounceable & Searchable**: Choose words that can be discussed aloud with your teammates.

---

## 2. Functions Should Do One Thing (Single Responsibility)

- **Small & Focused**: A function should ideally fit on a single screen (10–30 lines).
- **Single Level of Abstraction**: Don't mix high-level business orchestration with low-level string byte manipulation in the same function.
- **Pure Functions**: Where possible, write functions that return values based strictly on their arguments without mutating outer state or causing unexpected side effects.

---

## 3. Don't Repeat Yourself (DRY)

- Duplicate code represents a missed abstraction.
- When you find identical or near-identical blocks of logic across three or more places, extract them into a shared utility function (`src/utils/`).

---

## 4. Robust Error Handling

- **Never Swallow Errors Silently**:
  ```javascript
  // ❌ Dangerous: Silent failure hides bugs
  try {
    parseConfig();
  } catch (err) {}

  // ✔ Clean: Informative logging and defensive escalation
  try {
    parseConfig();
  } catch (err) {
    logger.error('Failed to parse runtime configuration', err);
    throw new ConfigurationError(`Initialization halted: ${err.message}`);
  }
  ```
- **Fail Fast**: Validate preconditions at the top of functions and throw early before expensive operations commence.

---

## 5. The Boy Scout Rule

> *"Always leave the campground cleaner than you found it."*

Whenever you open a file to add a feature or fix a bug, make a minor improvement: fix a typo in a docstring, improve a vague variable name, or remove unused dead code. Over time, the codebase continuously improves.
