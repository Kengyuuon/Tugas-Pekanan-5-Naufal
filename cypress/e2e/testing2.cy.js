describe('Test Add Category kasirAja', () => {
    it('Open login page', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.url().should('include', '/login')
    })
  
    it('success login using valid credential', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.get('#email').type("naufalzm14@gmail.com")
      cy.get('#password').type("Toko123")
      cy.contains("login").click()
  
      cy.url().should('include', '/dashboard')
      cy.contains("kasirAja")
    })

    it('Successfully add categories with valid data', () => {
        cy.get("#root > div > div > div.css-tnxwfz > div > a:nth-child(6) > div").click()
        cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a").click()
        cy.get("#nama").type("Test Nama")
        cy.get("#deskripsi").type("Test Deskripsi")
        cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button").click()

        cy.url().should('include', '/categories')
        cy.contains("kasirAja")
      })

      it('Failed add categories with empty name', () => {
        cy.get("#root > div > div > div.css-tnxwfz > div > a:nth-child(6) > div").click()
        cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a").click()
        cy.get("#deskripsi").type("Test Deskripsi")
        cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button").click()

        cy.url().should('include', '/create')
        cy.contains("kasirAja")
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text','"name" is not allowed to be empty')
})
})