const {
    I
} = inject()
module.exports = {

    enterTextIntoTextBox(locator, valueToEnter) {
        I.waitForElement(locator);
        I.seeElement(locator);
        I.fillField(locator, valueToEnter)
    },

    checkCheckBoxOrRadioButton(locator) {
        if (I.dontSeeCheckboxIsChecked(locator)) {
            I.checkOption(locator)
        }
    },

    clickElement(locator) {
        I.waitForElement(locator);
        I.click(locator)
    },

    selectDataFromDropDown(locator, valueToSelect) {
        I.selectOption(locator, valueToSelect)
    },

    clickLink(locator) {
        I.clickLink(locator)
    },

    clickExpectedElementInListorTable(locator, childLocator, valueToSelect) {
        let loc = locate(locator).find(childLocator).withText(valueToSelect)
        this.clickElement(loc)

    },

    switchToNextTabInBrowser(number) {
        I.switchToNextTab(number)
    },

    switchToPreviousTabInBrowser() {
        I.switchToPreviousTab()
    },

    closeCurrentTabInBrowser() {
        I.closeCurrentTab()
    }

}