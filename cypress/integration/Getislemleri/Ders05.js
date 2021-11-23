/// <reference types="cypress" />

describe('MyTestsuite', () => {
    it('Verify Title of the page', () => {
        cy.visit('https://demo.nopcommerce.com')
        cy.title().should('eq','nopCommerce demo store')

        cy.get(".ico-login").click();
        cy.contains("Register").click();
        cy.get("#gender-male").click();
        cy.get('input[name=FirstName').should('be.visible').should('be.enabled').type("adem")
        cy.get('input[name=LastName').should('be.visible').should('be.enabled').type("demir")


        
    });
});