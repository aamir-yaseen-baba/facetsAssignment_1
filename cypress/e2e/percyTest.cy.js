
describe('Integration test with visual testing', function () {
  beforeEach(() => {
    cy.viewport('macbook-13')
    cy.visit('/')
  })

  it('Testing video without pressing play/pause button', function () {
    cy.get('video').as('Video')
      .should('have.prop', 'paused', true)
      .should('have.prop', 'ended', false)

    cy.get('@Video').then(($video) => {
      $video[0].play().then((_) => {
        console.log('video is playing')
        $video[0].pause()
        console.log('video paused')
      })
    })
    cy.get('@Video').should('have.prop', 'paused', true)
    // Take a snapshot for visual diffing
    cy.percySnapshot('HomePage screen shot without pressing play/pause');

  })

  it('Testing video after pressing Play/Pause', function () {
    // Load the page or perform any other interactions with the app.

    cy.get('video').as('Video')
      .should('have.prop', 'paused', true)
      .should('have.prop', 'ended', false)

    cy.contains('Play').click()
    cy.get('@Video').should('have.prop', 'paused', false)
    cy.wait(5000)
    cy.contains('Pause').click()
    cy.get('@Video').should('have.prop', 'paused', true)


    // Take a snapshot for visual diffing
    cy.percySnapshot('HomePage screen shot after pressing play/pause');
  });


 it('Just takes screenshot of main page', function(){

  cy.screenshot()
 })
});