export default class BasePage {
  constructor() {
    this.revenueCalulatorlink = "a[href='/revenue-calculator'] input";
    this.revenueCalculaterSlider = 'span[class*="MuiSlider-thumb"]';
    this.revenuecollectorInputBox = "div input[id*='r0']";
    this.checkBoxes = 'input[type="checkbox"]';
    this.totalReimbrsementHeader = ".css-rfiegf > .MuiPaper-root > .MuiToolbar-root > :nth-child(4)";
  }
 
  // Method to click on element with visible text
  clickOnContainsElement(locator) {
    cy.contains(locator).should('be.visible').click();
  }
 
  // Method to change the slider value with limits
  selectTheSliderValue(value) {
    const minValue = 0; // Minimum slider value
    const maxValue = 820; // Maximum slider value
 
    const sliderValue = Math.min(Math.max(value, minValue), maxValue); // Clamp the value
 
    // Dragging the slider thumb
    cy.get(this.revenueCalculaterSlider)
      .trigger('mousedown', { which: 1, force: true })
      .trigger('mousemove', { clientX: sliderValue, force: true })
      .trigger('mouseup', { force: true });
 
    // Fallback to directly set the hidden input value
    cy.get('input[type="range"]')
      .invoke('val', sliderValue)
      .trigger('input', { force: true })
      .trigger('change', { force: true });
  }
 
  // Set value in an input box
  typeOnElement(locator, text) {
    cy.get(locator).clear().type(text);
  }
 
  // Verify value of an input box
  VerifyInputBoxValue(locator, value) {
    cy.get(locator).should('have.value', value);
  }
 
  // Select checkbox using label text
  selectCheckBylabel(labelText) {
    cy.contains(labelText).parent().find(this.checkBoxes).scrollIntoView().check();
  }
 
  // Uncheck checkbox using label text
  UnCheckBylabel(labelText) {
    cy.contains(labelText).parent().find(this.checkBoxes).scrollIntoView().uncheck();
  }
 
  // Verify selected checkbox is checked
  verifyCheckboxIsChekedBylabel(labelText) {
    cy.contains(labelText).parent().find(this.checkBoxes).scrollIntoView().should('be.checked');
  }
 
  // Verify total recurring reimbursement
  verifyTotalRecurringReimbursement(val) {
    cy.get(this.totalReimbrsementHeader).find("p").should("have.text", val);
  }
}
 
export const basePage = new BasePage();