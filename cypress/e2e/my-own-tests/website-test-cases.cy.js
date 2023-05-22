/// <reference types="cypress" />

let url = 'https://www.codedamn.com'

beforeEach(() => {

    cy.visitURL(url)
    
})

describe('Verify website contents', () => {

    it('Verify page title', () => {

        // Get Element 
        cy.get('div#root').should('exist')

        // Sample Assertion
        cy.contains('Change the world').should('exist')
    })

    it('Go to Sign in Page', () => {

        // Get Element By Xpath
        cy.xpath('//button[text()="Login"]').should('exist').click()
        cy.xpath('//h1[contains(text(),"Sign in to")]').should('exist')
        cy.log('=== Sign in page is displayed ===')

    })

})