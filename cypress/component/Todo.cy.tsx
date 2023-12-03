import * as React from 'react';
import TodoList from '../../src/components/TodoList';

describe('TodoList Component', () => {
  beforeEach(() => {
    cy.mount(<TodoList />);
  });

  it('should show an alert upon adding an empty todo', () => {
    // Click the Add button without typing a task
    cy.get('[data-cy=add-task-btn]').click();

    // Verify that an alert is shown
    cy.on('window:alert', (str) => {
      expect(str).to.equal("Task title can't be empty.");
    });
  });

  it('should add a new task, verify the list, and delete a task', () => {
    const taskTitle = 'Read a book';

    // Type a new task in the input
    cy.get('[data-cy=task-input]').type(taskTitle);

    // Click the Add button
    cy.get('[data-cy=add-task-btn]').click();

    // Verify that the new task is added to the list
    cy.get('[data-cy=todo-item-list] .todo-item').should('have.length', 1);
    cy.get('[data-cy=todo-item-list] .todo-item').should(
      'contain.text',
      taskTitle
    );

    // Click the Delete button for the task
    cy.get(
      '[data-cy=todo-item-list] .todo-item button[data-cy=delete-task-btn]'
    ).click();

    // Verify that the task is removed from the list
    cy.get('[data-cy=todo-item-list] .todo-item').should('have.length', 0);
    cy.get('[data-cy=todo-item-list]').should('not.contain', taskTitle);
  });
});
