# React-Vite-Cypress

### Technologies Used:
- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Cypress](https://www.cypress.io/)

## Table of Contents
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
  - [Start the Development Server](#start-the-development-server)
- [Writing Test Cases](#writing-test-cases)
  - [Component-Level Tests](#component-level-tests)
  - [End-to-End Tests](#end-to-end-tests)

### Getting started:
- Clone the repo: https://github.com/Rutvi25/React-Vite-Cypress/tree/dev
- run `npm i` or `npm install` for installing dependencies.
- run `npm run dev` to start the development server.

### Writing the test cases:
- Create the files and the component level test cases and end-to-end test cases in `cypress/component/` and `cypress/e2e/` as per the requirements.
  
  ##Component-Level Tests

  To write component-level tests in TypeScript, follow these steps:

  1. Create test files in the cypress/component/ directory with a .ts extension.
  2. Use Cypress commands to interact with your React components.
  3. Run tests using the Cypress Test Runner with the command:
     `npm run cypress`
  4. Choose the component tests in the Cypress Launchpad.

  Example component-level test file (cypress/component/myComponent.spec.ts):
  
     ![image](https://github.com/Rutvi25/React-Vite-Cypress/assets/130761232/62489bc9-b71e-4fa4-b66f-54e111aee5bb)

  5. Choose the testing types and launch the browser.
 
  ## End-to-End Tests

  For end-to-end tests in TypeScript, follow these steps:
  1. Create test files in the cypress/e2e/ directory with a .ts extension.
  2. Use Cypress commands to interact with your application as a whole.
  3. Run tests using the Cypress Test Runner with the command:
     `npm run cypress`
  4. Choose the component tests in the Cypress Launchpad.

  Example end-to-end test file (cypress/e2e/app.spec.ts):
  
    ![image](https://github.com/Rutvi25/React-Vite-Cypress/assets/130761232/56c78eaa-8293-4d0e-b9fc-31bc1f441099)

  5. Choose the testing types and launch the browser.


  ### Cypress Launchpad Screenshots
  
  ![image](https://github.com/Rutvi25/React-Vite-Cypress/assets/97082690/165e2654-c3d9-426a-a6f5-34aa8e5070bf)
  ![image](https://github.com/Rutvi25/React-Vite-Cypress/assets/97082690/04961749-783c-431b-8bef-e24e27ecbd9f)
  ![image](https://github.com/Rutvi25/React-Vite-Cypress/assets/97082690/df3d7f19-03c3-45ce-86bd-a94d0582a6f6)
