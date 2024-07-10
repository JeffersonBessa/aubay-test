import homepage from "../support/pages/homepage/homepage"

describe('Login Scenario', () => {

    it('Login with Valid Credentials', () => {
        cy.visit(Cypress.env('base_url'))
        homepage.typeUsername(Cypress.env('username'))
        homepage.typePassword(Cypress.env('password'))
        homepage.clickBtnLogin()
        homepage.validateUserLogin()
    })
})