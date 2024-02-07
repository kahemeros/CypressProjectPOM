const { defineConfig } = require("cypress");

module.exports = defineConfig({
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
