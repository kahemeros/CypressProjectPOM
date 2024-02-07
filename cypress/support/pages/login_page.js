class LoginPage{
    // Web Elementler
    constructor() {
        this.pageTitle = "h3"
    }

    // Metotlar
    verifyPageTitle() {
        cy.get(this.pageTitle).should("have.text", "Login")
    }    
}
export const login = new LoginPage()