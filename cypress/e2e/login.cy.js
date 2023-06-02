/// <reference types="Cypress" />

const validUser = Cypress.env('validUser')
const invalidUser = Cypress.env('invalidUser')

// Import POM method
import { LogIn } from '../support/pom-objects/Authorisation.cy'

describe('Login', () => {

  beforeEach('Go to application.', function () {
    cy.visit('/');
  });

  it('Successfully login', () => {
    cy.loginUser(validUser.username, validUser.password);
    cy.url().should('include', '/dashboard/index');
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard');
  });

  it('Show error for incorrect credentials', () => {
    cy.loginUser(invalidUser.username, invalidUser.password)
    cy.get('.oxd-alert-content').contains('Invalid credentials');
  });

  it('Show error for empty username', () => {
    cy.get(LogIn.constPassword).type('password');
    cy.get(LogIn.constLogInButton).click();
    cy.get('.oxd-input-group > .oxd-text').contains('Required');
  });

  it('Show error for empty password', () => {
    cy.get(LogIn.constUserName).type('username')
    cy.get(LogIn.constLogInButton).click()
    cy.get('.oxd-input-group > .oxd-text').contains('Required');
  });
});
