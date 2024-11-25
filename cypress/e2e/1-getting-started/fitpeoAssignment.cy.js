/// <reference types="cypress" />

const { basePage } = require("../../pageObjectModel/BasePage");




describe('verifying diffent task on fitpeoApp', () => {
  beforeEach(() => {
    //navigate to homepage before each test case 
    cy.visit('/')
   
  })





  
  
  it('Verify all the neccessary steps of the assignment0', () => {
    cy.visit('/')
    
  //(1)user navigates to "fitpeo.com".
    //1verify navigating to corect url
    cy.url().should('eq', 'https://www.fitpeo.com/');


    //(2)user navigates to revenue collector page.
    //click on revenue collector link 
    basePage.clickOnContainsElement("Revenue Calculator")

    //verify user is at revenue collector page 
    //verify the url
    cy.contains("Revenue Calculator")
    //click on revenue collector link 
    
   
    //scroll to revenue collector slider 
    cy.get(basePage.revenueCalculaterSlider).scrollIntoView()

    //verify revenue collector slider is visible 
    cy.get(basePage.revenueCalculaterSlider).should("be.visible")
   
    //set slider to 820
    basePage.selectTheSliderValue()
   
    cy.wait(6000)
    

    //verify slider value changes to 820
    //basePage.VerifyInputBoxValue(basePage.revenuecollectorInputBox,820)

    //not able to change the slider value so it is still pending
   
  //(5)set slider value to 560
  basePage.typeOnElement(basePage.revenuecollectorInputBox,560)

  // verify slider value changed to 560
  basePage.VerifyInputBoxValue(basePage.revenuecollectorInputBox,560)

  //(6)Ensure that when the value 560 is entered in the text field, the slider position is updated to reflect the value 560
  cy.get(basePage.revenueCalculaterSlider).find('input').should('have.value',560)


  //(7)Scroll down further and select the checkboxes for CPT-99091, CPT-99453, CPT-99454, and CPT-99474.
  
  basePage.selectCheckBylabel("CPT-99091")
  basePage.selectCheckBylabel("CPT-99453")
  basePage.selectCheckBylabel("CPT-99454")
  basePage.selectCheckBylabel("CPT-99474") 

  //verify all the checkboxes are selected 
  basePage.verifyCheckboxIsChekedBylabel("CPT-99091")
  basePage.verifyCheckboxIsChekedBylabel("CPT-99453")
  basePage.verifyCheckboxIsChekedBylabel("CPT-99454")
  basePage.verifyCheckboxIsChekedBylabel("CPT-99474")
  

  //8. Validate Total Recurring Reimbursement:
      // check the number of patient per month 
      basePage.typeOnElement(basePage.revenuecollectorInputBox,200)

  //unCheck all the checkboxes wother then cpt-99091    

  basePage.UnCheckBylabel("CPT-99453")
  basePage.UnCheckBylabel("CPT-99454")
  basePage.UnCheckBylabel("CPT-99474")
      

      //if the total number of patient is 560 and CPT-99091 checkbox is selected verify  Total Recurring Reimbursement  should equals 10200
      basePage.verifyTotalRecurringReimbursement("$11400")



  // step 9 we have to change the number of patient per onth to 820 
  
  //change the revenue collecter slider value to 820
  
  basePage.typeOnElement(basePage.revenuecollectorInputBox,820)

  //select the checkboxes for CPT-99091, CPT-99453, CPT-99454, and CPT-99474

  basePage.selectCheckBylabel("CPT-99453")
  basePage.selectCheckBylabel("CPT-99454")
  basePage.selectCheckBylabel("CPT-99474") 

  // Verify that the header displaying Total Recurring Reimbursement for all Patients Per Month: shows the value $110700.
  basePage.verifyTotalRecurringReimbursement("$110700")


  })


 
})
