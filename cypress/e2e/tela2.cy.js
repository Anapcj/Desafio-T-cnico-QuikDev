/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
const user_data = require('../fixtures/tela2.json')

describe('Cadastro de Produto', () => {
    beforeEach(() => {
        cy.visit('teste-2.html')
    })

    it('Validar Campo Nome do Produto Vazio', () => {
        cy.fillNameProductEmpty()
        cy.confirmCadastro()
        cy.invalidProductMenssage2()
        cy.verificationEnd()
    })

    it('Validar Campo Preço Vazio', () => {
        cy.fillNameProduct(user_data.name_product2)
        cy.fillPriceEmpty()
        cy.confirmCadastro()
        cy.invalidPriceMenssage2()
        cy.verificationEnd()
    })

    it('Validar Campo Preço Inválido', () => {
        cy.fillNameProduct(user_data.name_product2)
        cy.fillPrice('-3')
        cy.confirmCadastro()
        cy.verificationEnd()
    })

    it('Validar Campo Validade Vazia', () => {
        cy.fillNameProduct(user_data.name_product2)
        cy.fillPrice(user_data.price2)
        cy.fillValidityEmpty()
        cy.confirmCadastro()
        cy.invalidValidityMenssage2()
        cy.verificationEnd()
    })

    it('Validar Campo Validade Inválida', () => {
        cy.fillNameProduct(user_data.name_product2)
        cy.fillPrice(user_data.price2)
        cy.fillValidity('2023-05-28')
        cy.confirmCadastro()
        cy.verificationEnd()
    })

    it('Realizar Cadastro do Produto com Sucesso!', () => {
        cy.fillNameProduct(user_data.name_product2)
        cy.fillPrice(user_data.price2)
        cy.fillValidity(user_data.validity2)
        cy.confirmCadastro()
        cy.validationRegister()
    })
})
