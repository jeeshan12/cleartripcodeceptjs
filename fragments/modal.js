const {
  I
} = inject();

const commonUtils = require('../helperutils/commonutils')
const signInPageConstants = require('../pageconstants/signinpageconstants')
module.exports = {

  parentFrame: signInPageConstants.iframe,

  enterDataInForm(userNameLocator, passwordLocator, userName, password, signinlocator) {
    within({
      frame: this.parentFrame
    }, () => {
      commonUtils.enterTextIntoTextBox(userNameLocator, userName)
      commonUtils.enterTextIntoTextBox(passwordLocator, password)
      commonUtils.clickElement(signinlocator)

    })
  },

  verifyErrorMessage(errorLocator, errorMessage) {
    within({
      frame: this.parentFrame
    }, () => {
      I.grabTextFrom(errorLocator).then(x => {
        expect(x).contains(errorMessage)
      }).catch(e => {
        console.log(`Error is ${e}`);

      })
    })
  }
}