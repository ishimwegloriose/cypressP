///<reference types= "Cypress" />

class loginPage {

    visitPage(){
        cy.visit('https://admin-demo.nopcommerce.com/login')
    }
    fillEmail(value){
     var email = cy.get('[type=email]')
     email.clear()
     email.type(value)
     return this
    }
    fillPassword(value){
        var password = cy.get('[type = password]')
        password.clear()
        password.type(value)
        return this
    }
    submit(){
        var submitLogin =  cy.get('[type = submit]')
        submitLogin.click()
        return this
    }
}
export default loginPage
