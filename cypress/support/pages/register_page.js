class RegisterPage {
  // Data Driven POM'larda locate'ler ve bu locate'leri kullandığımız metotlar page class'larında (pages->..._pages.js), page class'lardaki metotları kullandığımız test metotları ise ilgili test class'larında olur.
  // Page class'lar oluşturulurken 2 farklı yöntem var. 2. yöntem daha modern, sade ve kolay.
  /*
=================== 1. YÖNTEM ===================

  // Web Elementleri
  firstNameTextBox() {
    return cy.get("#first_name");
  }
  lastNameTextBox() {
    return cy.get("#last_name");
  }

  // Metotlar
  writeFirstName() {
    this.firstNameTextBox().type("Mehmet Ali");
  }
  writeLastName() {
    this.lastNameTextBox().type("Yılmaz");
  }

*/
  // ================ 2. YÖNTEM ===================
  // Web Elementler:
  constructor() {
    this.firstNameInput = "#first_name";
    this.lastNameInput = "#last_name";
    this.dateOfBirthInput = "#dob";
    this.addressInput = "#address";
    this.postCodeInput = "#postcode";
    this.cityInput = "#city";
    this.stateInput = "#state";
    this.countrySelect = "#country";
    this.phoneInput = "#phone";
    this.emailInput = "#email";
    this.passwordInput = "#password";
    this.registerButton = "button[type='submit']";
    this.emailAlreadyExistMessage = ".help-block";
    this.passwordMinLengthErrorMessage = ".alert-danger";
    this.firstNameError = "[data-test='first-name-error']";
    this.lastNameError = "[data-test='last-name-error']";
    this.dateOfBirthError = "[data-test='dob-error']";
    this.addressError = "[data-test='address-error']";
    this.postCodeError = "[data-test='postcode-error']";
    this.cityError = "[data-test='city-error']";
    this.stateError = "[data-test='state-error']";
    this.countryError = "[data-test='country-error']";
    this.phoneError = "[data-test='phone-error']";
    this.emailError = "[data-test='email-error']";
    this.passwordError = "[data-test='password-error']";
  }
  // Metotlar:
  writeFirstName(firstName) {
    cy.get(this.firstNameInput).type(firstName);
  }
  writeLastName(lastName) {
    cy.get(this.lastNameInput).type(lastName);
  }
  writeDateOfBirth(dateOfBirth) {
    cy.get(this.dateOfBirthInput).type(dateOfBirth);
  }
  writeAddress(address) {
    cy.get(this.addressInput).type(address);
  }
  writePostCode(postCode) {
    cy.get(this.postCodeInput).type(postCode);
  }
  writeCity(city) {
    cy.get(this.cityInput).type(city);
  }
  writeState(state) {
    cy.get(this.stateInput).type(state);
  }
  selectCountry(country) {
    cy.get(this.countrySelect).select(country);
  }
  writePhone(phone) {
    cy.get(this.phoneInput).type(phone);
  }
  writeEmail(email) {
    cy.get(this.emailInput).type(email);
  }
  writePassword(password) {
    cy.get(this.passwordInput).type(password);
  }
  clickRegister() {
    cy.get(this.registerButton).click();
  }
  verifyEmailAlreadyExistMessage(errorMessage) {
    cy.get(this.emailAlreadyExistMessage).should("have.text", errorMessage);
  }
  verifyPasswordMinLengthErrorMessage(errorMessage) {
    cy.get(this.passwordMinLengthErrorMessage).should("contain", errorMessage);
  }
  verifyFirstNameRequiredMessage(errorMessage) {
    cy.get(this.firstNameError).should("contain", errorMessage);
  }
  verifyLastNameRequiredMessage(errorMessage) {
    cy.get(this.lastNameError).should("contain", errorMessage);
  }
  verifyDateOfBirthRequiredMessage(errorMessage) {
    cy.get(this.dateOfBirthError).should("contain", errorMessage);
  }
  verifyAddressRequiredMessage(errorMessage) {
    cy.get(this.addressError).should("contain", errorMessage);
  }
  verifyPostCodeRequiredMessage(errorMessage) {
    cy.get(this.postCodeError).should("contain", errorMessage);
  }
  verifyCityRequiredMessage(errorMessage) {
    cy.get(this.cityError).should("contain", errorMessage);
  }
  verifyStateRequiredMessage(errorMessage) {
    cy.get(this.stateError).should("contain", errorMessage);
  }
  verifyCountryRequiredMessage(errorMessage) {
    cy.get(this.countryError).should("contain", errorMessage);
  }
  verifyPhoneRequiredMessage(errorMessage) {
    cy.get(this.phoneError).should("contain", errorMessage);
  }
  verifyEmailRequiredMessage(errorMessage) {
    cy.get(this.emailError).should("contain", errorMessage);
  }
  verifyPasswordRequiredMessage(errorMessage) {
    cy.get(this.passwordError).should("contain", errorMessage);
  }
}
export const register = new RegisterPage();
// Objeyi test class'ta da oluşturabilirdik.
// page sayfasında obje oluşturmayı tercih ettik.
// Hangi class'ın constructor'ını kullanıyorsak, onun ismini veriyoruz (new RegisterPage => class adı ile aynı)
