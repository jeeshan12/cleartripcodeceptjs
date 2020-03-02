const {
    I,
    modal
} = inject()

const signInPageConstants = require('../pageconstants/signinpageconstants')

module.exports = {

    usercredentials: {
        userNameTextBox: signInPageConstants.userName,
        passwordTextBox: signInPageConstants.password
    },

    signinButton: signInPageConstants.signIn,

    error: signInPageConstants.error,


    enterUserCredentials() {
        modal.enterDataInForm(this.usercredentials.userNameTextBox, this.usercredentials.passwordTextBox, 'aaa', 'bbbb', this.signinButton)

    },

    verifyError() {
        modal.verifyErrorMessage(this.error, 'There were errors in your submission')
    }

}