class bkObject{

    visit(){
        cy.visit('https://www.bk.rw/')
    }
    checkTable(){

    var usd = cy.get('div > table > tbody')
    usd.contains('USD')

    var sellingPrice = cy.get('div > table > tbody > tr td:nth-child(3)').contains('951.5')
    cy.log('***Selling price is found*** ')
    
    var buyingPrice = cy.get('div > table > tbody > tr td:nth-child(2)').contains('939.5')
    cy.log('***Buying price is found***')

   //var result = sellingPrice.should('be.greaterThan', buyingPrice)
  
   cy.get('div > table > tbody > tr td:nth-child(3)').each(($e, index, $list)=>
        
   {
       const element=$e.text()
       if(element.includes('951.5')){
        cy.get('div > table > tbody > tr td:nth-child(2)').eq(index).then(function(bpri){  
            
        cy.wrap(bpri).should('be.lessThan', 951.5)
            /*const bPrice = bpri.text();  
            cy.wrap(939.5).should('be.lessThan', 951.5)           
           
            cy.log('***Buying price is :*** '+bPrice)*/

                                   
           })         
                 
         }
   })
}
}
export default bkObject