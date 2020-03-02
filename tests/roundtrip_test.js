const helperMethods = require('../helperutils/helpermethods')
const moment = require('moment')
const readerUtil = require('../helperutils/jsonreaderutil')
let departureDate, arrivalDate
Feature('Book a round trip');
Scenario('Book Flight from Banaglore to Delhi', (I, searchFlight) => {
    let flightjsonData = readerUtil.readJsonFile('./testdata/flightData.json');
    flightjsonData = readerUtil.getJsonObject(flightjsonData)
    I.amOnPage('/')
    departureDate = helperMethods.getModifiedDate(moment().add(0, flightjsonData.flightData.day).format(flightjsonData.flightData.format))
    arrivalDate = helperMethods.getModifiedDate(moment().add(flightjsonData.flightData.toDay, flightjsonData.flightData.day).format(flightjsonData.flightData.format));
    searchFlight.clickRoundTripRadioButton();
    searchFlight.enterStations(flightjsonData.flightData.departureStation, flightjsonData.flightData.arrivalStation)
    searchFlight.selectDepartAndArrivalDate(departureDate, arrivalDate)
    searchFlight.selectAdults(flightjsonData.flightData.adults)
    searchFlight.selectChildren(flightjsonData.flightData.childtren)
    searchFlight.selectInfants(flightjsonData.flightData.infants)
    searchFlight.clickMoreOptions()
    searchFlight.selectClassOfTravel(flightjsonData.flightData.class)
    searchFlight.selectPreferredAirline(flightjsonData.flightData.airline, flightjsonData.flightData.fullAirlineName)
    searchFlight.clickSearchButton()
    I.say('flight search is successful ')


}).tag('@test');