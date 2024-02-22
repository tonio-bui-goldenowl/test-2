describe('BuyPRG', () => {
    it('BuyPRG', () => {
        cy.visit({url: 'https://stage-app.plastiks.io/search?tab=arts', failOnStatusCode: false});
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

        
        cy.visit('https://stage-app.plastiks.io/users/0xc2505610B657F1A5a5332efD3B2F63734eB891e1/recovery_project_profile?tab=sustainability')
        cy.wait(3000)
        cy.get("#triggerStartCheckout").click()
        cy.wait(9000)
        cy.get('.sufficient-funds').click()
        cy.wait(10000)
        cy.confirmMetamaskPermissionToSpend();

        cy.wait(8000)
       
        
        if(cy.url().should('include','/purchase_success'))
        {
            cy.get("#btn-view-profile-owned").click()
        }else
        { 
            cy.confirmMetamaskTransaction();
            cy.wait(10000);
            cy.get("#btn-view-profile-owned").click()
        }

        //cy.url().should('include', 'tab=impact_gallery')

        cy.wait(5000);




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