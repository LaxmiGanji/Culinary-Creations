describe('Homepage Tests', () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit('/')
  })

  it('TC-FR-001: Homepage loads and displays all UI elements', () => {
    // Check if the page loads successfully
    cy.get('body').should('be.visible')
    
    // Check for main navigation elements
    cy.get('nav').should('exist')
    cy.get('header').should('exist')
    
    // Check for main content areas
    cy.get('main').should('exist')
    cy.get('footer').should('exist')
    
    // Check for search functionality
    cy.get('input[type="text"]').should('exist')
    cy.get('button').contains('Search').should('exist')
  })

  it('TC-FR-002: Search functionality works with valid keyword', () => {
    // Type in search box
    cy.get('input[type="text"]').type('Chicken')
    
    // Click search button
    cy.get('button').contains('Search').click()
    
    // Should show search results or navigate to results page
    cy.url().should('include', 'search')
  })

  it('TC-FR-003: Search functionality handles invalid keyword', () => {
    // Type invalid search term
    cy.get('input[type="text"]').type('xyzabc')
    
    // Click search button
    cy.get('button').contains('Search').click()
    
    // Should show no results message or empty state
    cy.get('body').should('contain', 'No results found')
  })

  it('TC-FR-004: Search with empty input', () => {
    // Leave search box empty
    cy.get('input[type="text"]').should('have.value', '')
    
    // Click search button
    cy.get('button').contains('Search').click()
    
    // Should either show all recipes or error message
    cy.get('body').should('be.visible')
  })

  it('TC-FR-005: Recipe details page loads', () => {
    // Click on a recipe if available
    cy.get('[data-testid="recipe-card"]').first().click()
    
    // Should navigate to recipe detail page
    cy.url().should('include', 'recipe')
    
    // Check for recipe details
    cy.get('h1').should('exist') // Recipe title
    cy.get('img').should('exist') // Recipe image
    cy.get('ul').should('exist') // Ingredients list
    cy.get('ol').should('exist') // Instructions list
  })

  it('TC-FR-006: Cuisine filter functionality', () => {
    // Look for cuisine filter dropdown or buttons
    cy.get('select').contains('Cuisine').should('exist')
    
    // Select a cuisine
    cy.get('select').select('Asian')
    
    // Should filter recipes
    cy.get('[data-testid="recipe-card"]').should('exist')
  })

  it('TC-FR-007: Navigation links work correctly', () => {
    // Test navigation to different pages
    cy.get('nav').contains('Home').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
    
    cy.get('nav').contains('About').click()
    cy.url().should('include', 'about')
    
    cy.get('nav').contains('Contact').click()
    cy.url().should('include', 'contact')
  })

  it('TC-FR-007: Logo navigation to home', () => {
    // Navigate to a different page first
    cy.get('nav').contains('About').click()
    cy.url().should('include', 'about')
    
    // Click on logo
    cy.get('nav').find('img[alt="Logo"]').click()
    
    // Should return to home page
    cy.url().should('eq', Cypress.config().baseUrl + '/')
  })
}) 