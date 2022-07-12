describe('Testing Erste transactions search', () => {
    it('Simple Search', () => {
        cy.visit('https://george.csas.cz/?login_hint=7777777777');
        cy.get('app-button[id="btn.continue"] div div').click();
        cy.wait(20000);
        cy.get('button[data-cy="main.menu.v2.settingsLink-desktop"]').click();
        cy.wait(5000);
    })
}) 