// Creating reusable commands for the whole framework

let url
Cypress.Commands.add('visitURL', (url) => {

    cy.visit(url)
    cy.log('=== URL is opened ===')

})

Cypress.Commands.add('typeWithAssertion', (element, string) => {

    element.should('exist').type(string)
    cy.log('=== Element is visible and typed ' +string+ ' ===')

})

Cypress.Commands.add('clickWithAssertion', (element) => {

    element.should('exist').click()
    cy.log('=== Element is visible and clicked ' +element+ ' ===')

})

Cypress.Commands.add('assertElementDisplayed', (element) => {

    element.should('exist')
    cy.log('=== Element ' +element+ ' is displayed ===')

})