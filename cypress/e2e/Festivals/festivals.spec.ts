import * as festival from '../../support/page-objects/festivals.page'
import * as driver from '../../support/driver'
import * as assert from '../../support/assertions'
import { forEachChild } from 'typescript'

describe('Verify music festival Data is listed in a particular manner',() =>{

    beforeEach(()=> {

        
    })

    it('Verify Music Festival List is displaved', ()=> {  
        driver.visit('http://localhost:4200/festivals');
        assert.verifyElemHasLengthGreaterThanOrEqual(festival.bandNameList(),1)
        assert.verifyElemVisible(festival.bandNameList())
    })

    it.only('Verify the Pattern in Musical Festival Data', () => {
        driver.startIntercept("Get","/api/v1/festivals")
        driver.visit('http://localhost:4200/festivals');
        driver.endInterceptAndReturnResponse();   
        assert.verifyMusicalDataAvailableInExpectedFormat() 
    })



})