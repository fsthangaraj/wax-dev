const { test, expect } = require('@playwright/test');
const { runWax } = require('@wally-ax/wax-dev');
const waxConfig = require('../../waxConfig.cjs');

test.describe('Astro App Accessibility Tests with Playwright + Wax', () => {
  test('should detect accessibility violations for main app', async ({ page }) => {
    await page.goto('/');
    
    // Get the page HTML
    const html = await page.content();
    
    // Run wax accessibility test
    const violations = await runWax(html, waxConfig);
    console.log('Playwright wax violations from REAL app:', violations);
    
    expect(violations).toBeDefined();
    expect(Array.isArray(violations)).toBe(true);
  });

  test('should detect accessibility violations for buttons', async ({ page }) => {
    await page.goto('/');
    
    // Get the buttons section HTML
    const buttonsHTML = await page.locator('.buttons').innerHTML();
    
    // Run wax accessibility test on buttons
    const violations = await runWax(buttonsHTML, waxConfig);
    expect(violations).toBeDefined();
    expect(Array.isArray(violations)).toBe(true);
  });

  test('should detect accessibility violations for headings', async ({ page }) => {
    await page.goto('/');
    
    // Get the container HTML
    const containerHTML = await page.locator('.container').innerHTML();
    
    // Run wax accessibility test on container
    const violations = await runWax(containerHTML, waxConfig);
    expect(violations).toBeDefined();
    expect(Array.isArray(violations)).toBe(true);
  });

  test('should detect accessibility violations for links', async ({ page }) => {
    await page.goto('/');
    
    // Get the links section HTML
    const linksHTML = await page.locator('.links').innerHTML();
    
    // Run wax accessibility test on links
    const violations = await runWax(linksHTML, waxConfig);
    expect(violations).toBeDefined();
    expect(Array.isArray(violations)).toBe(true);
  });

  test('should test real Astro app HTML structure', async ({ page }) => {
    await page.goto('/');
    
    // Verify we're testing the actual Astro app HTML
    await expect(page).toHaveTitle('Astro Testing Demo');
    await expect(page.locator('.container')).toBeVisible();
    await expect(page.locator('.btn.primary')).toBeVisible();
    await expect(page.locator('.link.external')).toBeVisible();
  });
}); 