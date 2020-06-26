// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password)=>{

    cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('[type=email]').clear().type(email)
        
       // cy.get('[type=email]').type(this.data.email)
        cy.get('[type = password]').clear().type(password)
        
        cy.get('[type = submit]').click()


})
Cypress.Commands.add("logToFacebook", (Email, Password)=>{

    cy.visit("https://web.facebook.com/")
    cy.get("#email").clear().type(Email)
    cy.get("#pass").clear().type(Password)
    cy.get("#u_0_b").click({force : true})
    cy.wait(5000)

})

