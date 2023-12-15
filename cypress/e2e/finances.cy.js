
describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")
        
        criarTransacao("Freela", 250)
        

        cy.get("tbody tr td.description").should("have.text", "Freela")
    });
   
});

function criarTransacao(descricao, valor) {
    cy.contains("Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2023-12-14") // yyyy-mm-dd

    cy.contains('button', 'Salvar').click()
}