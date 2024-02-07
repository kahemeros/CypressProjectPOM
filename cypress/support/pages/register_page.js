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
  }
  // Metotlar
  writeFirstName() {
    cy.get(this.firstNameInput).type("Mehmet Ali");
  }
  writeLastName() {
    cy.get(this.lastNameInput).type("Yılmaz");
  }
  writeDateOfBirth() {
    cy.get(this.dateOfBirthInput).type("1980-12-12"); 
  }
  writeAddress() {
    cy.get(this.addressInput).type("Bağlık Mah. Tavşan Sk. No:21"); 
  }
  writePostCode() {
    cy.get(this.postCodeInput).type("50500"); 
  }
  writeCity() {
    cy.get(this.cityInput).type("Zonguldak"); 
  }
  writeState() {
    cy.get(this.stateInput).type("Ereğli"); 
  }
  selectCountry() {
    cy.get(this.countrySelect).select("Turkey"); 
  }
  writePhone() {
    cy.get(this.phoneInput).type("05558887799"); 
  }
  writeEmail() {
    cy.get(this.emailInput).type("faker4@faker.com"); 
  }
  writePassword() {
    cy.get(this.passwordInput).type("12345678"); 
  }
  clickRegister() {
    cy.get(this.registerButton).click();
  }

}
export const register = new RegisterPage();
// Objeyi test class'ta da oluşturabilirdik.
// page sayfasında obje oluşturmayı tercih ettik.
// Hangi class'ın constructor'ını kullanıyorsak, onun ismini veriyoruz (new RegisterPage => class adı ile aynı)
