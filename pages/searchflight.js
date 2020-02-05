const {
    I
} = inject()
const searchFlightPageConstants = require('../pageconstants/searchflightpageconstants')

const commonUtils = require('../helperutils/commonutils')

module.exports = {


    trip: {
        roundTrip: searchFlightPageConstants.searchFlightConstants.chckRoundTrip
    },

    station: {
        from: searchFlightPageConstants.searchFlightConstants.txtFromStation,
        fromList: searchFlightPageConstants.searchFlightConstants.listFromStation,
        to: searchFlightPageConstants.searchFlightConstants.txtToStation,
        toList: searchFlightPageConstants.searchFlightConstants.listToStation
    },

    date: {
        departCalendar: searchFlightPageConstants.searchFlightConstants.calDepartOn,
        returnCalendar: searchFlightPageConstants.searchFlightConstants.calReturnOn,
        departDate: searchFlightPageConstants.searchFlightConstants.dtFrom,
        returnDate: searchFlightPageConstants.searchFlightConstants.dtTo
    },

    passengers: {
        adults: searchFlightPageConstants.searchFlightConstants.listAdults,
        children: searchFlightPageConstants.searchFlightConstants.listChildren,
        infants: searchFlightPageConstants.searchFlightConstants.listInfants

    },

    moreoptions: {
        more: searchFlightPageConstants.searchFlightConstants.lnkMoreOptions,
        classofservice: searchFlightPageConstants.searchFlightConstants.listClass,
        preferredairline: searchFlightPageConstants.searchFlightConstants.txtAirline,
        preferredairlineList: searchFlightPageConstants.searchFlightConstants.listAirline
    },

    search: searchFlightPageConstants.searchFlightConstants.btnSearch,

    clickRoundTripRadioButton() {
        commonUtils.checkCheckBoxOrRadioButton(this.trip.roundTrip)

    },

    enterStations(fromStation, toStation) {
        commonUtils.enterTextIntoTextBox(this.station.from, fromStation)
        commonUtils.clickExpectedElementInListorTable(this.station.fromList, 'a', 'Bangalore, IN - Kempegowda International Airport (BLR)')
        commonUtils.enterTextIntoTextBox(this.station.to, toStation)
        commonUtils.clickExpectedElementInListorTable(this.station.toList, 'a', 'New Delhi, IN - Indira Gandhi Airport (DEL)')
    },

    selectDepartAndArrivalDate(departureDate, arrivalDate) {
        commonUtils.clickExpectedElementInListorTable(this.date.departDate, 'a', departureDate)
        commonUtils.clickExpectedElementInListorTable(this.date.departDate, 'a', arrivalDate)
    },

    selectAdults(adultsCount) {
        commonUtils.selectDataFromDropDown(this.passengers.adults, adultsCount)
    },

    selectChildren(childrenCount) {
        commonUtils.selectDataFromDropDown(this.passengers.children, childrenCount)
    },

    selectInfants(infantsCount) {
        commonUtils.selectDataFromDropDown(this.passengers.infants, infantsCount)
    },

    clickMoreOptions() {
        commonUtils.clickElement(this.moreoptions.more)
    },

    selectClassOfTravel(classOfTravel) {
        commonUtils.selectDataFromDropDown(this.moreoptions.classofservice, classOfTravel)
    },

    selectPreferredAirline(airline, airlineFullName) {
        commonUtils.enterTextIntoTextBox(this.moreoptions.preferredairline, airline)
        commonUtils.clickExpectedElementInListorTable(this.moreoptions.preferredairlineList, 'a', airlineFullName)
    },

    clickSearchButton() {
        commonUtils.clickElement(this.search)
    }


}