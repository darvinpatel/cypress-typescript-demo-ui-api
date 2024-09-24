import { LoginPage } from "../../pages/LoginPage";
import { DashboardPage } from "../../pages/DashboardPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe("Login Test Set", () => {
  beforeEach(() => {
    loginPage.visitHomePage()
  });

  it("Should Login", () => {
    loginPage.enterUserName("Admin")
    loginPage.enterPassword("admin123")
    loginPage.clickLogin()
    dashboardPage.shouldLogin()
  });

  it("Should Not Login - Null User", () => {
    loginPage.enterPassword("admin123")
    loginPage.clickLogin()
    loginPage.shouldNotLogin()
  });

  it("Should Not Login - Null Password", () => {
    loginPage.enterUserName("Admin")
    loginPage.clickLogin()
    loginPage.shouldNotLogin()
  });

  it("Should Not Login - Null User and Password", () => {
    loginPage.clickLogin()
    loginPage.shouldNotLogin()
  });

  it("Should Not Login - Invalid Username", () => {
    loginPage.enterUserName("Invalid123User!")
    loginPage.enterPassword("admin123")
    loginPage.clickLogin()
    loginPage.invalidCredentials()
  });

  it("Should Not Login - Invalid Password", () => {
    loginPage.enterUserName("Admin")
    loginPage.enterPassword("Invalid123Pass!")
    loginPage.clickLogin()
    loginPage.invalidCredentials()
  });

  it("Should Not Login - Invalid Username and Password", () => {
    loginPage.enterUserName("InvalidUser123!")
    loginPage.enterPassword("Invalid123Pass!")
    loginPage.clickLogin()
    loginPage.invalidCredentials()
  });

  it("Should Logout", () => {
    loginPage.enterUserName("Admin")
    loginPage.enterPassword("admin123")
    loginPage.clickLogin()
    dashboardPage.shouldLogin()
    //wait for 2 seconds    
    cy.wait(2000)
    dashboardPage.logout()
    loginPage.logoutAssertion()

  });
});
