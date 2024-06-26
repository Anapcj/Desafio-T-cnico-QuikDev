// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///   <reference types="cypress" />


const elements = {
    fields: {
        name_product1: '#inputNome',
        price1: '#inputPreco',
        validity1: '#inputValidade'
    }
}
Cypress.Commands.add('fillNameProduct', (name_product1) => {
    cy.get(elements.fields.name_product1)
        .should('be.visible')
        .type(name_product1)

})
Cypress.Commands.add('fillPrice', (price1) => {
    cy.get(elements.fields.price1)
        .should('be.visible')
        .type(price1)

})
Cypress.Commands.add('fillValidity', (validity1) => {
    cy.get(elements.fields.validity1)
        .should('be.visible')
        .type(validity1)

})
Cypress.Commands.add('fillNameProductEmpty', () => {
    cy.get('#inputNome')
        .should('be.visible')
        .click()

})
Cypress.Commands.add('fillPriceEmpty', () => {
    cy.get('#inputPreco')
        .should('be.visible')
        .click()
})
Cypress.Commands.add('fillValidityEmpty', () => {
    cy.get('#inputValidade')
        .should('be.visible')
        .click()
})
Cypress.Commands.add('confirmCadastro', () => {
    cy.contains('button', 'Adicionar')
        .should('be.visible')
        .click()
})
Cypress.Commands.add('verificationEnd', () => {
    cy.get('.card-header')
        .should('be.visible')
})
Cypress.Commands.add('validationRegister', () => {
    cy.get('#conteudoTabela')
        .should('be.visible')
})
