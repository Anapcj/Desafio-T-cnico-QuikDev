/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
const user_data = require('../fixtures/tela1.json')

describe('Cadastro de Produto', () => {
    beforeEach(() => {
        cy.visit('teste-1.html')
    })

    it('Validar Campo Nome do Produto Vazio', () => {
        cy.fillNameProductEmpty()
        cy.confirmCadastro()
        cy.verificationEnd()
    })

    it('Validar Campo Preço Vazio', () => {
        cy.fillNameProduct(user_data.name_product1)
        cy.fillPriceEmpty()
        cy.confirmCadastro()
        cy.verificationEnd()
    })

    it('Validar Campo Preço Inválido', () => {
        cy.fillNameProduct(user_data.name_product1)
        cy.fillPrice('-2')
        cy.confirmCadastro()
        cy.verificationEnd()
    })

    it('Validar Campo Validade Vazia', () => {
        cy.fillNameProduct(user_data.name_product1)
        cy.fillPrice(user_data.price1)
        cy.fillValidityEmpty()
        cy.confirmCadastro()
        cy.verificationEnd()
    })

    it('Validar Campo Validade Inválida', () => {
        cy.fillNameProduct(user_data.name_product1)
        cy.fillPrice(user_data.price1)
        cy.fillValidity('30/03/2022')
        cy.confirmCadastro()
        cy.verificationEnd()
    })

    it('Realizar Cadastro do Produto com Sucesso!', () => {
        cy.fillNameProduct(user_data.name_product1)
        cy.fillPrice(user_data.price1)
        cy.fillValidity(user_data.validity1)
        cy.confirmCadastro()
        cy.validationRegister()
    })
})
