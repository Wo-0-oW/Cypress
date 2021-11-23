describe("title islemleri" , ()=> {

    it("google title test" , () => {
        //google sayfasina git
        cy.visit("https://google.com");

        //sayfa basligi dogrulama
        //eq => sayfa basliginin beklentimizle ayni olup olmadigini dogrular
        //iclude => sayfa basliginin beklentimizi icerip icermedigini dogrular

        cy.title().should("include" , "Google")
    });
});
