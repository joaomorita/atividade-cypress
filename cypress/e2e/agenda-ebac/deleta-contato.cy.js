/// <reference types="cypress" />

describe('Testa função deletar', () => {
    it('Deleta contato da agenda', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
        cy.get('.sc-jTrPJq.bgKOAx > h2').should('contain', '3')
    })
})