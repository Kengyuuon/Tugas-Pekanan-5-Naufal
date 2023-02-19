describe('Test Add Pelanggan kasirAja', () => {
    it('Login', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.url().should('include', '/login')
    })
  
    it('Successfully login using valid credential', () => {
      cy.visit('https://kasirdemo.belajarqa.com')
      cy.get('#email').type("naufalzm14@gmail.com")
      cy.get('#password').type("Toko123")
      cy.contains("login").click()
      cy.url().should('include', '/dashboard')
      cy.contains("kasirAja")
    })

    it('Successfully add pelanggan with valid data', () => {
        cy.get("#root > div > div > div.css-tnxwfz > div > a:nth-child(9) > div > div > div").click()
        cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a").click()
        cy.get("#nama").type("Test Nama")
        cy.get('[id="no.hp"]').type ("123456789")
        cy.get("#alamat").type("Test Alamat")
        cy.get("#keterangan").type("Test Keterangan")
        cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button").click()
        cy.url().should('include', '/customers')
        cy.contains("kasirAja")
      })

      it('Failed add pelanggan with empty name', () => {
        cy.get("#root > div > div > div.css-tnxwfz > div > a:nth-child(9) > div > div > div").click()
        cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > a").click()
        cy.get('[id="no.hp"]').type ("123456789")
        cy.get("#alamat").type("Test Alamat")
        cy.get("#keterangan").type("Test Keterangan")
        cy.get("#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > button").click()
        cy.url().should('include', '/create')
        cy.contains("kasirAja")
        cy.get('#root > div > div > div.css-1r35f0l > div.chakra-container.css-9rmdie > div.css-1t33j5j > div.chakra-alert.css-qwanz3').should('have.text','"name" is not allowed to be empty')
      })
})