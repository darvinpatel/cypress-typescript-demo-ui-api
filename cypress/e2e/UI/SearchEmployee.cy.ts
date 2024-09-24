import { LoginPage } from "../../pages/LoginPage";
import { DashboardPage } from "../../pages/DashboardPage";
import { DirectoryPage } from "../../pages/DirectoryPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const directoryPage = new DirectoryPage();

describe("Search for Employees", () => {
  beforeEach(() => {
    loginPage.visitHomePage();
    loginPage.loginClearInputBox();
    loginPage.enterUserName("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    dashboardPage.shouldLogin();
    dashboardPage.navigateToDirectory();
    cy.wait(2000);
  });

  it("Rebecca Harmoney from QA team", () => {
    directoryPage.searchEmployee("Rebecca");
    directoryPage.confirmEmployeeName("Rebecca  Harmony ");
    directoryPage.confirmJobTitle("QA Engineer");
  });

  it("Search for Russel Hamilton from Dev team", () => {
    directoryPage.searchEmployee("Russel");
    directoryPage.confirmEmployeeName("Russel  Hamilton ");
    directoryPage.confirmJobTitle("Software Engineer");
  });

  it("Search for Peter Mac Anderson from Accounts", () => {
    directoryPage.searchEmployee("Anderson");
    directoryPage.confirmEmployeeName("Peter Mac Anderson ");
    directoryPage.confirmJobTitle("Chief Financial Officer");
  });
});
