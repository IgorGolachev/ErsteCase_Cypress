import { When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../page-objects/loginPage";

const login = new LoginPage();

When("User logs in", () => {
    login.proceedToLogin()
})