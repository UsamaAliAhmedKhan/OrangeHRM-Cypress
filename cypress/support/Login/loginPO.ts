import { OrangeHRM, EmployeeDetails , searchEmployee } from '../../fixtures/testData/OrangeHRM.json'


export default class LoginPage {

    getUsername(){
        return 'input[placeholder="Username"]'
    }

    getPassword(){

        return 'input[placeholder="Password"]'
    }

    getLoginButton(){

        return 'button[type="submit"]'
    }

    getProfileButton(){

        return '.oxd-userdropdown-name'

    }

    getLogoutListItem(){

        return ':nth-child(4) > .oxd-userdropdown-link'

    }

    getSlider(){
        
        return '.oxd-icon.bi-chevron-left'
    }
    
    getEmployeeList(){

        return ':nth-child(2) > .oxd-topbar-body-nav-tab-item'
    }

    getAddButton(){

        return '.oxd-button > .oxd-icon'
    }

    getEmployeeFirstName(){

        return 'input[placeholder="First Name"]'
    }

    getEmployeeLastName(){

        return 'input[placeholder="Last Name"]'
    }

    getSaveButton(){

        return 'button[type="submit"]'
    }

    getEmployeeSearchName(){

        return ':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input'
    }

    getSearchButton(){

        return '.oxd-form-actions > .oxd-button--secondary'
    }

    getRecordContainer(){

        return '.orangehrm-container'
    }








    visitOrangeHRM(){

        cy.visit('https://opensource-demo.orangehrmlive.com')
    }

    addUserName(){
        
        var username = OrangeHRM[0].username

        cy.get(this.getUsername()).type(username)

       
    }

    addPassword(){
 
        var password = OrangeHRM[0].password

        cy.get(this.getPassword()).type(password)

    }

    loginToOrangeHRM(){

        this.addUserName()
        this.addPassword()

        cy.get(this.getLoginButton()).click()

    }

    clickOnLogOut(){

        cy.get(this.getProfileButton()).click()
        cy.get(this.getLogoutListItem()).click()
    }

    clickOnSlider(){

        cy.get(this.getSlider()).click()
    }

    clickOnEmployeeList(){

        cy.get(this.getEmployeeList()).click()
        cy.wait(3000)
    }

    clickOnAddButton(){

        cy.get(this.getAddButton()).click({force: true})
        cy.wait(3000)
    }


    addEmployeeFirstName(){
        
        

        var FirstName = EmployeeDetails[0].firstName
        cy.get(this.getEmployeeFirstName()).type(FirstName)
    }

    addEmployeeLastName(){

        var LastName = EmployeeDetails[0].lastName
        cy.get(this.getEmployeeLastName()).type(LastName)
    }

    clickOnSaveButton(){

        cy.get(this.getSaveButton()).click()
        cy.wait(3000)
    }

    addEmployeeDetails(){

        this.addEmployeeFirstName()
        this.addEmployeeLastName()
        this.clickOnSaveButton()

        

    }

    addEmployeeSearchName(){

        var FirstName = searchEmployee[0].firstName
        var LastName = searchEmployee[0].lastName

        cy.get(this.getEmployeeSearchName()).type(FirstName + " " + LastName)
    }

    clickOnSearchButton(){

        cy.get(this.getSearchButton()).click({force: true})
    }

    searchEmployee(){

        this.addEmployeeSearchName()

        cy.wait(3000)

        this.clickOnSearchButton()

        cy.wait(3000)
    }

    verifyRecord(){

        var FirstName = searchEmployee[0].firstName
        cy.get(this.getRecordContainer()).contains(FirstName)
    }

}