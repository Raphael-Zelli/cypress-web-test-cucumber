///<reference types= "cypress" />

export default {
    visit(){
        cy.visit('/')
        cy.url().should('include', 'web/index.php/auth/login')
    },
    
    click(selector){
        cy.get(selector)
            .should('be.visible')
            .click()
    },

    validateMenssage(selector, message){
        cy.get(selector)
            .should('be.visible')
            .should('have.text', message)
    },

    type(selector,text){
        cy.get(selector)
            .should('be.visible')
            .type(text)
    }
}