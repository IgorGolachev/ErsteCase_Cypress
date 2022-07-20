import { defineConfig } from "cypress";
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) { 
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://george.csas.cz/?login_hint=7777777777',
    specPattern: ["**/*.feature", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
    supportFile: false,
    setupNodeEvents,
  },
});