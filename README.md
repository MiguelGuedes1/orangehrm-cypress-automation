# 👥 OrangeHRM — E2E Automation with Cypress

> End-to-end automated test suite for the [OrangeHRM](https://opensource-demo.orangehrmlive.com/) HR management platform, built for **maintainability**, **scalability**, and **clean architecture**.

![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

---

## 📌 Project Overview

This project delivers a structured E2E automation suite targeting core HR workflows in OrangeHRM. The architecture is built around the **Page Object Model (POM)** to ensure a clear separation of concerns between test logic and UI interaction, and **Custom Commands** to eliminate duplication and keep specs readable.

Every test is written to be independent, deterministic, and easy to extend — the same standards you'd expect in a production-grade QA pipeline.

---

## 🏗️ Architecture

### Page Object Model (POM)

Each page or component of the application is encapsulated in its own class, exposing only the actions and assertions needed by the tests. This means UI changes only require updates in one place — never inside the test specs themselves.

```
cypress/
├── e2e/                   # Test spec files
├── pages/                 # Page Object classes
├── support/
│   ├── commands.js        # Custom Cypress commands
│   └── e2e.js             # Global config & imports
├── fixtures/              # Static test data (JSON)
```

### Custom Commands

Repetitive flows like login, navigation, and form interactions are abstracted into reusable custom commands registered in `commands.js`. This keeps spec files focused on **what** is being tested, not **how** to interact with the UI.

```js
// Example usage in a spec
cy.login('Admin', 'admin123');
cy.navigateTo('PIM');
```

---

## ✅ Test Coverage

| Module | Scenarios Covered |
|---|---|
| Authentication | Login (valid), Login (invalid credentials), Logout |
| PIM — Employee Management | Add employee, Search employee, Edit employee details |
| Leave Management | Apply for leave, View leave list |
| Directory | Search by name, Search by job title |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- npm v8 or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/MiguelGuedes1/orangehrm-cypress-automation.git
cd orangehrm-cypress-automation

# Install dependencies
npm install
```

### Running Tests

```bash
# Open Cypress Test Runner (interactive mode)
npx cypress open

# Run all tests headlessly (CI mode)
npx cypress run

# Run a specific spec
npx cypress run --spec "cypress/e2e/login.cy.js"
```

---

## ⚙️ Configuration

The base URL and other settings are defined in `cypress.config.js`:

```js
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    viewportWidth: 1280,
    viewportHeight: 720,
  }
});
```

---

## 🧠 Key Design Decisions

**Why POM?** As the test suite grows, having UI selectors and interaction logic inside spec files becomes a maintenance burden. POM ensures that a selector change in the app only requires an update in the corresponding page object — not across every test that touches that element.

**Why Custom Commands?** Authentication and navigation are required across nearly every test. Abstracting them into commands eliminates boilerplate and makes specs read like business language, not automation code.

**Why no hardcoded waits?** All synchronisation is handled through Cypress's built-in retry-ability and explicit assertions — no `cy.wait(ms)` for arbitrary time delays.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| Cypress | E2E test framework |
| JavaScript | Test language |
| Node.js | Runtime environment |
| POM Pattern | Test architecture |
| Custom Commands | Code reusability |

---

## 📂 Related Projects

| Project | Description |
|---|---|
| [Shady Meadows B&B](https://github.com/MiguelGuedes1/Shady-Meadows) | Manual testing + E2E automation with BDD/Gherkin |
| [ServeRest API](https://github.com/MiguelGuedes1/serverrest_tests) | API automation + Xray integration via custom Node.js script |

---

<div align="center">

*Built with a QA-first mindset — clean, traceable, and built to scale.*

</div>
