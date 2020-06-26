

describe('Handling html table', function(){

    it('Test case 1', function(){
        cy.visit('https://testautomationpractice.blogspot.com/')

        //check any header of the table
        cy.get('table[name=BookTable]').contains('th', 'BookName')
        
        
        //Check any item from anywhere in the table
        cy.get('table[name=BookTable]').contains('td', 'Learn Selenium')

        //Checking item from specific row and column
        cy.get('table[name=BookTable] > tbody > tr:nth-child(4) > td:nth-child(4)').contains('300')
        
        cy.get('table[name=BookTable] > tbody > tr td:nth-child(2)').each(($e, index, $list)=>
        
        {
            const element=$e.text()
            if(element.includes('Amod')){
                cy.get('table[name=BookTable] > tbody > tr td:nth-child(1)').eq(index).then(function(bname){
                    const bookname = bname.text()
                    expect(bookname).be.equal('Master In Java')
                    
                })
            
              }
        })
        })
    })
