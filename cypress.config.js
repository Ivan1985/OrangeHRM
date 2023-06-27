const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    validUser: {
      username: 'Admin',
      password: 'admin123'
    },
    invalidUser: {
      username: 'Mrk',
      password: 'mrk123'
    }
  },
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: false,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mocha",
      overwrite: false,
      html: false,
      json: true
    }
  }
});
