
import facebook from "../pageObject/fbObject.js"
before(function(){
    cy.fixture('facebook').then(function(data){
        this.data = data
    })
    after(function(){
        cy
          .get("div.n7fi1qx3.hv4rvrfc> div > span > div > div.oajrlxb2 >img")
          .as('out')
          .click({force : true})
          cy.wait(2000)
        cy.get("div:nth-child(5) > div > div.ow4ym5g4 > div.nqmvxvec> div").click() 
        cy.wait(2000)
        cy.logToFacebook("shimwegloriose@yahoo.fr", "303030")
    })
})
describe('Test facebook', function(){
    it('Test case1', function(){
        
        var fc = new facebook()
        fc.visit()
        fc.fillEmail(this.data.Email)
        fc.fillPassword(this.data.Password)
        fc.loginButton()
       // cy.wait(15000)
       // fc.logout()   
        fc.create() 
        fc.post()
        fc.writePost(this.data.Post) 
        fc.addToPost()
        //fc.closePost()
        fc.messanger()
        fc.selectUser()
        cy.screenshot()
        fc.sendMsg(this.data.msg)
        

    })
})