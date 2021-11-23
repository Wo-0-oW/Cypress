describe('Yazi ile element bulma testleri ', () => {
    it('yaziyi iceren elemnti bul ve tikla', () => {
        cy.visit("https://etsy.com");
        //tag name = button olan elemnti tikla icerigi yazdir
        cy.get("button").contains("Sign in").click();
    });
});