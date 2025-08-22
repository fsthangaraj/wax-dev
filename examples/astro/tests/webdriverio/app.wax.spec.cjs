const { runWax } = require('@wally-ax/wax-dev');
const waxConfig = require('../../waxConfig.cjs');

describe('Astro App Accessibility Tests with WebdriverIO + Wax', () => {
  it('should detect accessibility violations for main app', async () => {
    await browser.url('/');
    
    // Get the page HTML
    const html = await browser.getPageSource();
    
    // Run wax accessibility test
    const violations = await runWax(html, waxConfig);
    console.log('WebdriverIO wax violations from REAL app:', violations);
    
    expect(violations).toBeDefined();
    expect(Array.isArray(violations)).toBe(true);
  });

  it('should detect accessibility violations for buttons', async () => {
    await browser.url('/');
    
    // Get the buttons section HTML
    const buttonsElement = await $('.buttons');
    const buttonsHTML = await buttonsElement.getHTML();
    
    // Run wax accessibility test on buttons
    const violations = await runWax(buttonsHTML, waxConfig);
    expect(violations).toBeDefined();
    expect(Array.isArray(violations)).toBe(true);
  });

  it('should detect accessibility violations for headings', async () => {
    await browser.url('/');
    
    // Get the container HTML
    const containerElement = await $('.container');
    const containerHTML = await containerElement.getHTML();
    
    // Run wax accessibility test on container
    const violations = await runWax(containerHTML, waxConfig);
    expect(violations).toBeDefined();
    expect(Array.isArray(violations)).toBe(true);
  });

  it('should detect accessibility violations for links', async () => {
    await browser.url('/');
    
    // Get the links section HTML
    const linksElement = await $('.links');
    const linksHTML = await linksElement.getHTML();
    
    // Run wax accessibility test on links
    const violations = await runWax(linksHTML, waxConfig);
    expect(violations).toBeDefined();
    expect(Array.isArray(violations)).toBe(true);
  });

  it('should test real Astro app HTML structure', async () => {
    await browser.url('/');
    
    // Verify we're testing the actual Astro app HTML
    const title = await browser.getTitle();
    expect(title).toBe('Astro Testing Demo');
    
    const container = await $('.container');
    expect(await container.isDisplayed()).toBe(true);
    
    const primaryButton = await $('.btn.primary');
    expect(await primaryButton.isDisplayed()).toBe(true);
    
    const externalLink = await $('.link.external');
    expect(await externalLink.isDisplayed()).toBe(true);
  });
}); 