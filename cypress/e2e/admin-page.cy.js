/// <reference types="Cypress" />

const validUser = Cypress.env('validUser')
const invalidUser = Cypress.env('invalidUser')

// Import POM method
import { LogIn } from '../support/pom-objects/Authorisation.cy'

describe('Admin page', () => {

    beforeEach('Go to application.', function () {
        cy.visit('/');
        cy.loginUser(validUser.username, validUser.password);
    });

    it('System user search', () => {
        cy.get(':nth-child(1) > .oxd-main-menu-item').click(); 
        cy.url().should('include', '/admin/viewSystemUsers');
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Admin');
    });
});