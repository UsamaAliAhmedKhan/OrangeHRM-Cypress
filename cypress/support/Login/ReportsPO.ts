
export default class Reports{

    getReports(){

        return '.oxd-topbar-body-nav > ul > :nth-child(4)'
    }

    getReportsAddButton(){

        return '.orangehrm-header-container > .oxd-button'
    }

    getReportNameInput(){
        
        return ':nth-child(2) > .oxd-input'
    }

    getSelectionCriteriaDropDown(){

        return ':nth-child(3) > .oxd-grid-4 > .orangehrm-report-criteria > .oxd-input-field-bottom-space > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'
    }

    getSelectDisplayFieldGroup(){
        return ':nth-child(5) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'
    }

    getSelectDisplayField(){

        return ':nth-child(5) > .oxd-grid-4 > .orangehrm-report-criteria > .oxd-input-field-bottom-space > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'
    }

    getDisplayFieldAddButton(){

        return ':nth-child(5) > .oxd-grid-4 > .orangehrm-report-criteria > :nth-child(2) > :nth-child(2) > .oxd-icon-button > .oxd-icon'
    }

    getReportsSaveButton(){

        return '.oxd-button--secondary'
    }









    clickOnReports(){

        cy.get(this.getReports()).click()

        cy.wait(3000)
    }

    clickOnAddReports(){

        cy.get(this.getReportsAddButton()).click({force: true})

    }

    addReports(){

        cy.get(this.getReportNameInput()).type('Test1')

        cy.get(this.getSelectionCriteriaDropDown()).click()

        cy.contains('Pay Grade').click()

        cy.get(this.getSelectDisplayFieldGroup()).click()

        cy.contains('Personal').click()

        cy.get(this.getSelectDisplayField()).click()

        cy.contains('Employee Id').click()

        cy.get(this.getDisplayFieldAddButton()).click()

        cy.get(this.getReportsSaveButton()).click({force: true})

        cy.wait(2000)


    }


}