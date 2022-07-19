class TransactionsListPage {

    SELECTOR_SEARCH_INPUT = '[data-cy="search-keyword"]'
    SELECTOR_SEARCH_BUTTON = '[data-cy="search-trigger-button"]'

    searchTansaction(companyName) {
        cy.get(this.SELECTOR_SEARCH_INPUT).clear()
        cy.get(this.SELECTOR_SEARCH_INPUT).type(companyName)
        cy.get(this.SELECTOR_SEARCH_BUTTON).click()
    }

    validateResults(searchResults) {
        searchResults.forEach((result) => {
            let selector = 'transaction-list-item-' + result
            cy.get(`[data-cy=${selector}]`).should('be.visible')
        })
    }
}

export default TransactionsListPage;