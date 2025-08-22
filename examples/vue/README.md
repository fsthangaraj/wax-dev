# Vue Testing Demo with Wax Accessibility Testing

A simple Vue.js application with comprehensive testing setup for npm package integration, featuring **@wally-ax/wax-dev** for automated accessibility testing across 8 different testing frameworks.

##  Quick Start

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

The app will be available at [http://localhost:3001](http://localhost:3001)

### Build
```bash
npm run build
```

## 🎯 Wax Accessibility Testing

This project is fully integrated with **@wally-ax/wax-dev** for automated accessibility testing. Wax tests are available for all 8 testing frameworks and provide comprehensive accessibility violation detection.

### Wax Configuration

The project includes a `waxConfig.js` file with the following configuration:
```javascript
export default {
  apiKey: "vue-api-key",
  // Add your Wax configuration here
};
```

### Running Wax Tests

#### **Unit/Integration Tests with Wax:**

```bash
# Vitest with Wax
npm run vitest:wax

# Mocha with Wax
npm run mocha:wax
```

#### **End-to-End Tests with Wax:**

```bash
# Cypress with Wax
npm run cypress:wax

# Playwright with Wax
npm run playwright:wax

# WebdriverIO with Wax
npm run webdriverio:wax

# TestCafe with Wax
npm run testcafe:wax

# Nightwatch with Wax
npm run nightwatch:wax
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

## 📋 Test Commands

### Unit/Integration Testing

#### Vitest
```bash
# Run Vitest tests
npm run vitest:run

# Run Vitest in watch mode
npm run vitest

# Run Vitest with UI
npm run vitest:ui

# Run Vitest wax tests only
npm run vitest:wax
```

#### Mocha + Chai
```bash
# Run Mocha tests
npm run mocha:test

# Run Mocha wax tests only
npm run mocha:wax
```

### End-to-End Testing

#### Cypress
```bash
# Open Cypress UI
npm run cypress:open

# Run Cypress tests
npm run cypress:run

# Run Cypress wax tests only
npm run cypress:wax
```

#### Playwright
```bash
# Install Playwright browsers
npm run playwright:install

# Run Playwright tests
npm run playwright:test

# Run Playwright with UI
npm run playwright:test:ui

# Run Playwright wax tests only
npm run playwright:wax
```

#### WebdriverIO
```bash
# Run WebdriverIO tests
npm run webdriverio:test

# Run WebdriverIO wax tests only
npm run webdriverio:wax
```

#### TestCafe
```bash
# Run TestCafe tests
npm run testcafe:test

# Run TestCafe wax tests only
npm run testcafe:wax
```

#### Nightwatch
```bash
# Run Nightwatch tests
npm run nightwatch:test

# Run Nightwatch wax tests only
npm run nightwatch:wax
```

### All Tests
```bash
# Run all E2E tests
npm run e2e:all

# Run all wax tests
npm run wax:all
```


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
