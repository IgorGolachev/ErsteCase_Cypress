class LoginPage {

    SELECTOR_LOGIN_BTN = 'app-button[id="btn.continue"] div div';

    proceedToLogin() {
        return cy.get(this.SELECTOR_LOGIN_BTN).click()
    }
}

export default LoginPage;