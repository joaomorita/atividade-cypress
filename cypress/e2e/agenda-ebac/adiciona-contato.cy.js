/// <reference types="cypress" />

describe('Testa função de adicionar', () => {
    it('Testa o cadastro da agenda', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('input[type="text"]').type('João Morita')
        cy.get('input[type="email"]').type('joao@email.com')
        cy.get('input[type="tel"]').type('1191999999')
        cy.get('.adicionar').click()
        cy.get('.sc-jTrPJq.bgKOAx > h2').should('contain', '4');
    })
})