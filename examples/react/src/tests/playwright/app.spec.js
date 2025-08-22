const { test, expect } = require('@playwright/test');

test.describe('React App Playwright Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main heading', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('React Testing Demo');
  });

  test('should display welcome heading', async ({ page }) => {
    await expect(page.locator('h2')).toContainText('Welcome to our simple React app!');
  });

  test('should have interactive buttons', async ({ page }) => {
    await expect(page.getByRole('button', { name: /Click me!/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Show Alert/ })).toBeVisible();
  });

  test('should increment counter when button is clicked', async ({ page }) => {
    await expect(page.getByText(/Clicked 0 times/)).toBeVisible();
    await page.getByRole('button', { name: /Click me!/ }).click();
    await expect(page.getByText(/Clicked 1 times/)).toBeVisible();
  });

  test('should have external links', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'React Documentation' })).toHaveAttribute('href', 'https://reactjs.org');
    await expect(page.getByRole('link', { name: 'Testing Library' })).toHaveAttribute('href', 'https://testing-library.com');
    await expect(page.getByRole('link', { name: 'Jest Testing Framework' })).toHaveAttribute('href', 'https://jestjs.io');
  });

  test('should show alert when Show Alert button is clicked', async ({ page }) => {
    page.on('dialog', dialog => {
      expect(dialog.message()).toBe('Hello from React!');
      dialog.accept();
    });
    
    await page.getByRole('button', { name: /Show Alert/ }).click();
  });
}); 