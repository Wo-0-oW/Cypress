describe("Get silemleri", () => {
    it("Arama kutusuna Adem yaz", () => {
        cy.visit("https://google.com");
        //class degerleri "gLFly.gsfi" olan elementi bulur
        cy.get(".gLFyf.gsfi").type("hamza");
    });

});