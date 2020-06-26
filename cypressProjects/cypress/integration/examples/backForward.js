///<reference types = "cypress" />

describe('Back and forward', function(){

    it('Test case 1', function(){
       cy.visit('https://demo.nopcommerce.com/')
       cy.title().should('eq','nopCommerce demo store')
       cy.get('.ico-register').contains('Reg').click()
       cy.title().should('eq', 'nopCommerce demo store. Register')
       cy.wait(3000)

       //back to the previous page
       cy.go('back')
       cy.title().should('eq','nopCommerce demo store')
       cy.wait(3000)
       //Go back to the next page
       cy.go('forward')
       cy.title().should('eq', 'nopCommerce demo store. Register')

       cy.go(-1) //go back
       cy.title().should('eq','nopCommerce demo store')

       cy.go(1)  // go forward
       cy.title().should('eq', 'nopCommerce demo store. Register')

       cy.reload() // click on refresh icon of the browser to reload the page()
    })
})

