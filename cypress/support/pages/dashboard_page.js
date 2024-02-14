class dashboardPage {
  // Web Elementler
    constructor() {
      
  }

    // Method'lar
    verifyUrl(url) {
        cy.url().should("contain", url)
    }
}
export const dashboard = new dashboardPage();