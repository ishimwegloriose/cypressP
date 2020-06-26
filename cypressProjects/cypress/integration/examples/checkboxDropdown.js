///<reference types = "cypress" />
describe('checkBox and dropdown', function(){
it('test case 1', function(){
cy.visit('http://demo.automationtesting.in/Register.html')
cy.url().should('contains', 'automation')
cy.title().should('eq', 'Register')

//radio button
cy.get('[value = Male]').should('be.visible').check().should('be.checked').and('have.value', 'Male')
cy.get('[value = FeMale]').should('be.visible').should('not.be.checked').and('have.value', 'FeMale') 

// Check one by one Checkboxes

cy.get('#checkbox1').should('be.visible').check().should('be.checked').and('have.value', 'Cricket')
cy.get('#checkbox2').should('be.visible').check().should('be.checked').and('have.value', 'Movies')
cy.get('#checkbox3').should('be.visible').check().should('be.checked').and('have.value', 'Hockey')

cy.wait(5000)

// uncheck one by one Checkboxes

cy.get('#checkbox1').should('be.visible').uncheck().should('not.be.checked')
cy.get('#checkbox2').should('be.visible').uncheck().should('not.be.checked')
cy.get('#checkbox3').should('be.visible').uncheck().should('not.be.checked')
cy.wait(5000)

//Writing one statemen to check any number of checkboxes at once
// you call common type of checkboxes

cy.get('[type = checkbox]').should('be.visible').check(["Cricket", "Hockey", "Movies"])
cy.wait(5000)
cy.get('[type = checkbox]').uncheck(["Clicket", "Hockey"])

//Single select dropdown option with tag "select" (skills)
cy.get('#Skills').select('Art Design').should('have.value', 'Art Design')
cy.wait(5000)
//Multi-Select dropdown option without tag "select"
cy.get('#msdd').click() // Click on text field to get the list of items

//Use the common class locator of the list and select any item (Language)
cy.get('.ui-corner-all').contains('English').click()
cy.get('.ui-corner-all').contains('Japanese').click()
cy.wait(1000)
cy.get('.ui-corner-all').contains('Italian').click()
cy.wait(1000)

//Select dropdown by searching a text
cy.get('[role = combobox]').click({force : true})
cy.get('.select2-search__field').type('am')
cy.get('.select2-search__field').type('{enter}') 

//Select sigle country 

cy.get('select[type=text]#countries').select('Angola').should('have.value', 'Angola')
cy.wait(2000)
cy.get('#countries').select('Rwanda').should('have.value', 'Rwanda')

cy.get('#firstpassword').click()









})

})


