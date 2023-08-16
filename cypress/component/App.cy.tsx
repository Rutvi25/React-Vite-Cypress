import * as React from 'react';
import App from '../../src/App';

describe('Test App Component', () => {
  beforeEach(() => {
    cy.mount(<App />);
  });
  it('checks the App component contains heading', () => {
    cy.get('[data-cy="heading"]').contains('Vite + React + Cypress');
  });
  it('checks the counter is working properly', () => {
    cy.contains('count is 0')
    .click()
    .contains('count is 1')
  })
});
