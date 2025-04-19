/// <reference types="cypress" />

describe('Testa função editar', () => {
    it('Edita contato agenda', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').type(' Editado')
        cy.get('.alterar').click()
        cy.get(':nth-child(2) > .sc-dmqHEX > .sc-eDDNvR > :nth-child(1)').should('contain', 'Editado');
    })
})