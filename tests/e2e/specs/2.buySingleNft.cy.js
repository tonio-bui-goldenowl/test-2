describe('Test buy nft', () => {
    it('Connects with Metamask', () => {
        cy.visit({url: 'https://stage-app.plastiks.io/search?tab=arts', failOnStatusCode: false});
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

        // cy.get('body > header > div.container.d-none.d-md-flex > div.header__content > ul > li:nth-child(3) > a').click()
        // cy.wait(500);
        // cy.contains('Explore').click({force: true});
        cy.wait(5000);
        // cy.get('.collections-buy-button')
        // .eq(Cypress._.random(0, 9))
        // .click({force: true});

        cy.contains("Buy Now").click({force: true});
        cy.wait(9000);
        cy.get('.sufficient-funds').click()
        cy.wait(10000)
        cy.confirmMetamaskPermissionToSpend();

        cy.wait(5000)
        cy.confirmMetamaskTransaction();

        cy.wait(25000);

        cy.contains("Check out the NFT"). click()

        cy.wait(20000);

    })

    // it('Buy single nft', () => {
    //     cy.visit({url: 'https://stage-app.plastiks.io', failOnStatusCode: false});
    //     cy.get('body > header > div.container.d-none.d-md-flex > div.header__content > ul > li:nth-child(3) > a').click()
    //     cy.wait(500);
    //     cy.contains('Explore').click();
    //     cy.wait(5000);
    //     cy.contains('Buy Now').click();
    //     cy.wait(5000);
    // })
})