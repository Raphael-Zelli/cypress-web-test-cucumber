const { defineConfig } = require("cypress");
const cypressOnFix = require('cypress-on-fix');
const createBundler = require ("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require ("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require ("@badeball/cypress-cucumber-preprocessor/esbuild");


module.exports = defineConfig({
  projectId: '32mjfd',
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: "cypress/reports",  //Os relatórios serão salvos aqui
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportTitle: 'Relatório Testes Automatizados',
    reportPageTitle: 'Relatório Testes Automatizados',
  },
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    specPattern: "**/*.feature",
    async setupNodeEvents(on, config) {

      // "cypress-on-fix" is required because "cypress-mochawesome-reporter" and "cypress-cucumber-preprocessor" use the same hooks
      on = cypressOnFix(on);

      require('cypress-mochawesome-reporter/plugin')(on);

      await addCucumberPreprocessorPlugin(on, config);
      
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;

    },
  },
});
