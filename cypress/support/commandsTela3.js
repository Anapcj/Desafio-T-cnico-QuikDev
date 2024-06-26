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

//import setup from 'cypress-cy-select';
//setup();

const elements = {
    fields: {
        name_product3: '#inputNome',
        price3: '#inputPreco',
        validity3: '#inputValidade'
    }
}
Cypress.Commands.add('fillNameProduct', (name_product3) => {
    cy.get(elements.fields.name_product3)
        .should('be.visible')
        .type(name_product3)

})
Cypress.Commands.add('fillPrice', (price3) => {
    cy.get(elements.fields.price3)
        .should('be.visible')
        .type(price3)

})
Cypress.Commands.add('fillValidity', (validity3) => {
    cy.get(elements.fields.validity3)
        .should('be.visible')
        .type(validity3)

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
Cypress.Commands.add('invalidProductMenssage3', () => {
    cy.contains('Nome invalido')
        .should('be.visible')
        .click()
})
Cypress.Commands.add('invalidPriceMenssage3', () => {
    cy.contains('Preço invalido')
        .should('be.visible')
        .click()

})
Cypress.Commands.add('invalidValidityMenssage3', () => {
    cy.contains('Validade Invalida')
        .should('be.visible')
        .click()
})
