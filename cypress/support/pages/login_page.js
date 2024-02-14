class LoginPage {
  // Web Elementler
  constructor() {
    this.pageTitle = "h3";
    this.emailInput = "#email";
    this.passwordInput = "#password";
    this.loginButton = "[value='Login']";
    this.loginErrorMessage = "[data-test='login-error']";
  }

  // Metotlar
  goToUrl() {
    cy.visit("/" + Cypress.env("login"));
  }
  verifyPageTitle(pageTitle) {
    cy.get(this.pageTitle).should("have.text", pageTitle);
  }
  writeEmail(email) {
    cy.get(this.emailInput).type(email);
  }
  writePassword(password) {
    cy.get(this.passwordInput).type(password);
  }
  clickLoginButton() {
    cy.get(this.loginButton).click();
    }
    verifyLoginErrorMessage(errorMessage) {
        cy.get(this.loginErrorMessage).should("have.text", errorMessage)
    }
}
export const login = new LoginPage();
