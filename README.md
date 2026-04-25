#  Playwright Enterprise Framework

Enterprise-grade test automation framework built with Playwright + TypeScript, designed for scalability, maintainability, and real-world QA challenges.

---

##  Overview

This project demonstrates a **production-ready automation architecture** using modern QA best practices.

It supports:
- UI Testing
- API Testing
- Environment-based execution
- CI/CD pipelines
- Scalable and maintainable test design

---

##  Architecture

```text
                ┌──────────────────────┐
                │      Test Layer      │
                │ (UI / API / E2E)    │
                └─────────┬────────────┘
                          │
                ┌─────────▼────────────┐
                │     Fixtures Layer   │
                │ (Setup / Injection)  │
                └─────────┬────────────┘
                          │
                ┌─────────▼────────────┐
                │   Page Objects (POM) │
                │  (UI Interactions)   │
                └─────────┬────────────┘
                          │
                ┌─────────▼────────────┐
                │   Utilities Layer    │
                │ (API, Data, Logger) │
                └─────────┬────────────┘
                          │
                ┌─────────▼────────────┐
                │   Config / Env Layer │
                │ (dev/staging/prod)   │
                └──────────────────────┘
```

---

##  Project Structure

```bash
.
├── tests/
│   ├── ui/
│   ├── api/
│   └── e2e/
│
├── pages/
│   ├── base/
│   └── modules/
│
├── fixtures/
├── utils/
├── data/
├── config/
│   └── environments/
│
├── .github/workflows/
├── reports/
```

---

##  Tech Stack

-  Playwright
-  TypeScript
-  Node.js
-  GitHub Actions

---

##  Key Features

- ✅ Page Object Model (POM)
- ✅ Custom fixtures (dependency injection)
- ✅ Multi-environment support (dev, staging, prod)
- ✅ UI + API testing in one framework
- ✅ Parallel execution
- ✅ Retry strategy
- ✅ Rich reporting (HTML, traces, screenshots, videos)
- ✅ CI/CD ready

---

##  Execution Flow

```text
Test → Fixture → Page Object → Action → Assertion → Report
```

---

## ▶ Getting Started

### 1. Install dependencies

```bash
 npm install
```

---

### 2. Install Playwright browsers

```bash
 npx playwright install
```

---

### 3. Run tests

```bash
 npx playwright test
```

---

### 4. Run with environment

```bash
 ENV=staging npx playwright test
```

---

##  Environment Configuration

```text
config/environments/
  ├── dev.env
  ├── staging.env
  └── prod.env
```

Example:

```env
BASE_URL=https://example.com
```

---

##  Example Test

```ts
import { test, expect } from '../../fixtures/test.fixture';

test('User can login', async ({ loginPage }) => {
  await loginPage.navigate('/login');
  await loginPage.login('user', 'password');

  await expect(loginPage['page']).toHaveURL('/dashboard');
});
```

---

##  CI/CD Integration

GitHub Actions pipeline includes:

- Install dependencies
- Run Playwright tests
- Generate reports

---

##  Reporting

- HTML Reports
- Screenshots on failure
- Video recordings
- Trace viewer

---

##  Advanced Capabilities

- 🔹 API + UI hybrid testing
- 🔹 Reusable test data strategy
- 🔹 Scalable architecture for large test suites
- 🔹 Ready for Docker & cloud execution

---

##  Future Improvements

-  AI-based test generation
-  Self-healing locators
-  Performance testing integration

---

## 👨‍ Author

Nelson Duarte  
Senior QA Automation Engineer

---

##  License

This project is licensed under the MIT License.
