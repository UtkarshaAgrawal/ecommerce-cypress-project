const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "rfzn6m",
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
  },
});
