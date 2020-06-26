describe('This is before, after, beforeEach and afterEach', function(){
    
   before(function(){ // Before function is executed once before all the tests run
       cy.log("This is a setup block")
   })

   after(function(){  // after function is executed once after all the tests run
    cy.log("This is a teardown block")
})
   
beforeEach(function(){ // beforeEach is executed everytime before each test run
    cy.log("This is login block")
})

afterEach(function(){  //afterEach is executed everytime after each test run
    cy.log("This is a logout block")
})
    it('Test case 1', function(){

       cy.log("Searching items") 
    })
    it('Test case 2', function(){

        cy.log("Searching customers") 
     })
     it('Test case 3', function(){

        cy.log("Searching coffee equipments") 
     })
})