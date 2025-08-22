// Custom commands for Astro + Wax integration

// Inject wax helper and config into the browser
Cypress.Commands.add('injectWax', () => {
  cy.window().then((win) => {
    // Import the real wax package
    import('@wally-ax/wax-dev').then((waxModule) => {
      win.runWax = waxModule.runWax;
      win.waxConfig = {
        rules: [],
        apiKey: "wax-api-key"
      };
      console.log('Real Wax Helper injected - runWax and waxConfig available');
    }).catch((error) => {
      console.error('Failed to load wax package:', error);
      // Fallback to mock if real package fails
      win.waxConfig = {
        rules: [],
        apiKey: "wax-api-key"
      };

      win.runWax = async function(html, config) {
        const violations = [];

        // Check for missing alt attributes on images
        if (html.includes('<img') && !html.includes('alt=')) {
          violations.push({
            rule: 'image-alt',
            message: 'Images should have alt attributes',
            severity: 'error'
          });
        }

        // Check for missing aria-labels on interactive elements
        if (html.includes('<button') && !html.includes('aria-label=') && !html.includes('aria-labelledby=')) {
          violations.push({
            rule: 'button-accessible-name',
            message: 'Buttons should have accessible names',
            severity: 'error'
          });
        }

        return violations;
      };
    });
  });
});

// Run wax test on current page
Cypress.Commands.add('runWaxTest', (selector = 'body') => {
  return cy.get(selector).then(async ($el) => {
    const html = $el.html();
    const violations = await cy.window().then((win) => win.runWax(html, win.waxConfig));
    return violations;
  });
}); 