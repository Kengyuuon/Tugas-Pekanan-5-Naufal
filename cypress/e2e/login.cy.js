describe('Test Login kasirAja', () => {
    it('Login', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.url().should('include', '/login')
    })
  
    it('Successfully logged in using valid data', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.get('#email').type("naufalzm14@gmail.com")
      cy.get('#password').type("Toko123")
      cy.contains("login").click()
      cy.url().should('include', '/dashboard')
      cy.contains("kasirAja")
    })

    it('Failed login with empty email', () => {
        cy.visit('https://kasirdemo.belajarqa.com')
        cy.get('#password').type("Toko123")
        cy.contains("login").click()
        cy.url().should('include', '/login')
        cy.contains("kasirAja")
        cy.get('#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3').should('have.text','"email" is not allowed to be empty')
      })
})