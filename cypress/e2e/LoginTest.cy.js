const { dashboard } = require("../support/pages/dashboard_page");
const { login } = require("../support/pages/login_page");

describe("Login Test Suite", () => {
  let loginData;
  before(() => {
    cy.fixture("login_data").then((data) => {
      loginData = data;
    });
  });
  beforeEach(() => {
    login.goToUrl(); // RegisterTest class'ında cy.visit() method'unu kullandık
    // buradaysa login_page class'ında goToUrl() method'u oluşturup onu çağırdık.
  });
  it("TC01 - Login Test with valid data", () => {
    // Pozitif Test
    login.writeEmail(loginData.validEmail);
    login.writePassword(loginData.validPassword);
    login.clickLoginButton();
    dashboard.verifyUrl(Cypress.env("dashboard"));
  });
  it("TC02 - Login Test with invalid email", () => {
    // Negatif Test
    login.writeEmail(loginData.invalidEmail);
    login.writePassword(loginData.validPassword);
    login.clickLoginButton();
    login.verifyLoginErrorMessage(loginData.loginErrorMessage);
  });
  it("TC03 - Login Test with invalid password", () => {
    // Negatif Test
    login.writeEmail(loginData.validEmail);
    login.writePassword(loginData.invalidPassword);
    login.clickLoginButton();
    login.verifyLoginErrorMessage(loginData.loginErrorMessage);
  });
  it("TC04 - Login Test with invalid data", () => {
    // Negatif Test
    login.writeEmail(loginData.invalidEmail);
    login.writePassword(loginData.invalidPassword);
    login.clickLoginButton();
    login.verifyLoginErrorMessage(loginData.loginErrorMessage);
  });
});
