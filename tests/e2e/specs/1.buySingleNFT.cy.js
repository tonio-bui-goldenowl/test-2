describe('Test buy single nft', () => {
    it('Buy single nft', () => {
        cy.viewport(1366, 768)
        cy.visit({url: 'https://stage-app.plastiks.io', failOnStatusCode: false});
        cy.wait(5000);
        cy.contains('Log in').click();
        cy.wait(5000);
        cy.get('#connect-wallet-trigger > div').click();
        cy.get("#connect-wallet__connect-wallet > div > div > a:nth-child(2) > div").click();
        cy.wait(10000);
        cy.acceptMetamaskAccess().should("be.true");
        cy.wait(10000);
        cy.get('span').should('have.class', 'curBalance')
        cy.log('logged in ');

        // buy single nft
        cy.visit({url: 'https://stage-app.plastiks.io/collections/f43cffbfd9f6ede537b45478845fed41', failOnStatusCode: false});
        cy.wait(5000);
        cy.get('#start-checkout.checkout-button').click()
        cy.wait(100);
        cy.scrollTo(0, 200)
        cy.get('body > div.checkout-nft.--landscape > div > div > div.checkout-form > div.payment-button-options.mt-20 > div.pay-button.triggerBuyValidation.pay-with-crypto.mt-15').click();
        cy.wait(10000)
        cy.confirmMetamaskPermisionToApproveAll().then(confirmed => {
            expect(confirmed).to.be.true;
          });
        cy.wait(5000);
    })
})