
import { ContactPage } from "./pages/contactPage"

describe('Test Contact us', () => {
  beforeEach(()=>{
    cy.viewport('macbook-13')
    cy.visit('/contact-us')
  })
  it('Test Contact us form', () => {
     const contactPage = new ContactPage()
    contactPage.enterFirstName('aamir').should('have.value','aamir')
    contactPage.enterLastName('baba').should('have.value','baba')
    contactPage.enterCompanyName('Axelerant').should('have.value','Axelerant')
    contactPage.enterIndustryName('IT Services').should('have.value','IT Services')
    contactPage.enterCityName('Srinagar').should('have.value', 'Srinagar')
    contactPage.selectCountry('Ind').should('contain', 'India')
    contactPage.enterEmailAddress('aamir@yopmail.com').should('have.value', 'aamir@yopmail.com')
    contactPage.enterPhoneNumber('1234567890').should('have.value', '1234567890')
    contactPage.enterMessage('Test message').should('have.value', 'Test message')
    contactPage.submitForm()
    cy.switchToiframe('iframe[title="reCAPTCHA"]').find('#recaptcha-anchor').click()
    contactPage.getErrorMessage().should('contain', 'The answer you entered for the CAPTCHA was not correct.')
  })
})