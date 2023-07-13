/// <reference types="cypress"> />



export function bandNameList() : Cypress.Chainable<JQuery<HTMLElement>> {
    return cy.get('ol > li');
    }


