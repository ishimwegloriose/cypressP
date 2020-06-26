
import loginPage from '../pageObject/loginPage' //Import class to acces it methods

describe('test loginPageObject', function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data  //this.data represent the data for the whole class        
        })   

    })

    it('Test case1', function(){

        var loginObject = new loginPage()//Create an an object which help you to access each method in the class

        loginObject.visitPage() ////call first method to navigate URL
        loginObject.fillEmail(this.data.email)//call second method and pass value
        loginObject.fillPassword(this.data.password) //call third method and pass value
        loginObject.submit() ////call fourth method 
        cy.title().should('eq','Dashboard / nopCommerce administration')
        cy.log('***That is how we call class object***')
    })
})