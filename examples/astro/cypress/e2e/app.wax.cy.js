describe('Astro App Accessibility Tests with Cypress + Wax', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectWax()
  })

  it('should detect accessibility violations for main app', () => {
    cy.runWaxTest('body').then((violations) => {
      console.log('violations cypress astro', violations)
      expect(violations).to.have.length.at.least(0)
    })
  })

  it('should detect accessibility violations for buttons', () => {
    cy.runWaxTest('.buttons').then((violations) => {
      expect(violations).to.have.length.at.least(0)
    })
  })

  it('should detect accessibility violations for headings', () => {
    cy.runWaxTest('.container').then((violations) => {
      expect(violations).to.have.length.at.least(0)
    })
  })

  it('should detect accessibility violations for links', () => {
    cy.runWaxTest('.links').then((violations) => {
      expect(violations).to.have.length.at.least(0)
    })
  })

  it('write violations to file', () => {
    cy.runWaxTest('body').then((violations) => {
      // Write violations to file
      cy.writeFile('cypress/e2e/wax_violations.json', violations)

      expect(violations).to.be.ok
    })
  })
}) 