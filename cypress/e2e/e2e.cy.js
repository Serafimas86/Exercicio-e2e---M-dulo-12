/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json')

describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

    beforeEach(() => {
        cy.visit('produtos')

    });

    //Selecionar Produto e Adicionar ao carrinho
    it.only('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
        cy.addProdutos('Balboa Persistence Tee', 'XS', 'Gray' , 1)  
        cy.addProdutos('Beaumont Summit Kit', 'XS', 'Orange' , 1)
        cy.addProdutos('Bruno Compete Hoodie', 'XS', 'Black' , 1)
        cy.addProdutos('Caesar Warm-Up Pant', '32', 'Black' , 1)
        
    //Dados Cadastrais
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
        cy.get('.showlogin').click()
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-button').click()
        
    //Finalizando a compra
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click({force:true })
        cy.get('#place_order').click({force:true })
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    
    });
    
});
