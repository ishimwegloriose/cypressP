describe('custom commands in support folder', function(){

    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data  //this.data represent the data for the whole class        
        })   

    })
    it('Test case 1', function(){

        cy.login('admin@yourstore.com', 'admin')
        cy.log('****New customer****')
    })
    it('Test case 2', function(){

        cy.login('admin@yourstore.com', 'admin')
        cy.log('****Edit customer****')
    })
    it('Test case 3', function(){

        cy.login('admin@yourstore.com', 'admin')
        cy.log('****Delete customer****')
    })
})