describe("ETSY testleri", () => {
    it("etsy sayfa basligi testi", () => {
        cy.visit("https://etsy.com");

        cy.title().should("include", "Etsy");
    });


    it("arama kutusuna phone yaz ve ara", () => {
        cy.get("#global-enhancements-search-query").type("phone").type("{enter}");
    });
   //it("ilk gelen ilana tikla", () => {
      //  cy.get("a[data-listing-id=1040969956]").click();
   // });


    it("ikinci urune tikla ", () => {
        cy.get("a[data-listing-id='907691521']").click();
    });
});