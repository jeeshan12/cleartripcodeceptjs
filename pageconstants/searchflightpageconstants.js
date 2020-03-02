var searchFlightConstants = {

    chckRoundTrip: '#RoundTrip',
    txtFromStation: '#FromTag',
    txtToStation: '#ToTag',
    listFromStation: '#ui-id-1',
    listToStation: '#ui-id-2',
    calDepartOn: '#DepartDate',
    dtFrom: "//*[@class='monthBlock first']//table//tbody//td[not(contains(@class,'disabled'))]",
    calReturnOn: 'ReturnDate',
    dtTo: "//*[@class='monthBlock last']//table//tbody//td[not(contains(@class,'disabled'))]",
    listAdults: '#Adults',
    listChildren: '#Childrens',
    listInfants: "#Infants",
    lnkMoreOptions: '#MoreOptionsLink',
    listClass: '#Class',
    txtAirline: "#AirlineAutocomplete",
    listAirline: "#ui-id-3",
    btnSearch: '#SearchBtn',
    yourTrips: '#userAccountLink',
    signIn: '#SignIn',
    flightDeals: '//a[contains(@title,"Top flight deals")]'

}

module.exports.searchFlightConstants = searchFlightConstants;