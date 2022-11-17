
export class BookExperiencePage{
    enterFirstName(firstName) {
        return cy
        .switchToiframe('iframe[title="Booking form"]')
        .find('#cog-input-auto-0').type(firstName)
    }
    enterLastName(lastName) {
        return cy
        .switchToiframe('iframe[title="Booking form"]')
        .find('#cog-input-auto-1').type(lastName)
    }

    enterCompanyName(companyName) {
        return cy
        .switchToiframe('iframe[title="Booking form"]')
        .find('#cog-1').type(companyName)
    }
    enterEmailAddress(emailAddress){
        return cy
        .switchToiframe('iframe[title="Booking form"]')
        .find('#cog-2').type(emailAddress)
    }
    enterDate(){
        cy
        .switchToiframe('iframe[title="Booking form"]').within(()=>{
            cy.get('#cog-3').click()
            cy.get('button[aria-label="Next Month"]').click()
            cy.contains('25').click()
        })
       // .find('table[class="el-date-table"] tr:nth-child(5) > td >div > span')
        .click()
    }

    selectVisitType(visitType){
       return cy
        .switchToiframe('iframe[title="Booking form"]').find('#cog-4').click().type(`${visitType}{enter}`)
    }
    enterNumberofAttendents(number){
        return cy
        .switchToiframe('iframe[title="Booking form"]').find('#cog-5').type(number)
    }
    selectDesiredExperience(desiredExperience){
        return cy
        .switchToiframe('iframe[title="Booking form"]').find('#cog-6').click().type(`${desiredExperience}{downarrow}{enter}`)
    }

    selectPartner(partner){
        return cy
        .switchToiframe('iframe[title="Booking form"]').find('input[value="MacDermid Graphics Solutions"]').check({force:true})
    }

    submitForm(){
        return cy
        .switchToiframe('iframe[title="Booking form"]').find('button[type="submit"]').click()
    }
    checkSucessMessage(message){
        cy
        .switchToiframe('iframe[title="Booking form"]').within(()=>{
            cy.contains(message,{timeout: 10000} )
        })
    }
}