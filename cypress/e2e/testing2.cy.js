describe('Test kasirAja', () => {
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

    it('add category', () => {
        cy.get("#root > div > div > div.css-tnxwfz > div > a:nth-child(6) > div").click()
        cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a").click()
        cy.get("#nama").type("Test Nama")
        cy.get("#deskripsi").type("Test Deskripsi")
        cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button").click()


        // should be redirected to dashboard page /dashboard
        cy.url().should('include', '/categories')
    
        // should contains text "kasirAja"
        cy.contains("kasirAja")

        //cy.get('#root > div > div > div > div.css-1w7v3tn > div > div.chakra-alert.css-qwanz3').should('have.text','"email" is not allowed to be empty')
      })
})