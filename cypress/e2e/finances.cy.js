describe('Transações', () => {
    it('Cadastrar uma entrada', () => {
        cy.visit("https://devfinance-agilizei.netlify.app/#") 
        
        cy.contains("Nova Transação").click()
        cy.get('#description').type("Freela")
        cy.get('#amount').type("500")
        cy.get('#date').type("2023-12-14") // yyyy-mm-dd      
        cy.contains('button', 'Salvar').click()

        cy.contains("Nova Transação").click()
        cy.get('#description').type("Cinema")
        cy.get('#amount').type("-100")
        cy.get('#date').type("2023-12-15") // yyyy-mm-dd      
        cy.contains('button', 'Salvar').click()

    });
    
});