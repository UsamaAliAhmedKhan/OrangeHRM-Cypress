/// <reference types="cypress" />

import LoginPage from '../../support/Login/loginPO'

import Reports from '../../support/Login/ReportsPO'

const loginPage = new LoginPage() 

const reports = new Reports()

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

    // it('login to OrangeHRM', () => {
    

    //     cy.title().should('eq', 'OrangeHRM')
    
    //     loginPage.clickOnSlider()
        
        
    // })

    it('Adds Report', () => {

        cy.title().should('eq', 'OrangeHRM')

        reports.clickOnReports()

        reports.clickOnAddReports()

        reports.addReports()


    })

    it('logout from OrangeHRM', () => {

        loginPage.clickOnLogOut()
    })

})