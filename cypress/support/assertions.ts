/// <reference types="cypress"> />

import * as driver from "./driver";
import * as festivalPage from "./page-objects/festivals.page";


export function verifyElemHasLengthGreaterThanOrEqual(element:Cypress.Chainable<JQuery<HTMLElement>>, length:number) {
    element.should('have.length.gte',length);
}

export function verifyElemVisible(element:Cypress.Chainable<JQuery<HTMLElement>>){
    return element.should('be.visible')
}

export function verifyMusicalDataAvailableInExpectedFormat() :void {
    
    festivalPage.bandNameList().each(($el) =>{
        let found = false;
        let text:any =   $el.text();
        let bandName = text.split("  ")[0].trim();
        let festivalName = text.split("  ")[1].trim();
        let responseBodyJson = driver.getResponseBody();
        responseBodyJson.forEach(element => {
            if (festivalName !=="" && element.hasOwnProperty('name')){
         
                if (element.name.includes(festivalName)){
                        
                        element.bands.forEach(band => {
                            if (bandName.includes(band.name)){
                            found = true;
                            cy.log(` ${band.name} Performing at by ${element.name} `);
                            
                            }  
                        })
                }
            } else {
                element.bands.forEach(band => {
                    if (bandName.includes(band.name)){
                    found = true;
                    cy.log(` ${band.name}is  not Performing because the festival name is${element.name} `);
                    
                    }  
                })
                
            }
        });
        expect(found).to.be.true;

    });

}