/// <reference types="cypress" />

describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    //Selecionar Produto e Adicionar ao carrinho
    it('Deve adicionar produtos ao carrinho - Usando comando customizado', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(3) > .page-numbers').click()
        cy.addProdutos('Arcadio Gym Short', '32', 'Blue' , 1)
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 1)

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(3) > .page-numbers').click()
        cy.addProdutos('Atomic Endurance Running Tee (Crew-Neck)', 'XS', 'Black' , 1)
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 2)

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(3) > .page-numbers').click() 
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'XS', 'Red' , 1)
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 3)

        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get(':nth-child(3) > .page-numbers').click()
        cy.addProdutos('Augusta Pullover Jacket', 'XS', 'Orange' , 1)
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 4)

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

})