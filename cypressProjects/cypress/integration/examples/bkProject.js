import bkObject from '../pageObject/bkObject'
///<reference types = "Cypress"/>

describe('Test suit', function(){
 /*it('home page', function(){
    cy.visit('https://www.bk.rw/')
    .wait(5000)
    cy.get("div:nth-child(2)> div > h3").first()
    //.triggerHover();
    cy.wait(10000)
    cy.title().should('eq', 'BK | Personal')
    cy.contains('Open account')
    cy.wait(3000)
    cy.contains('Get a loan')
    cy.wait(3000)
    cy.contains('Get a Mortgage')
    cy.wait(3000)
    cy.contains('Card Center')
   
    cy.get('div:nth-child(1)> div > h3').contains('Open account')
    cy.get('div:nth-child(2)> div > h3').contains('Get a loan')
    cy.get('div:nth-child(3)> div > h3').contains('Get a Mortgage')
    cy.get('div:nth-child(4)> div > h3').contains('Card Center')
    cy.wait(3000)
    cy.get("div.col-lg-4 > div > h3", {timeOut : 3000}).scrollIntoView()
    .wait(5000)
    cy.get("div:nth-child(2)> div > h3").first().scrollIntoView()    
    .wait(2000)
    //('ul.nav navbar-nav').children('.dropdown menu-large').click()   

    
})
it('Top naviagation manu', function(){
    cy.visit('https://www.bk.rw/')
    cy.get('div:nth-child(1)> div > h3').contains('Open account').click()
    cy.contains('Personal Current')
    cy.contains('Joint Account')
    cy.contains('Special Savings')
    cy.contains('Fixed Savings')
    cy.contains('Cash-extra Savings')
    cy.contains('Student Saving')
    cy.contains('Kira Kibondo')
    cy.wait(3000)
})*/

it('Currency table', function(){
    cy.visit('https://www.bk.rw/')     
    cy.get('div > table > tbody').contains('USD')
    var a = cy.get('div > table > tbody > tr td:nth-child(3)').contains('951.5')
    cy.log('***Selling price is found*** ' +a)
    var b = cy.get('div > table > tbody > tr td:nth-child(2)').contains('939.5')
    cy.log('***Buying price is found*** '+b)
})
it('test case 3', function(){
    var bko = new bkObject()
   // bko.visit()
    bko.checkTable()
})

/*it('Current and saving', function(){
    cy.visit('https://www.bk.rw')
    cy.contains('Current & Savings')
    cy.wait(5000)
    cy.get('#nav > div > div > div.navbar-collapse.collapse.xs-dropdown > ul:nth-child(1) > li:nth-child(2) > a').first().click()
    cy.wait(2000)
    cy.get(' ul:nth-child(1) > li:nth-child(2) > ul > li:nth-child(2) > ul > li:nth-child(2) > a').first().click({force : true})
    cy.wait(2000)
    cy.get("div:nth-child(2) > div > p:nth-child(4) > a").scrollIntoView()
    .contains("Apply Now")     

})*/

})