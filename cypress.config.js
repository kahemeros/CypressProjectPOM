const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotOnRunFailure: true, // Test fail olduğu durumda ekran görüntüsü alır 
  //(npx cypress run komutu ile test çalıştırıldığında).Default değeri true
  trashAssetsBeforeRuns: true, // Test tekrar çalıştırıldığında önceki testten 
  //kalan resim ve videoları siler.Resim ve videoların birikmesini engeller.
  //Default değeri true.
  video: true, // Test çalıştırıldığında (fail olmasına gerek yok) video çeker 
  //(npx cypress run komutu ile test çalıştırıldığında).Default değeri false.
  retries: { 
    runMode: 0,// npx cypress run komutu ile test çalıştırıldığında test fail 
    //olursa burada belirtilen sayı miktarınca testi tekrar koşar.
    openMode: 0,// npx cypress open komutu ile test çalıştırıldığında test fail 
    //olursa burada belirtilen sayı miktarınca testi tekrar koşar.
    },
  e2e: {
    baseUrl: "https://practicesoftwaretesting.com/#/",
    env: {
      register: "auth/register"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
