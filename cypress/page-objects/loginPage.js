class LoginPage {

    SELECTOR_LOGIN_BTN = 'app-button[id="btn.continue"] div div';

    proceedToLogin() {
        cy.visit('https://george.csas.cz/?login_hint=7777777777')
        cy.get(this.SELECTOR_LOGIN_BTN).click()
    }
}

export default LoginPage;