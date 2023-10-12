/// <reference types="cypress"/>

context('My Second Test',()=>{
    // describe == context

    beforeEach('Her Testten Önce Çalışacak', ()=> {
        cy.visit('/')
    })

    it('URL Test', ()=> {
        cy.url().should('include', 'google')
        cy.url().should('eq','https://www.google.com/')
    })

    it('Title Test', ()=> {
        cy.title().should('equal', 'Google')
    })

    it('Search Test', ()=> {
        cy.get('#APjFqb').type('Cypress.io{enter}')
    })

    it('Search Test', ()=> {
        cy.get('#APjFqb', {timeout: 3000}).type('Cypress.io{enter}')
    })

})