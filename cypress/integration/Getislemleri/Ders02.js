describe("Get silemleri", () => {
    it("Arama kutusuna Adem yaz", () => {
        cy.visit("https://amazon.com");
        //class degerleri "gLFly.gsfi" olan elementi bulur
        cy.get("#twotabsearchtextbox").type("Adem").type("{enter}");
    });

    it("Amazon iconunu locate etmek", () =>{
        cy.visit("https://amazon.com");
        cy.get("#nav-logo-sprites").then(($nav) => {
            cy.log($nav.text());
        });
    });
});