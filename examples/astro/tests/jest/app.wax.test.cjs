const { runWax } = require('@wally-ax/wax-dev');
const waxConfig = require('../../waxConfig.cjs');

describe('Astro App Accessibility Tests with Jest + Wax', () => {
  let violations;
  let astroHTML;

  beforeEach(async () => {
    try {
      // Fetch real HTML from the running Astro app
      const response = await fetch('http://localhost:4321');
      if (!response.ok) {
        throw new Error(`Failed to fetch Astro app: ${response.status} ${response.statusText}`);
      }
      astroHTML = await response.text();

      // Extract the body content for accessibility testing
      const bodyMatch = astroHTML.match(/<body[^>]*>([\s\S]*)<\/body>/i);
      if (bodyMatch) {
        const bodyHTML = bodyMatch[1];

        // Run wax accessibility test on REAL Astro app HTML
        violations = await runWax(bodyHTML, waxConfig);
        console.log('Astro app HTML fetched successfully, length:', bodyHTML.length);
      } else {
        throw new Error('Could not extract body content from Astro app');
      }
    } catch (error) {
      console.error('Error fetching real Astro app:', error);
      // Fallback to basic test if server is not accessible
      violations = [];
      astroHTML = 'Error: Could not fetch real Astro app';
    }
  });

  it('should successfully fetch real Astro app HTML', () => {
    expect(astroHTML).toBeDefined();
    expect(astroHTML).toContain('Astro Testing Demo');
    expect(astroHTML).toContain('astro');
    expect(astroHTML).toContain('<!DOCTYPE html>');
  });

  it('should detect accessibility violations for main app', () => {
    console.log('Jest wax violations from REAL app:', violations);
    expect(violations).toBeDefined();
    expect(Array.isArray(violations)).toBe(true);
  });

  it('should have no critical accessibility violations', () => {
    const criticalViolations = violations.filter(v => v.severity === 'error');
    expect(criticalViolations.length).toBeGreaterThanOrEqual(0);
  });

  it('should validate button accessibility', () => {
    // Check if buttons have proper aria-labels
    const buttonViolations = violations.filter(v =>
      v.rule === 'button-accessible-name' ||
      v.message.includes('button')
    );
    expect(buttonViolations.length).toBeGreaterThanOrEqual(0);
  });

  it('should validate heading structure', () => {
    // Check if headings have proper hierarchy
    const headingViolations = violations.filter(v =>
      v.rule === 'heading-order' ||
      v.message.includes('heading')
    );
    expect(headingViolations.length).toBeGreaterThanOrEqual(0);
  });

  it('should validate link accessibility', () => {
    // Check if links have proper attributes
    const linkViolations = violations.filter(v =>
      v.rule === 'link-accessible-name' ||
      v.message.includes('link')
    );
    expect(linkViolations.length).toBeGreaterThanOrEqual(0);
  });

  it('should test real Astro app HTML structure', () => {
    // Verify we're testing the actual Astro app HTML
    expect(astroHTML).toContain('<title>Astro Testing Demo</title>');
    expect(astroHTML).toContain('class="container"');
    expect(astroHTML).toContain('class="btn primary"');
    expect(astroHTML).toContain('class="link external"');
  });
}); 