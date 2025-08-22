import runWax from '@wally-ax/wax-dev';
import waxConfig from '../../src/waxConfig';

let violations;

describe('App Accessibility Tests with Wax', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have no accessibility violations for main app', () => {
    cy.get('body').then(async ($body) => {
      const ele = $body.html();
      violations = await runWax(ele, waxConfig);
      expect(violations).to.have.lengthOf(0);
    });
  });

  it('should have no accessibility violations for buttons', () => {
    cy.get('.container').then(async ($container) => {
      const ele = $container.html();
      violations = await runWax(ele, waxConfig);
      expect(violations).to.have.lengthOf(0);
    });
  });

  it('should have no accessibility violations for headings', () => {
    cy.get('h1, h2, h3').then(async ($headings) => {
      const ele = $headings.parent().html();
      violations = await runWax(ele, waxConfig);
      expect(violations).to.have.lengthOf(0);
    });
  });

  it('should have no accessibility violations for links', () => {
    cy.get('a').then(async ($links) => {
      const ele = $links.parent().html();
      violations = await runWax(ele, waxConfig);
      expect(violations).to.have.lengthOf(0);
    });
  });

  it('write violations to file', () => {
    cy.get('body').then(async ($body) => {
      const ele = $body.html();
      violations = await runWax(ele, waxConfig);
      cy.writeFile('cypress/fixtures/wax_violations.json', violations);
    });
  });
}); 