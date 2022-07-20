import { And, Then } from "@badeball/cypress-cucumber-preprocessor";
import search_results from "../../fixtures/search_results.json";
import TransactionsListPage from "../../page-objects/transactionsListPage";

const transactions = new TransactionsListPage();

And('User searches for {string}', (companyName) => {
    transactions.searchTansaction(companyName)
})

Then('User should get {string}', (results) => {
    transactions.validateResults(search_results[results].items)
})

Then('User should get no search results', () => {
    cy.get('[data-cy="no-search-results"]').should('be.visible')
})

Then('User should get no transactions in search results', () => {
    cy.get('[data-cy="no-transactions"]').should('be.visible')
})