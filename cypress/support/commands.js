// Custom commands__
// Funçao para efectuar Login na Pagina

Cypress.Commands.add('loginOrange', (username, password) => {
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});