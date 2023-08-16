describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('visit page', () => {
    cy.visit('/');
  });
  it('check the heading', () => {
    cy.get('[data-cy="heading"]').contains('Vite + React + Cypress');
  });
});
