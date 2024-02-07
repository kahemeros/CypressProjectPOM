class LoginPage{
    // Web Elementler
    constructor() {
        this.pageTitle = "h3"
    }

    // Metotlar
    verifyPageTitle(pageTitle) {
        cy.get(this.pageTitle).should("have.text", pageTitle)
    }    
}
export const login = new LoginPage()