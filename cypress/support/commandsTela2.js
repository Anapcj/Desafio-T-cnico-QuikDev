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
        name_product2: '#inputNome',
        price2: '#inputPreco',
        validity2: '#inputValidade'
    }
}
Cypress.Commands.add('fillNameProduct', (name_product2) => {
    cy.get(elements.fields.name_product2)
        .should('be.visible')
        .type(name_product2)

})
Cypress.Commands.add('fillPrice', (price2) => {
    cy.get(elements.fields.price2)
        .should('be.visible')
        .type(price2)

})
Cypress.Commands.add('fillValidity', (validity2) => {
    cy.get(elements.fields.validity2)
        .should('be.visible')
        .type(validity2)

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
Cypress.Commands.add('invalidProductMenssage2', () => {
    cy.contains('Nome invalido')
        .should('be.visible')
        .click()
})
Cypress.Commands.add('invalidPriceMenssage2', () => {
    cy.contains('Preço invalido')
        .should('be.visible')
        .click()

})
Cypress.Commands.add('invalidValidityMenssage2', () => {
    cy.contains('Validade Invalida')
        .should('be.visible')
        .click()
})
