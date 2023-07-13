/// <reference types="cypress"> />
let responseBodyJson:any

export function visit(url: string) {
    cy.visit(url);
}

export function get_element(identifier: string){
    return cy.get(identifier);
}

export function startIntercept(method:string , endpoint: string){
    cy.intercept(method,endpoint).as("intercept");
       
}

export function endInterceptAndReturnResponse() {

    cy.wait("@intercept").then(({response})=>{
        cy.wrap(response.body).as('responseBody').then(()=>{
            cy.wrap(response.body).should('not.be.a','undefined');
            responseBodyJson = response.body;
            
        })
        
    })
}

export function getResponseBody() {
    return responseBodyJson;
}
