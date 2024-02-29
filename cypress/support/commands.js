// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
Cypress.Commands.add ('login', (email, password) => { 
        cy.session([email, password], () => {
        cy.visit('https://hr.kapitalbank.az/');
        cy.viewport('macbook-11');
        cy.get('a[class="header-signin we waves-effect waves-classic waves-button"]').contains('Daxil ol').click();
        cy.get('#EmailAddress').type(email);
        cy.get('#Password').type(password);
        cy.get('#login_submit').click();    
        })
 })
 Cypress.Commands.add('goToProfile',() =>{
 cy.visit('https://hr.kapitalbank.az/profile');
 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })