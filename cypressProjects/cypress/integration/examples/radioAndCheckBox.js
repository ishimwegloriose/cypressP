describe("Radio button and check box", function(){
it('Test case 1', function(){
    cy.visit("http://newtours.demoaut.com/")
    cy.url().should("contain", "newtours")
    cy.title().should('eq', 'Welcome: Mercury Tours')
    cy.get(" input[name = userName]").should("be.visible").should("be.enabled").type("mercury")
    cy.wait(5000)
    cy.get(" input[name = password]").should("be.visible").should("be.enabled").type("mercury")
    cy.wait(5000)
    cy.get(" input[name = login]").should("be.visible").should("be.enabled").click()

    // Checking the title of the current page
    cy.title().should('eq', 'Find a Flight: Mercury Tours:')
    
    //Check radio button status
    cy.get('input[value = roundtrip]').should('be.visible').should('be.checked')
    cy.get('input[value = oneway]').should('be.visible').should('not.be.checked')
    cy.get('input[name = findFlights').should('be.visible').click()
    cy.title().should('eq', 'Select a Flight: Mercury Tours' )
    
})

})