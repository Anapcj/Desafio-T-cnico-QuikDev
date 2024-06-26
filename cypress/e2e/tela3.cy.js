/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
const user_data = require('../fixtures/tela3.json')

describe('Cadastro de Produto', () => {
    beforeEach(() => {
        cy.visit('teste-3.html')
    })

    it('Validar Campo Nome do Produto Vazio', () => {
        cy.fillNameProductEmpty()
        cy.confirmCadastro()
        cy.invalidProductMenssage3()
        cy.verificationEnd()
    })

    it('Validar Campo Preço Vazio', () => {
        cy.fillNameProduct(user_data.name_product3)
        cy.fillPriceEmpty()
        cy.confirmCadastro()
        cy.invalidPriceMenssage3()
        cy.verificationEnd()
    })

    it('Validar Campo Preço Inválido', () => {
        cy.fillNameProduct(user_data.name_product3)
        cy.fillPrice('-4')
        cy.confirmCadastro()
        cy.verificationEnd()
    })

    it('Validar Campo Validade Vazia', () => {
        cy.fillNameProduct(user_data.name_product3)
        cy.fillPrice(user_data.price3)
        cy.fillValidityEmpty()
        cy.confirmCadastro()
        cy.invalidValidityMenssage3()
        cy.verificationEnd()
    })

    it('Validar Campo Validade Inválida', () => {
        cy.fillNameProduct(user_data.name_product3)
        cy.fillPrice(user_data.price3)
        cy.fillValidity('2022-02-06')
        cy.confirmCadastro()
        cy.verificationEnd()
    })

    it('Realizar Cadastro do Produto com Sucesso!', () => {
        cy.fillNameProduct(user_data.name_product3)
        cy.fillPrice(user_data.price3)
        cy.fillValidity(user_data.validity3)
        cy.confirmCadastro()
        cy.validationRegister()
    })
})
