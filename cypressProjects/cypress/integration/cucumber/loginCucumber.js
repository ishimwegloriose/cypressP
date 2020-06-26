
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"; 

Given('I open conduit login page', ()=>{
    cy.visit("https://react-redux.realworld.io/#/login?_k=xv68el")
});

When('I type in', (datatable)=>{
    datatable.hashes().forEach(element => {
        cy.get("input[type = email]").type(element.username)
        cy.get("input[type = password]").type(element.password)
    }) 
});

And('I click on sign in button', ()=>{
    cy.get("[type = submit]").should('be.visible').click()
    cy.wait(5000)
});

Then('four feed should be open', ()=>{
    cy.title().should('eq', "Welcome")
});