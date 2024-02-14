const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    overwrite: true, // Değer true olursa, eski html dosyasını siler ve yenisini oluşturur. Değer false olursa yeni test raporu için yeni bir index001.html dosyası oluşturur.
    charts: true, // Testlerin pass ve fail durumlarıyla ilgili olarak rapora bir grafik ekler.
    reportPageTitle: "ToolShop Project Report", // Rappor başlığının düzenlenmesini sağlar.
    reportFilename: "[status]_[datetime]-[name]-report", // Rapor dosyasını isimlendirmek için kullanılır. Örnek: pass_February_14_2024-RegisterTest-report.html (longDate) - pass_2-14-2024_RegisterTest-report.html (shortDate)
    timestamp: "longDate", // Dosya ismindeki tarih alanının düzenlenmesinde kullanılır. shortDate veya longDate seçenekleri kullanılabilir.
    embeddedScreenshots: true, // Değer true olursa, fail durumunda alınan screenshot'lar ayrı bir klasörde değil, doğrudan html kodlarının içinde gömülü olarak eklenir.
    inlineAssets: true, // Değer true olursa, reports/html klasörü içinde yer alan assets klasörünü rapor.html dosyasının içine gömülü olarak ekler.
    saveAllAttempts: false, // Değer false olursa, (fail sonucu) tekrar koşulan testlerden (=>retries konusu) yalnızca son teste ait ekran göüntüsünü rapora ekler.
    ignoreVideos: false, // Değer true olursa,rapora video eklemez (videoları görmezden gelir) (fail olan testte dahi eklemez)
    videoOnFailOnly: true, // Değer true olursa, yalnızca fail olan testlere ilişkin videolar rapora eklenir. Bunun çalışabilmesi için ignoreVideos option'ı false olmalı. Aksi halde test fail olsa bile video eklemez.
  },
  screenshotOnRunFailure: true, // Test fail olduğu durumda ekran görüntüsü alır
  //(npx cypress run komutu ile test çalıştırıldığında).Default değeri true
  trashAssetsBeforeRuns: true, // Test tekrar çalıştırıldığında önceki testten
  //kalan resim ve videoları siler.Resim ve videoların birikmesini engeller.
  //Default değeri true.
  video: true, // Test çalıştırıldığında (fail olmasına gerek yok) video çeker
  //(npx cypress run komutu ile test çalıştırıldığında).Default değeri false.
  retries: {
    runMode: 0, // npx cypress run komutu ile test çalıştırıldığında test fail
    //olursa burada belirtilen sayı miktarınca testi tekrar koşar.
    openMode: 0, // npx cypress open komutu ile test çalıştırıldığında test fail
    //olursa burada belirtilen sayı miktarınca testi tekrar koşar.
  },
  e2e: {
    baseUrl: "https://practicesoftwaretesting.com/#/",
    env: {
      register: "auth/register",
      login: "auth/login",
      dashboard: "admin/dashboard"
    },
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
