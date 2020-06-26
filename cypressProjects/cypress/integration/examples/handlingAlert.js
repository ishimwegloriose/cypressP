describe('Handling Alerts', function(){
it('Test case 1', function(){
cy.visit('https://mail.rediff.com')
cy.get('.signin').click()
cy.get('[value=Sign in]').click()

//Cypress close alert window automatically but we can validate the message form it
//by using "window : alert"
cy.on('window:alert',(str)=>
{
expect(str).to.be.equal('Please enter valid Username and Password')
})

// Close alert cnofirmation and validate the message
cy.visit('https://testautomationpractice.blogspot.com/')
cy.get('button[onclick = myFunction()]').click()
cy.wait(3000)
cy.on('window:confirm', (str)=>
{
    expect(str).to.equal('Press a button!')
}
)
})
})

