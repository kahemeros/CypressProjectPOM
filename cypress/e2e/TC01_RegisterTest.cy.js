import { login } from "../support/pages/login_page";
import { register } from "../support/pages/register_page";

describe("template spec", () => {
  it("passes", () => {
    // ilgili page class'ında oluşturduğumuz objenin ismini yazdığımız anda Cypress objenin yolunu gösteriyor. Enter ile çağırıyoruz. Import etme işini Cypress yapıyor. Obje isminin yanına . (nokta) koyduğumuzda o objeye bağlı metotlar (ve dahi locate'ler) da listeleniyor. Kullanacağımız metotu seçiyoruz.
    cy.visit("https://practicesoftwaretesting.com/#/auth/register");
    register.writeFirstName();
    register.writeLastName();
    register.writeDateOfBirth();
    register.writeAddress();
    register.writePostCode();
    register.writeCity();
    register.writeState();
    register.selectCountry();
    register.writePhone();
    register.writeEmail();
    register.writePassword();
    register.clickRegister();
    login.verifyPageTitle();
  });
});
