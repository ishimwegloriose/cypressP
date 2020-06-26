describe('Test Suit 2', function(){
it('Test case 1', function(){

    cy.visit('https://demo.nopcommerce.com')
    cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")
    cy.get(".search-box-button").click()
    cy.wait(5000)
    cy.get(".product-box-add-to-cart-button[value = 'Add to cart']").click()
    cy.get(".qty-input").clear().type("2")
    cy.get("#add-to-cart-button-4").click()
    cy.wait(5000)
    cy.get(".cart-label").click()
    cy.wait(3000)
    cy.get(".product-unit-price").contains("$1,800.00")
    cy.wait(3000)
    cy.get(".product-subtotal").contains("$3,600.00")
})


})