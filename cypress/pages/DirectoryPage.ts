export class DirectoryPage {
  // Locators
  employeeName = '.oxd-autocomplete-text-input > input'
    autocompleteOption = '.oxd-autocomplete-option'
    search_btn = '.oxd-button--secondary'
    confirmEmployee = '.orangehrm-directory-card-header'
    jobTitle = '.orangehrm-directory-card-subtitle'
  // Steps

  searchEmployee(employeeName: string) {
    cy.get(this.employeeName).type(employeeName)
    cy.get(this.employeeName).type('{enter}')
    cy.wait(2000)
    cy.get(this.autocompleteOption).click()
    cy.wait(2000)
    cy.get(this.search_btn).click()
  }

    //Assertions
    confirmEmployeeName(employeeName: string){
        cy.get(this.confirmEmployee).should('have.text', employeeName)
    }

    confirmJobTitle(jobTitle: string){
        cy.get(this.jobTitle).should('have.text', jobTitle)
    }
}
