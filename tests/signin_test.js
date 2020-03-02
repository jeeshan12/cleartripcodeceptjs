let readerUtil = require('../helperutils/jsonreaderutil')
let loginData = new DataTable(['login', 'password']);
const jsonData = readerUtil.getJsonObject(readerUtil.readJsonFile('./testdata/loginData.json'))
jsonData.login.forEach(data => {
    loginData.add([data.userName, data.password]);
});
const expect = require('chai').expect
Data(loginData).Scenario('Test Login', (I, current, searchFlight, signIn) => {
    I.amOnPage('/')
    console.log(`Name is ${current.login} and password is ${current.password}`);
    searchFlight.clickYourTripsLink()
    searchFlight.clickSignInButton()
    signIn.enterUserCredentials()
    signIn.verifyError()
}).tag('@datadriventest')