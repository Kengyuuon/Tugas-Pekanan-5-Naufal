describe('Test Login kasirAja', () => {
    it('should open login page first', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.url().should('include', '/login')
    })
  
    it('success login using valid credential', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.get('#email').type("naufalzm14@gmail.com")
      cy.get('#password').type("Toko123")
      cy.contains("login").click()
  
      // should be redirected to dashboard page /dashboard
      cy.url().should('include', '/dashboard')
  
      // should contains text "kasirAja"
      cy.contains("kasirAja")
    })

    it('Failed login', () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#password').type("Toko123")
        cy.contains("login").click()
    
        // should be redirected to dashboard page /dashboard
        cy.url().should('include', '/login')
    
        // should contains text "kasirAja"
        cy.contains("kasirAja")

        cy.get('#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3').should('have.text','"email" is not allowed to be empty')
      })
})