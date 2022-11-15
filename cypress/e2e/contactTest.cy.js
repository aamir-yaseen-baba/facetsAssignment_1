import { ContactPage } from "./pages/contactPage"

describe('Test Contact us', () => {
  beforeEach(()=>{
    cy.viewport('macbook-13')
    cy.visit('/contact-us')
  })
  it('Test Contact us form', () => {
     const contactPage = new ContactPage()
    contactPage.enterFirstName('aamir')
    contactPage.enterLastName('baba')
    contactPage.enterCompanyName('Axelerant')
    contactPage.enterCityName('Srinagar')
    contactPage.selectCountry('Ind')
  })
})