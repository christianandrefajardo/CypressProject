import loginPage from '../../pages/loginPage'
/// <reference types="cypress" />

let url = 'https://demoblaze.com'

it('Login to Demoblaze page', () => {

    // This will fetch test data from json file
    cy.fixture('login.json').then((login) => {

        cy.log('=== TEST CASE START ===')
        loginPage.login(url,login.email,login.password)
        cy.log('=== TEST CASE END ===')

    })

})
