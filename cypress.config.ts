import { defineConfig } from "cypress";

module.exports = defineConfig({
  viewportWidth: 800,
  viewportHeight: 850,
  video: false,
  screenshotsFolder: "cypress/results/screenshots",
  retries: {
    runMode: 2,
    openMode: 0,
  },
  
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    reportFilename: 'EA.html',
    overwrite: true,
    html: true,
    json: false,
  },
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.{js,ts}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});
