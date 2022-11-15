export class ContactPage {

    enterFirstName(firstName){
       return cy.get('[data-drupal-selector="edit-first-name"]').type(firstName)
    }
    enterLastName(lastName){
       return cy.get('[data-drupal-selector="edit-last-name"]').type(lastName)
    }

    enterCompanyName(companyName){
        return cy.get('[data-drupal-selector="edit-company"]').type(companyName)
    }

    enterIndustryName(industryName){
        return cy.get('#edit-industry').type(industryName)
    }

    enterCityName(cityName){
        return cy.get('#edit-address-city').type(cityName)
    }

    selectCountry(countryName){
        cy.get('#select2-edit-address-country-container').click()
        cy.get('.select2-search__field').type(countryName)
        cy.get('.select2-results__option').each(((el, index, list)=>{
            if(el.text() === 'India'){
                cy.wrap(el).click()
            }

        }))
    


    }
}