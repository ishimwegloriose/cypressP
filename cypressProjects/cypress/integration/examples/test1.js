describe('Test Suite 1', function(){
it('Test case1', function(){

    cy.visit('https://web.facebook.com')
})
it('Test case2', function(){

    cy.title().should('eq', 'Facebook - Injira cyangwa wiyandikiye')
})


})