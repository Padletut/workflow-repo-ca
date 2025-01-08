# Workflow repo for the CA

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (https://nodejs.org/)
- npm (https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Padletut/workflow-repo-ca.git
   cd workflow-repo-ca
   npm install
   ```
2. Required Environment Variables
   ```
   BASE_URL
   VITE_API_URL
   TEST_USER_EMAIL
   TEST_USER_PASSWORD
   ```
   You can use the provided `.env.example` file as a template.

## Scripts

To start the development server:

```
npm run start
```

Build CSS with Tailwind:

```
npm run dev
```

Run unit tests with Vitest:

```
npm run vitest
```

Run end-to-end tests with Playwright:

```
npm run e2e
```

Run end-to-end tests in UI mode with Playwright:

```
npm run e2e:ui
```

Run end-to-end tests in debug mode with Playwright:

```
npm run e2e:debug
```

Run end-to-end tests in headed mode with Playwright:

```
npm run e2e:headed
```

Show Playwright test report:

```
npm run e2e:report
```

Lint the code:

```
npm run lint
```

### Pre-commit Hooks

This project uses Husky and lint-staged to run pre-commit hooks. The hooks will automatically format and lint the code before each commit.
