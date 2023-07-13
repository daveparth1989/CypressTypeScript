/// <reference types="cypress"> />
let responseBodyJson:any

export function visit(url: string) : void {
    cy.visit(url);
}

export function get_element(identifier: string){
    return cy.get(identifier);
}

export function startIntercept(method:string , endpoint: string) : void{
    cy.intercept(method,endpoint).as("intercept");
       
}

export function endInterceptAndReturnResponse() : void {

    cy.wait("@intercept").then(({response})=>{
        cy.wrap(response.body).as('responseBody').then(()=>{
            cy.wrap(response.body).should('not.be.a','undefined');
            responseBodyJson = response.body;
            
        })
        
    })
}

export function getResponseBody() :any{
    return responseBodyJson;
}
