# React Testing Demo with Wax Accessibility Testing

A simple React application for testing npm packages with various UI components, integrated with **@wally-ax/wax-dev** for comprehensive accessibility testing across 8 different testing frameworks.

## Features

- Simple React components (Button, Heading, Link)
- Interactive elements with state management
- **Wax Accessibility Testing** integration with all testing frameworks
- Testing setup with React Testing Library and Jest
- Production-ready configuration

## Components

- **Button**: Interactive button with click handlers
- **Heading**: Configurable heading levels (h1, h2, h3, etc.)
- **Link**: External links with proper attributes

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Wax Accessibility Testing

This project is fully integrated with **@wally-ax/wax-dev** for automated accessibility testing. Wax tests are available for all 8 testing frameworks.

### Wax Configuration

The project includes a `waxConfig.js` file with the following configuration:
```javascript
export default {
  apiKey: "react-api-key",
  // Add your Wax configuration here
};
```

### Running Wax Tests

#### **Unit/Integration Tests with Wax:**

```bash
# Vitest with Wax
npm run vitest:wax

# Jest with Wax
npm run jest:wax

# Mocha with Wax
npm run mocha:wax
```

#### **End-to-End Tests with Wax:**

```bash
# Cypress with Wax
npm run cypress:run 

# Playwright with Wax
npm run playwright:test 

# WebdriverIO with Wax
npm run webdriverio:test

# TestCafe with Wax
npm run testcafe:test 

# Nightwatch with Wax
npm run nightwatch:test
```


### Wax Test Examples

#### Vitest Wax Test
```javascript
import { runWax } from '@wally-ax/wax-dev';
import waxConfig from '../waxConfig';

test('should have no accessibility violations', async () => {
  const violations = await runWax(htmlContent, waxConfig);
  expect(violations).toHaveLength(0);
});
```

#### Cypress Wax Test
```javascript
cy.runWaxTest().then((violations) => {
  expect(violations.length).to.be.at.least(0);
});
```

#### Playwright Wax Test
```javascript
const bodyHTML = await page.evaluate(() => document.body.innerHTML);
const violations = await runWax(bodyHTML, waxConfig);
expect(violations).toHaveLength(0);
```

## Testing Libraries Included

### **Unit/Integration Testing:**
- **Vitest** (`^3.2.4`): Fast unit testing framework
- **Jest** (`^29.7.0`): Test runner and assertion library
- **Mocha** (`^11.7.1`): Flexible testing framework
- **React Testing Library** (`^14.1.2`): Component testing utilities
- **@testing-library/jest-dom** (`^6.1.4`): Custom Jest matchers for DOM testing
- **@testing-library/user-event** (`^14.5.1`): User interaction simulation

### **End-to-End Testing:**
- **Cypress** (`^14.5.4`): E2E testing framework with component testing
- **Playwright** (`^1.55.0`): Multi-browser E2E testing
- **WebdriverIO** (`^8.46.0`): WebDriver-based E2E testing
- **TestCafe** (`^3.7.2`): E2E testing framework
- **Nightwatch** (`^3.12.2`): E2E testing framework



### Wax Test Setup

Each testing framework has been configured to work with Wax:

1. **Configuration**: All tests use the shared `waxConfig.js`
2. **HTML Extraction**: Tests extract rendered HTML from the React app
3. **Violation Detection**: Wax analyzes HTML for accessibility violations
4. **Reporting**: Violations are logged and can be saved to files

### Wax Test Patterns

#### For Unit/Integration Tests (Vitest, Jest, Mocha):
- Fetch HTML from the running React app
- Extract specific component HTML
- Run Wax analysis on the HTML
- Assert on violation counts

#### For E2E Tests (Cypress, Playwright, WebdriverIO, TestCafe, Nightwatch):
- Navigate to the React app
- Extract page HTML after rendering
- Run Wax analysis in browser context
- Assert on violation counts

### Wax Configuration Options

```javascript
// waxConfig.js
export default {
  apiKey: "your-api-key",
  rules: {
    // Custom accessibility rules
  },
  ignore: [
    // Rules to ignore
  ],
  // Additional Wax configuration
};
```








