/// <reference types="cypress" />

describe('MyTestSuite', () => {
    it('Table Test', () => {
        
        cy.visit('https://testautomationpractice.blogspot.com')


        //1) Check value presence anywhere in the table

        cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')

        //2) Check Value presence in specific row & column

        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

        

        cy.get('table[name=BookTable] > tbody > tr:nth-child(7) > td:nth-child(2)').contains('Amit').should('be.visible')
    
    
        //3)Verify the book name "Amster In Java" Whose author is Amod

        cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').each(($e1,index,$list) => {

            const text = $e1.text()

            if(text.includes("Amod")) {
                cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function(bnmae){

                    const bookName = bnmae.text()
                    expect(bookName).to.equal("Master In Java")
                })
                

                }
    
    
        });
    }); });