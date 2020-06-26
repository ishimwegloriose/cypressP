describe('Test suit 1', function(){
    it('Test case 1', function(){
       cy.logToFacebook("shimwegloriose@yahoo.fr", "303030")

        cy
          .get("div.n7fi1qx3.hv4rvrfc> div > span > div > div.oajrlxb2 >img")
          .as('out')
          .click({force : true})
          /*cy.wait(5000)
          cy 
            .get('@out')
            .click({force : true})*/
        cy.wait(2000)
        cy.get("div:nth-child(5) > div > div.ow4ym5g4 > div.nqmvxvec> div").click() 
        cy.wait(2000)
        cy.logToFacebook("shimwegloriose@yahoo.fr", "303030")   


        
    })
})