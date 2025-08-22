import { runWax } from '@wally-ax/wax-dev'
import waxConfig from '../../src/waxConfig.js'

describe('Vue App Accessibility Tests with Cypress + Wax', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should have no accessibility violations for main app', () => {
    cy.get('body').then(async ($body) => {
      const violations = await runWax($body.html(), waxConfig)
      console.log('violations cypress vue', violations)
      expect(violations).to.have.length(0)
    })
  })

  it('should have no accessibility violations for buttons', () => {
    cy.get('.container').then(async ($container) => {
      const violations = await runWax($container.html(), waxConfig)
      expect(violations).to.have.length(0)
    })
  })

  it('should have no accessibility violations for headings', () => {
    cy.get('h1, h2, h3').first().parent().then(async ($parent) => {
      const violations = await runWax($parent.html(), waxConfig)
      expect(violations).to.have.length(0)
    })
  })

  it('should have no accessibility violations for links', () => {
    cy.get('a').first().parent().then(async ($parent) => {
      const violations = await runWax($parent.html(), waxConfig)
      expect(violations).to.have.length(0)
    })
  })

  it('write violations to file', () => {
    cy.get('body').then(async ($body) => {
      const violations = await runWax($body.html(), waxConfig)
      
      // Write violations to file
      cy.writeFile('cypress/e2e/wax_violations.json', violations)
      
      expect(violations).to.be.ok
    })
  })
}) 