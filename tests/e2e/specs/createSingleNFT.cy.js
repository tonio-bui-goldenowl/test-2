describe('Create Single NFT', () => {
    it('Connects with Metamask', () => {
        cy.viewport(1920,1080)
        cy.visit({url: 'https://stage-app.plastiks.io/', failOnStatusCode: false});
        cy.wait(5000);
        cy.contains('Log in').click();
        cy.wait(5000);
        cy.get('#connect-wallet-trigger > div').click();
        cy.get("#connect-wallet__connect-wallet > div > div > a:nth-child(2) > div").click();
        cy.wait(10000);
        cy.acceptMetamaskAccess().should("be.true");
        cy.wait(10000);
        cy.get('span').should('have.class', 'curBalance')
        cy.log('login ');

        cy.visit({url: 'https://stage-app.plastiks.io/nft/collectibles/new?nft_type=single&role=artist'});
        cy.wait(5000);
        // input data to form create single NFT
        cy.get('#itemname').type("Cypress")
        cy.get('#royalty').type("0")
        cy.get('#description').type("Cypress description")
        cy.get('#instant-price').type("5")
        cy.get('#guarantee').type("0")

        cy.get('#groupFile1 > .col-12 > .row').attachFile({
            filePath: "D:/PlastiksAutomation/plastiks-testing/tests/fixtures/4.jpg",
            //encoding: 'utf-8'
        }, {
            force: true,
            subjectType: 'drag-n-drop'
        });

        cy.get(':nth-child(18) > .create-item').click()

        cy.wait(10000)

        cy.confirmMetamaskDataSignatureRequest();

        cy.wait(7000)

        cy.confirmMetamaskDataSignatureRequest();

        cy.wait(20000)

    })
})