/// <reference types="cypress" />

import "cypress-localstorage-commands"
import { afterEach } from "mocha"

import LoginPage from '../../support/Login/loginPO'

const loginPage = new LoginPage() 

describe('login to OrangeHrm', () => {

    
    
before( function(){

    loginPage.visitOrangeHRM()

    loginPage.loginToOrangeHRM()

})

afterEach(() => {
    //Code to Handle the Sesssions in cypress.
    //Keep the Session alive when you jump to another test
    let str: string[] = [];
    cy.getCookies().then((cook) => {
        
        for (let l = 0; l < cook.length; l++) {
            if (cook.length > 0 && l == 0) {
                str[l] = cook[l].name;
                Cypress.Cookies.preserveOnce(str[l]);
            } else if (cook.length > 1 && l > 1) {
                str[l] = cook[l].name;
                Cypress.Cookies.preserveOnce(str[l]);
            }
        }
    })})




it('login to OrangeHRM', () => {
    

    cy.title().should('eq', 'OrangeHRM')

    loginPage.clickOnSlider()
    
    
})

it('click on employeeList', () => {


    loginPage.clickOnEmployeeList()
})

it('Add Employee', () => {

    loginPage.clickOnAddButton()

    loginPage.addEmployeeDetails()

    cy.wait(2000)

})

it('Search Employee', () => {

    
    // loginPage.clickOnAddButton()

    // loginPage.addEmployeeDetails()

    loginPage.clickOnEmployeeList()

    loginPage.searchEmployee()

    loginPage.verifyRecord()


})

it('logout from OrangeHRM', () => {

    loginPage.clickOnLogOut()
})

})