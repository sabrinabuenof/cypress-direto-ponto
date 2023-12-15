
describe('Transações', () => {

// hooks -> executar antes ou depois / de cada ou de todos os teste
// before - para executar antes de todos os testes 
// after - executar o código 1x depois de todos os testes 
// beforeEach - exercutar um determinado código antes de cada teste
// afterEach - exercutar um determinado código depois de cada teste

beforeEach(() => {
    cy.visit("https://devfinance-agilizei.netlify.app/#")
});

    it('Cadastrar uma entrada', () => {
                
        criarTransacao("Freela", 250)
        
        cy.get("tbody tr td.description").should("have.text", "Freela")
    });

    it('Cadastrar uma saída', () => {
            
        criarTransacao("Cinema", -45)
    
        cy.get("tbody tr td.description").should("have.text", "Cinema")
    });
   
});



function criarTransacao(descricao, valor) {
    cy.contains("Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2023-12-14") // yyyy-mm-dd

    cy.contains('button', 'Salvar').click()
}