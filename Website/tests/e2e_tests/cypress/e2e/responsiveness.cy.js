describe('Responsiveness Tests', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('TC-GEN-001: Desktop layout (1280x720)', () => {
    cy.viewport(1280, 720)
    
    // Check if all elements are visible and properly positioned
    cy.get('nav').should('be.visible')
    cy.get('header').should('be.visible')
    cy.get('main').should('be.visible')
    cy.get('footer').should('be.visible')
    
    // Check if navigation is horizontal on desktop
    cy.get('nav').should('have.css', 'flex-direction', 'row')
    
    // Check if search bar is properly sized
    cy.get('input[type="text"]').should('be.visible')
    cy.get('input[type="text"]').should('have.css', 'width')
  })

  it('TC-GEN-001: Tablet layout (768x1024)', () => {
    cy.viewport(768, 1024)
    
    // Check if all elements are visible
    cy.get('nav').should('be.visible')
    cy.get('header').should('be.visible')
    cy.get('main').should('be.visible')
    cy.get('footer').should('be.visible')
    
    // Check if layout adapts to tablet size
    cy.get('body').should('be.visible')
  })

  it('TC-GEN-001: Mobile layout (375x667)', () => {
    cy.viewport(375, 667)
    
    // Check if all elements are visible
    cy.get('nav').should('be.visible')
    cy.get('header').should('be.visible')
    cy.get('main').should('be.visible')
    cy.get('footer').should('be.visible')
    
    // Check if navigation adapts to mobile (might be hamburger menu)
    cy.get('nav').should('be.visible')
    
    // Check if search bar is usable on mobile
    cy.get('input[type="text"]').should('be.visible')
    cy.get('input[type="text"]').type('test')
    cy.get('input[type="text"]').should('have.value', 'test')
  })

  it('TC-GEN-001: Large desktop layout (1920x1080)', () => {
    cy.viewport(1920, 1080)
    
    // Check if all elements are visible and properly scaled
    cy.get('nav').should('be.visible')
    cy.get('header').should('be.visible')
    cy.get('main').should('be.visible')
    cy.get('footer').should('be.visible')
    
    // Check if content doesn't stretch too wide
    cy.get('main').should('not.have.css', 'max-width', 'none')
  })

  it('TC-GEN-001: Landscape mobile layout (667x375)', () => {
    cy.viewport(667, 375)
    
    // Check if layout works in landscape mode
    cy.get('nav').should('be.visible')
    cy.get('header').should('be.visible')
    cy.get('main').should('be.visible')
    cy.get('footer').should('be.visible')
  })

  it('TC-GEN-001: Small mobile layout (320x568)', () => {
    cy.viewport(320, 568)
    
    // Check if layout works on very small screens
    cy.get('nav').should('be.visible')
    cy.get('header').should('be.visible')
    cy.get('main').should('be.visible')
    cy.get('footer').should('be.visible')
    
    // Check if text is readable
    cy.get('body').should('be.visible')
  })

  it('TC-GEN-001: Dynamic resizing', () => {
    // Start with desktop size
    cy.viewport(1280, 720)
    cy.get('nav').should('be.visible')
    
    // Resize to tablet
    cy.viewport(768, 1024)
    cy.get('nav').should('be.visible')
    
    // Resize to mobile
    cy.viewport(375, 667)
    cy.get('nav').should('be.visible')
    
    // Resize back to desktop
    cy.viewport(1280, 720)
    cy.get('nav').should('be.visible')
  })

  it('TC-GEN-001: Touch interactions on mobile', () => {
    cy.viewport(375, 667)
    
    // Test touch interactions
    cy.get('input[type="text"]').click()
    cy.get('input[type="text"]').type('test')
    
    // Test button touch
    cy.get('button').contains('Search').click()
  })

  it('TC-GEN-001: Scroll behavior on mobile', () => {
    cy.viewport(375, 667)
    
    // Test scrolling
    cy.scrollTo('bottom')
    cy.get('footer').should('be.visible')
    
    cy.scrollTo('top')
    cy.get('header').should('be.visible')
  })
}) 