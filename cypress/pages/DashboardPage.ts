export class DashboardPage{
    
    // Locators
    
        dashboard_txt = ':nth-child(8) > .oxd-main-menu-item';
        SideMenu_Recruitement = ':nth-child(5) > .oxd-main-menu-item > .oxd-text';
        profile_btn = '.oxd-userdropdown-name';
        logout_btn = ':nth-child(4) > .oxd-userdropdown-link';
        sideMenu_MyInfo = ':nth-child(6) > .oxd-main-menu-item';
        sideMenu_Directory = ':nth-child(9) > .oxd-main-menu-item > .oxd-text';
    
    // Assertions
    
        shouldLogin(){
            cy.get(this.dashboard_txt).should('have.text', 'Dashboard')
        }
        navigateToRecruitement(){
            cy.get(this.SideMenu_Recruitement).click()
        }

        navigateToMyInfo(){
            cy.get(this.sideMenu_MyInfo).click()
        }

        navigateToDirectory(){
            cy.get(this.sideMenu_Directory).click()
        }
    
        logout(){
            cy.get(this.profile_btn).click()
            cy.get(this.logout_btn).click()
        }
    }