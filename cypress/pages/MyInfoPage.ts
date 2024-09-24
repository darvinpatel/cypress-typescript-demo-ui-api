export class MyInfoPage {
  // Locators
  firstName =
    ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input";
  lastName = ":nth-child(3) > :nth-child(2) > .oxd-input";
  driverLicense =
    ":nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input";
    save_btn = ':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button'
    newName = '.orangehrm-edit-employee-name > .oxd-text'
  // Steps
  enterFirstName(firstName: string) {
    cy.get(this.firstName).clear();
    cy.get(this.firstName).type(firstName);
  }

  enterLastName(lastName: string) {
    cy.get(this.lastName).clear();
    cy.get(this.lastName).type(lastName);
  }

  enterDriverLicense(driverLicense: string) {
    cy.get(this.driverLicense).clear();
    cy.get(this.driverLicense).type(driverLicense);
  }

    clickSave() {
        cy.get(this.save_btn).click();
    }

    //Assertions
    verifyName(){
        cy.get(this.newName).should('have.text', 'Darvin Test Update Lorem Ipsum Update')
    }
}
