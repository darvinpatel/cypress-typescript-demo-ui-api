import { LoginPage } from "../../pages/LoginPage"
import { DashboardPage } from "../../pages/DashboardPage";
import { MyInfoPage } from "../../pages/MyInfoPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const myinfoPage = new MyInfoPage();

describe('Update the current logged in user', () => {
    
    beforeEach(() => {
    loginPage.visitHomePage()
    loginPage.loginClearInputBox()
    loginPage.enterUserName('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    dashboardPage.shouldLogin()
    });

    it('Update Name and License number', () => {
    dashboardPage.navigateToMyInfo()
    cy.wait(2000) 
    myinfoPage.enterFirstName('Darvin Test Update')
    myinfoPage.enterLastName('Lorem Ipsum Update') 
    myinfoPage.enterDriverLicense('BOND777')
    myinfoPage.clickSave()
    cy.wait(5000)
    cy.reload()
    cy.wait(5000)
    myinfoPage.verifyName()
    })
})