# Astro.js Testing Demo

A simple Astro.js application with **8 testing libraries** integrated with **@wally-ax/wax-dev** for accessibility testing.

##  Features

- **Simple UI**: Button, headings, and links components
- **Interactive Elements**: Click counters and alerts
- **Accessibility Testing**: Integrated with Wax accessibility library
- **8 Testing Frameworks**: Complete testing ecosystem

##  Testing Libraries Integrated

| Framework | Purpose | Wax Integration |
|-----------|---------|-----------------|
| **Vitest** | Fast unit testing (Vite-based) |  Real Wax Package |
| **Jest** | JavaScript testing framework |  Real Wax Package |
| **Mocha** | Alternative test runner |  Real Wax Package |
| **Cypress** | E2E testing |  Real Wax Package |
| **Playwright** | Cross-browser testing |  Real Wax Package |
| **WebdriverIO** | WebDriver protocol testing |  Real Wax Package |
| **TestCafe** | Browser testing without WebDriver |  Real Wax Package |
| **Nightwatch** | End-to-end testing |  Real Wax Package |

##  Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The app will be available at: **http://localhost:4321**

## 🔍 Wax Accessibility Testing - Complete Guide



### **🏁 Prerequisites**

1. **Start the Astro development server**:
   ```bash
   npm run dev
   ```
   ⚠️ **Important**: The server must be running at `http://localhost:4321` for tests to work!

2. **Verify the app is accessible**: Visit `http://localhost:4321` in your browser

### **🧪 Run Wax Tests by Framework**

#### **Unit Testing Frameworks (Node.js)**

These frameworks fetch HTML from the running server and test it in a Node.js environment:

```bash
# Vitest - Fast and modern
npm run vitest:wax

# Jest - Most popular JavaScript testing
npm run jest:wax  

# Mocha - Flexible test runner
npm run mocha:wax
```

#### **End-to-End Testing Frameworks (Browser)**

These frameworks run in real browsers and test the fully rendered DOM:

```bash
# Cypress - Developer-friendly E2E
npm run cypress:wax

# Playwright - Cross-browser testing  
npm run playwright:wax

# WebdriverIO - WebDriver standard
npm run webdriverio:wax

# TestCafe - No WebDriver needed
npm run testcafe:wax

# Nightwatch - Simple E2E testing
npm run nightwatch:wax
```

### **⚡ Quick Test All Frameworks**

Run accessibility tests across **ALL 8 frameworks** at once:

```bash
npm run wax:all
```

This runs: Vitest → Jest → Mocha → Cypress → Playwright → WebdriverIO → TestCafe → Nightwatch


###  Customizing Wax Configuration

Edit `waxConfig.js` or `waxConfig.cjs`:

```javascript
const waxConfig = {
  rules: [], // Add specific rules to test
  apiKey: "your-api-key-here" // Your Wax API key
};
```


##  Running Tests

### **Unit Tests (Node.js Environment)**

#### **Vitest** - Fast unit testing
```bash
npm run vitest          # Watch mode
npm run vitest:ui       # UI mode
npm run vitest:run      # Run once
npm run vitest:wax      # Run with Wax accessibility tests
```

#### **Jest** - JavaScript testing framework
```bash
npm run jest:test       # Run all Jest tests
npm run jest:wax        # Run with Wax accessibility tests
```

#### **Mocha** - Alternative test runner
```bash
npm run mocha:test      # Run all Mocha tests
npm run mocha:wax       # Run with Wax accessibility tests
```

### **E2E Tests (Browser Environment)**

#### **Cypress** - E2E testing
```bash
npm run cypress:open    # Open Cypress UI
npm run cypress:run     # Run all Cypress tests
npm run cypress:wax     # Run with Wax accessibility tests
```

#### **Playwright** - Cross-browser testing
```bash
npm run playwright:install  # Install browsers
npm run playwright:test     # Run all Playwright tests
npm run playwright:test:ui  # Run with UI
npm run playwright:wax      # Run with Wax accessibility tests
```

#### **WebdriverIO** - WebDriver protocol testing
```bash
npm run webdriverio:test    # Run all WebdriverIO tests
npm run webdriverio:wax     # Run with Wax accessibility tests
```

#### **TestCafe** - Browser testing without WebDriver
```bash
npm run testcafe:test       # Run all TestCafe tests
npm run testcafe:wax        # Run with Wax accessibility tests
```

#### **Nightwatch** - End-to-end testing
```bash
npm run nightwatch:test     # Run all Nightwatch tests
npm run nightwatch:wax      # Run with Wax accessibility tests
```

### **Run All Tests**

#### **All E2E Tests**
```bash
npm run e2e:all
```

#### **All Wax Tests**
```bash
npm run wax:all
```


- [Astro Documentation](https://docs.astro.build/)
- [@wally-ax/wax-dev](https://www.npmjs.com/package/@wally-ax/wax-dev)
- [Testing Library Documentation](https://testing-library.com/)
- [Vitest Documentation](https://vitest.dev/)

---

**Built with ❤️ using Astro.js and 8 testing frameworks** 