class RegisterPage {
  // Data Driven POM'larda locate'ler ve bu locate'leri kullandığımız metotlar page class'larında (pages->..._pages.js), buradaki metotları kullandığımız test class'lar ise ilgili test class'larında olur.
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
  // Web Elementleri
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
    this.emailAlreadyExistMessage = ".help-block"
  }
  // Metotlar
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
    cy.get(this.emailAlreadyExistMessage).should("be.visible").and("have.text", errorMessage)
  }
}
export const register = new RegisterPage();
// Objeyi test class'ta da oluşturabilirdik.
// page sayfasında obje oluşturmayı tercih ettik.
// Hangi class'ın constructor'ını kullanıyorsak, onun ismini veriyoruz (new RegisterPage => class adı ile aynı)
