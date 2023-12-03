import * as React from 'react';
import App from '../../src/App';

describe('Test App Component', () => {
  beforeEach(() => {
    cy.mount(<App />);
  });
  it('checks the App component contains heading', () => {
    cy.get('[data-cy=heading]').contains('Todo Application');
  });
});
