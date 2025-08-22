describe('Vue App E2E Tests', () => {
  beforeEach(() => {
    cy.visitApp()
  })

  it('should display the main heading', () => {
    cy.checkHeading('Vue Testing Demo')
  })

  it('should display welcome heading', () => {
    cy.checkHeading('Welcome to our simple Vue app!')
  })

  it('should have interactive buttons', () => {
    cy.contains('button', /Click me!/).should('be.visible')
    cy.contains('button', 'Show Alert').should('be.visible')
  })

  it('should increment counter when button is clicked', () => {
    cy.contains('button', /Click me!/).should('contain', 'Clicked 0 times')
    cy.clickButton(/Click me!/)
    cy.contains('button', /Click me!/).should('contain', 'Clicked 1 times')
  })

  it('should have external links', () => {
    cy.checkLink('Vue Documentation', 'https://vuejs.org')
    cy.checkLink('Testing Library', 'https://testing-library.com')
    cy.checkLink('Vitest Testing Framework', 'https://vitest.dev')
  })

  it('should show alert when Show Alert button is clicked', () => {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alert')
      cy.clickButton('Show Alert')
      cy.get('@alert').should('be.calledWith', 'Hello from Vue!')
    })
  })
}) 