const { test, expect } = require('@playwright/test');

test.describe('Vue App Playwright Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main heading', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Vue Testing Demo');
  });

  test('should display welcome heading', async ({ page }) => {
    await expect(page.locator('h2')).toContainText('Welcome to our simple Vue app!');
  });

  test('should have interactive buttons', async ({ page }) => {
    await expect(page.locator('button')).toContainText(/Click me!/);
    await expect(page.locator('button')).toContainText('Show Alert');
  });

  test('should increment counter when button is clicked', async ({ page }) => {
    const button = page.locator('button').filter({ hasText: /Click me!/ });
    await expect(button).toContainText('Clicked 0 times');
    await button.click();
    await expect(button).toContainText('Clicked 1 times');
  });

  test('should have external links', async ({ page }) => {
    await expect(page.locator('a[href="https://vuejs.org"]')).toContainText('Vue Documentation');
    await expect(page.locator('a[href="https://testing-library.com"]')).toContainText('Testing Library');
    await expect(page.locator('a[href="https://vitest.dev"]')).toContainText('Vitest Testing Framework');
  });

  test('should show alert when Show Alert button is clicked', async ({ page }) => {
    page.on('dialog', dialog => {
      expect(dialog.message()).toBe('Hello from Vue!');
      dialog.accept();
    });
    await page.locator('button').filter({ hasText: 'Show Alert' }).click();
  });
}); 