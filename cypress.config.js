const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    overwrite: true, // Değer true olursa, eski html dosyasını siler ve yenisini oluşturur. Değer false olursa yeni test raporu için yeni bir index001.html dosyası oluşturur.
    charts: true, // Testlerin pass ve fail durumlarıyla ilgili olarak rapora bir grafik ekler.
    reportPageTitle: 'ToolShop Project Report', // Rappor başlığının düzenlenmesini sağlar.
    // reportFilename: "[status]_[datetime]-[name]-report",
    // timestamp: "longDate",
    // embeddedScreenshots: true,
    // inlineAssets: true,
    // saveAllAttempts: false,
    // ignoreVideos: true,
    // videoOnFailOnly: false
  },
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
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
