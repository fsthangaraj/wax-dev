describe('React App E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the main heading', () => {
    cy.contains('h1', 'React Testing Demo').should('be.visible')
  })

  it('should display welcome heading', () => {
    cy.contains('h2', 'Welcome to our simple React app!').should('be.visible')
  })

  it('should have interactive buttons', () => {
    cy.contains('button', 'Click me!').should('be.visible')
    cy.contains('button', 'Show Alert').should('be.visible')
  })

  it('should increment counter when button is clicked', () => {
    cy.contains('button', 'Click me! (Clicked 0 times)').should('be.visible')
    cy.contains('button', 'Click me!').click()
    cy.contains('button', 'Click me! (Clicked 1 times)').should('be.visible')
  })

  it('should have external links', () => {
    cy.contains('a', 'React Documentation').should('have.attr', 'href', 'https://reactjs.org')
    cy.contains('a', 'Testing Library').should('have.attr', 'href', 'https://testing-library.com')
    cy.contains('a', 'Jest Testing Framework').should('have.attr', 'href', 'https://jestjs.io')
  })

  it('should show alert when Show Alert button is clicked', () => {
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('alertStub')
      cy.contains('button', 'Show Alert').click()
      cy.get('@alertStub').should('have.been.calledWith', 'Hello from React!')
    })
  })
}) 