const helperMethods = require('../helperutils/helpermethods')
const moment = require('moment')
let departureDate, arrivalDate
Feature('Book a round trip');

Scenario('Book Flight from Banaglore to Delhi', (I, searchFlight) => {
    I.amOnPage('/')
    departureDate = helperMethods.getModifiedDate(moment().add(1, 'days').format('DD'))
    arrivalDate = helperMethods.getModifiedDate(moment().add(4, 'days').format('DD'));
    searchFlight.clickRoundTripRadioButton();
    searchFlight.enterStations('Bangalore', 'Delhi')
    searchFlight.selectDepartAndArrivalDate(departureDate, arrivalDate)
    searchFlight.selectAdults('2')
    searchFlight.selectChildren('1')
    searchFlight.selectInfants('1')
    searchFlight.clickMoreOptions()
    searchFlight.selectClassOfTravel('First')
    searchFlight.selectPreferredAirline('Indig', 'IndiGo (6E)')
    searchFlight.clickSearchButton()
    I.say('flight search is successful ')

});