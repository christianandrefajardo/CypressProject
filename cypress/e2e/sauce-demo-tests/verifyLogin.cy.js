import loginPage from '../../pages/loginPage'
/// <reference types="cypress" />

let url = 'https://demoblaze.com'



it('Login to Demoblaze page', () => {

    cy.log('=== TEST CASE START ===')
    loginPage.login(url,'test','test')
    cy.log('=== TEST CASE END ===')
    
})