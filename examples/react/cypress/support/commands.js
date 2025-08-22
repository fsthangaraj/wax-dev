// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Custom command to visit the app
Cypress.Commands.add('visitApp', () => {
  cy.visit('/')
})

// Custom command to click button by text
Cypress.Commands.add('clickButton', (buttonText) => {
  cy.contains('button', buttonText).click()
})

// Custom command to check heading exists
Cypress.Commands.add('checkHeading', (headingText) => {
  cy.contains('h1, h2, h3, h4, h5, h6', headingText).should('be.visible')
})

// Custom command to check link exists
Cypress.Commands.add('checkLink', (linkText, href) => {
  cy.contains('a', linkText).should('have.attr', 'href', href)
}) 