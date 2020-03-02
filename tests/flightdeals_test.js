const commonUtils = require('../helperutils/commonutils')
Feature('Flight Deals Scenario : Switching tab')

Scenario('Test will check the flightDeals', async (I, searchFlight) => {
    I.amOnPage('/')
    searchFlight.clickFlightDeals()
    commonUtils.switchToNextTabInBrowser(1)
    I.wait(10)
    commonUtils.enterTextIntoTextBox('#edit-name', 'Jeeshan')
    commonUtils.closeCurrentTabInBrowser()

}).tag('@newwindow');