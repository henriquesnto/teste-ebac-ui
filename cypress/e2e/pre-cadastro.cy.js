/// <reference types="cypress" />
var faker = require('faker-br');

describe('Funcionalidade Pré-Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Pre-Cadsatro Realizado com Sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('!teste@teste&')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.name.firstName())
        cy.get('#account_last_name').type(faker.name.lastName())
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')


    });
    
    it('Pre Cadastro Usuário Invalido', () => {
    });
    
    it('Pre Cadastro Senha Invalido', () => {
    });
    
    it('Pre Cadastro Usuário Em Branco', () => {
    });

    it('Pre Cadastro Senha Em Branco', () => {
    });
    
});


