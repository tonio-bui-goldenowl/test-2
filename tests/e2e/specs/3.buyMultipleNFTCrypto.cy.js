describe('buy Multiple nft Crypto', () => {
    it('buyMultipleNFT', () => {
        cy.visit({url: 'https://stage-app.plastiks.io/nft/search?tab=arts'});
        cy.wait(5000);
        cy.contains('Log in').click();
        cy.wait(2000);
        cy.get('#connect-wallet-trigger > div').click();
        cy.get("#connect-wallet__connect-wallet > div > div > a:nth-child(2) > div").click();
        cy.wait(10000);
        cy.acceptMetamaskAccess().should("be.true");
        cy.wait(10000);
        cy.get('span').should('have.class', 'curBalance')
        cy.log('login ');

        cy.wait(5000);
        //cy.get(".collections-buy-button").click({ multiple: true })
        cy.get('.collections-buy-button').first().click()
        cy.wait(10000)
        //cy.get('#nft_amount').type("3")
        // cy.wait(9000);
        cy.get(".sufficient-funds").click()
        cy.wait(10000)
        cy.confirmMetamaskPermissionToSpend();

        cy.wait(10000)

        if(cy.url().should('include','/purchase_success'))
        {
            cy.get("#btn-view-profile-owned").click()
        }else
        { 
            cy.confirmMetamaskTransaction();
            cy.wait(10000);
            cy.get("#btn-view-profile-owned").click()
        }

        
       
        cy.wait(25000);

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