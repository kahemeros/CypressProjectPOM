import { faker } from "@faker-js/faker";
import { login } from "../support/pages/login_page";
import { register } from "../support/pages/register_page";

describe("Register Tests", () => {
  let registerData;
  let loginData;
  let fakeMail;
  before(() => {
    // Genel olarak testlerimizde kullanacağımız data'ları before() blok içinde testler başlamadan oluşturup testlerimizde kullanmak daha doğru bir yaklaşım.
    cy.fixture("register_data").then((data) => {
      registerData = data;
    });
    cy.fixture("login_data").then((data) => {
      loginData = data;
    });
    fakeMail = faker.internet.email();
  });
  beforeEach(() => {
    cy.visit("/" + Cypress.env("register"));
  });
  it("TC01 - Register test with valid data", () => {
    // ilgili page class'ında oluşturduğumuz objenin ismini yazdığımız anda Cypress objenin yolunu gösteriyor. Enter ile çağırıyoruz. Import etme işini Cypress yapıyor. Obje isminin yanına . (nokta) koyduğumuzda o objeye bağlı metotlar (ve dahi locate'ler) da listeleniyor. Kullanacağımız metotu seçiyoruz.

    register.writeFirstName(registerData.firstName);
    register.writeLastName(registerData.lastName);
    register.writeDateOfBirth(registerData.dateOfBirth);
    register.writeAddress(registerData.address);
    register.writePostCode(registerData.postCode);
    register.writeCity(registerData.city);
    register.writeState(registerData.state);
    register.selectCountry(registerData.country);
    register.writePhone(registerData.phone);
    register.writeEmail(fakeMail);
    register.writePassword(registerData.password);
    register.clickRegister();
    login.verifyPageTitle(loginData.pageTitle);
  });

  it("TC02 - Register test with passwords less than 5 characters", () => {
    register.writeFirstName(registerData.firstName);
    register.writeLastName(registerData.lastName);
    register.writeDateOfBirth(registerData.dateOfBirth);
    register.writeAddress(registerData.address);
    register.writePostCode(registerData.postCode);
    register.writeCity(registerData.city);
    register.writeState(registerData.state);
    register.selectCountry(registerData.country);
    register.writePhone(registerData.phone);
    register.writeEmail(faker.internet.email());
    register.writePassword(registerData.fiveDigitPassword);
    register.clickRegister();
    register.verifyPasswordMinLengthErrorMessage(registerData.passwordMinLengthErrorMessage);
  });
  it("TC03 - Register test with the same email data", () => {
    register.writeFirstName(registerData.firstName);
    register.writeLastName(registerData.lastName);
    register.writeDateOfBirth(registerData.dateOfBirth);
    register.writeAddress(registerData.address);
    register.writePostCode(registerData.postCode);
    register.writeCity(registerData.city);
    register.writeState(registerData.state);
    register.selectCountry(registerData.country);
    register.writePhone(registerData.phone);
    register.writeEmail(fakeMail);
    register.writePassword(registerData.password);
    register.clickRegister();
    register.verifyEmailAlreadyExistMessage(registerData.emailAlreadyExistMessage);
  });

  it("TC04 - Validating required field messages", () => {
    register.clickRegister();
    register.verifyFirstNameRequiredMessage(registerData.firstNameRequiredMessage);
    register.verifyLastNameRequiredMessage(registerData.lastNameRequiredMessage);
    register.verifyDateOfBirthRequiredMessage(registerData.dateOfBirthRequiredMessage);
    register.verifyAddressRequiredMessage(registerData.addressRequiredMessage);
    register.verifyPostCodeRequiredMessage(registerData.postCodeRequiredMessage);
    register.verifyCityRequiredMessage(registerData.cityRequiredMessage);
    register.verifyStateRequiredMessage(registerData.stateRequiredMessage);
    register.verifyCountryRequiredMessage(registerData.countryRequiredMessage);
    register.verifyPhoneRequiredMessage(registerData.phoneRequiredMessage);
    register.verifyEmailRequiredMessage(registerData.emailRequiredMessage);
    register.verifyPasswordRequiredMessage(registerData.passwordRequiredMessage);
  });
});
