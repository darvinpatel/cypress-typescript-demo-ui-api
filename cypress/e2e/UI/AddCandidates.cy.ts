import { LoginPage } from "../../pages/LoginPage";
import { DashboardPage } from "../../pages/DashboardPage";
import { RecruitementPage } from "../../pages/RecruitementPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const recruitementPage = new RecruitementPage();

describe("Add User", () => {
  beforeEach(() => {
    loginPage.visitHomePage();
    loginPage.loginClearInputBox();
    loginPage.enterUserName("Admin");
    loginPage.enterPassword("admin123");
    loginPage.clickLogin();
    dashboardPage.shouldLogin();
  });

  it("Add New Candidate.1 for Recruitement", () => {
    dashboardPage.navigateToRecruitement();
    //wait to load the page
    cy.wait(2000);
    recruitementPage.addCandidate();
    recruitementPage.enterFirstName("Darvin Test One");
    recruitementPage.enterLastName("Lorem Ipsum");
    recruitementPage.enterEmail("darwintestingapp@nice.com");
    recruitementPage.clickSave();
    //wait to load the page
    cy.wait(5000);
    recruitementPage.applicationStage();
    //recruitementPage.fullName()
  });

  it("Add New Candidate.2 for Recruitement", () => {
    dashboardPage.navigateToRecruitement();
    //wait to load the page
    cy.wait(2000);
    recruitementPage.addCandidate();
    recruitementPage.enterFirstName("Darvin Test Two");
    recruitementPage.enterLastName("Lorem Ipsum");
    recruitementPage.enterEmail("darwintestingapp@nice.com");
    recruitementPage.clickSave();
    //wait to load the page
    cy.wait(5000);
    recruitementPage.applicationStage();
    //recruitementPage.fullName()
  });

  it("Add New Candidate.3 for Recruitement", () => {
    dashboardPage.navigateToRecruitement();
    //wait to load the page
    cy.wait(2000);
    recruitementPage.addCandidate();
    recruitementPage.enterFirstName("Darvin Test Three");
    recruitementPage.enterLastName("Lorem Ipsum");
    recruitementPage.enterEmail("darwintestingapp@nice.com");
    recruitementPage.clickSave();
    //wait to load the page
    cy.wait(5000);
    recruitementPage.applicationStage();
    //recruitementPage.fullName()
  });

  it("Add New Candidate.4 for Recruitement", () => {
    dashboardPage.navigateToRecruitement();
    //wait to load the page
    cy.wait(2000);
    recruitementPage.addCandidate();
    recruitementPage.enterFirstName("Darvin Test Four");
    recruitementPage.enterLastName("Lorem Ipsum");
    recruitementPage.enterEmail("darwintestingapp@nice.com");
    recruitementPage.clickSave();
    //wait to load the page
    cy.wait(5000);
    recruitementPage.applicationStage();
    //recruitementPage.fullName()
  });

  it("Add New Candidate.5 for Recruitement", () => {
    dashboardPage.navigateToRecruitement();
    //wait to load the page
    cy.wait(2000);
    recruitementPage.addCandidate();
    recruitementPage.enterFirstName("Darvin Test Five");
    recruitementPage.enterLastName("Lorem Ipsum");
    recruitementPage.enterEmail("darwintestingapp@nice.com");
    recruitementPage.clickSave();
    //wait to load the page
    cy.wait(5000);
    recruitementPage.applicationStage();
    //recruitementPage.fullName()
  });
});
