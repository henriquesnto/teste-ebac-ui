/// <reference types="cypress" />

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Login Realizado com Sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
       
    });

    it('Login Usuário Invalido', () => {
        cy.get('#username').type('aluno_ebac@testecom')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
    
        cy.get('.woocommerce-error > li').should('contain', 'Erro: O usuário aluno_ebac@testecom não está registrado neste site.')
        
    });

    it('Login Senha Invalido', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@testecom')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta.')
        
    });

    it('Login Usuário Em Branco', () => {
        cy.get('#password').type('teste@testecom')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error > li').should('contain', 'Erro: Nome de usuário é obrigatório.')
        
    });

    it('Login Senha Em Branco', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('.woocommerce-form > .button').click()
        
        cy.get('.woocommerce-error > li').should('contain', 'Erro: O campo da senha está vazio.')
        
    });

    
})

