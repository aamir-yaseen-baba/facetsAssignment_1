

describe('this includes cookie tests', () => {
    beforeEach(() => {
        cy.viewport('macbook-13')
        cy.visit('/')
        Cypress.Cookies.preserveOnce('auth_key')
    })
    it('Set and Get cookie value', function () {
        cy.on('uncaught:exception', (e, runnable) => {
            console.log('error is ', e.message)
            console.log('runnable is ', runnable)
              return false
          })
        cy.get('#onetrust-accept-btn-handler').click()
        Cypress.Cookies.debug(true)
        cy.setCookie('auth_key', '123key')
        cy.getCookie('auth_key')
            .should('have.property', 'value', '123key')
    })

    it('get preserved cookie value', function () {
        cy.on('uncaught:exception', (e, runnable) => {
            console.log('error is ', e.message)
            console.log('runnable is ', runnable)
              return false
          })
        cy
        .getCookie('auth_key')
         .should('have.property', 'value', '123key')
        cy.contains('Contact').click()
        cy
        .getCookie('_ga')
        .should('have.property', 'value')
    })
})