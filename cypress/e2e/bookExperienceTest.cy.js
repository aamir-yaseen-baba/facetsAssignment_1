import { BookExperiencePage } from "./pages/bookExperiencePage"

describe('Tests related to book experiece',function(){
   beforeEach(()=>{
    cy.viewport('macbook-13')
    cy.visit('/book-your-xperience')
   })
    it('Test booking', function(){
        
       const bookExperiencePage =  new BookExperiencePage()
       bookExperiencePage.enterFirstName('aamir').should('have.value', 'aamir')
       bookExperiencePage.enterLastName('baba').should('have.value', 'baba')
       bookExperiencePage.enterCompanyName('Axelerant').should('have.value', 'Axelerant')
       bookExperiencePage.enterEmailAddress('aamir@yopmail.com').should('have.value', 'aamir@yopmail.com')
       bookExperiencePage.enterDate()
       bookExperiencePage.selectVisitType('rt').should('have.value', 'Virtual')
       bookExperiencePage.enterNumberofAttendents('2').should('have.value', '2')
       bookExperiencePage.selectDesiredExperience('pre').should('have.value','Pre-Press Software')
       bookExperiencePage.selectPartner('MacDermid Graphics Solutions').should('be.checked')
       bookExperiencePage.submitForm()
       bookExperiencePage.checkSucessMessage('Thank you for requesting your xperience at The FXC. We will review your request and follow-up with you via email within 72 hours.')
    })
})