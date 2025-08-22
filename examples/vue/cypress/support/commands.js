// Custom commands for Vue app testing

Cypress.Commands.add('visitApp', () => {
  cy.visit('/')
})

Cypress.Commands.add('clickButton', (text) => {
  cy.contains('button', text).click()
})

Cypress.Commands.add('checkHeading', (text) => {
  cy.contains('h1, h2, h3', text).should('be.visible')
})

Cypress.Commands.add('checkLink', (text, href) => {
  cy.contains('a', text).should('have.attr', 'href', href)
}) 