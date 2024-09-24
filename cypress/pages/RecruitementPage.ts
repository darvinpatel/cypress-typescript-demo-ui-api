export class RecruitementPage{

    // Locators
        //candidate
        vacancy_btn = ':nth-child(2) > .oxd-topbar-body-nav-tab-item';
        addVacancy_btn = '.orangehrm-header-container > .oxd-button'
        addCandidate_btn = '.orangehrm-header-container > .oxd-button'
        firstName_txt = '.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'
        lastName_txt = ':nth-child(3) > :nth-child(2) > .oxd-input'
        email_txt = ':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input'
        save_btn = '.oxd-button--secondary'
        fullName_txt = ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-text'
        applicationStage_txt = '.oxd-form > .oxd-text--h6'

    // Steps
    
        addCandidate(){
            cy.get(this.addCandidate_btn).click();
        }
        
        enterFirstName(firstName: string){
            cy.get(this.firstName_txt).type(firstName);
        }

        enterLastName(lastName: string){
            cy.get(this.lastName_txt).type(lastName);
        }

        enterEmail(email: string){
            cy.get(this.email_txt).type(email);
        }

        clickSave(){
            cy.get(this.save_btn).click();
        }

        applicationStage(){
            cy.get(this.applicationStage_txt).should('have.text', 'Application Stage');
        }

        fullName(){
            cy.get(this.fullName_txt).should('have.text', 'Darvin Test Lorem Ipsum');
        }

}