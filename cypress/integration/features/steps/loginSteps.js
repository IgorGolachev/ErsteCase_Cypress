import { When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../page-objects/loginPage";

const login = new LoginPage();

When("User logs in", () => {
    login.proceedToLogin()
})