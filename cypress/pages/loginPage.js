class loginPage{
    
    // create variables and store the element locators here
    elements ={

        usernameField: () => cy.xpath('//input[contains(@id,"loginusername")]'),
        passwordField: () => cy.xpath('//input[contains(@id,"loginpassword")]'),
        loginButton: () => cy.xpath('//a[contains(text(),"Log in")]'),
        pageHeaderText: () => cy.xpath('//a[contains(text(),"PRODUCT STORE")]'),
        submitLoginButton: () => cy.xpath('//button[contains(text(),"Log in")]'),
        verifyUsername: () => cy.xpath('//a[contains(text(),"Welcome test")]')

    }

    login(url,username,password){
    
        cy.visitURL(url)
        cy.assertElementDisplayed(this.elements.pageHeaderText())
        cy.clickWithAssertion(this.elements.loginButton())
        
        // Forced wait but not ideal
        cy.wait(500)

        cy.clickWithAssertion(this.elements.usernameField())
        cy.typeWithAssertion(this.elements.usernameField(),username)
        cy.typeWithAssertion(this.elements.passwordField(),password)
        cy.clickWithAssertion(this.elements.submitLoginButton())
        cy.assertElementDisplayed(this.elements.verifyUsername())

    }

}

module.exports = new loginPage();
