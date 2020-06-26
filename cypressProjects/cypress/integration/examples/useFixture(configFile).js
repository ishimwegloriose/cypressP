describe('use fixture file', function(){

    //accesing data from fixture file of in other loaction in the computer
    //it have to declared in before block
    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data  //this.data represent the data for the whole class        
        })   

    })

    it('login', function(){

        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('[type=email]').clear().type(this.data.email)
        cy.wait(5000)
       // cy.get('[type=email]').type(this.data.email)
        cy.get('[type = password]').clear().type(this.data.password)
        cy.wait(5000)
        cy.get('[type = submit]').click()

    })

})