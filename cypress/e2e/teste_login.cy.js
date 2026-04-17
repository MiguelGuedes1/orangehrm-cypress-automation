

describe('OrangeHRM - Automation Suite', () => {
  
  beforeEach(() => {
 
    cy.visit('https://opensource-demo.orangehrmlive.com/');
  });

  it('Login com sucesso e validação de Header', () => {
    cy.loginOrange('Admin', 'admin123');
    
    //verifica se o título do dashboard está visível
  cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('be.visible').and('contain', 'Dashboard');
  });


});