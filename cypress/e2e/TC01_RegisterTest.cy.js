import { login } from "../support/pages/login_page";
import { register } from "../support/pages/register_page";

describe("template spec", () => { 
  let registerData;
  let loginData;
  before(() => {
    cy.fixture("register_data").then((data) => {
      registerData = data;
    })
    cy.fixture("login_data").then((data) => {
      loginData = data;
    })
  });
  beforeEach(() => {
    cy.visit("/" + Cypress.env("register"));
  });
  it("passes", () => {
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
    register.writeEmail(registerData.email);
    register.writePassword(registerData.password);
    register.clickRegister();
    login.verifyPageTitle(loginData.pageTitle);
  });
});
