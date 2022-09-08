const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "reporter": 'mochawesome',

  e2e: {
    // supportFile: 'cypress/support/e2e.js',
    // baseUrl: 'https://www.shopist.io/',
    specPattern: 'cypress/e2e/*.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
})

  

