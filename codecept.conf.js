const {
  setHeadlessWhen
} = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://jsonplaceholder.typicode.com',
      defaultHeaders: {
        'Content-Type': 'application/json'
      },

    },
    Puppeteer: {
      url: 'https://www.cleartrip.com',
      show: true,
      waitForTimeout: 15000,
      waitForAction: 500,
      fullPageScreenshots: true,
      uniqueScreenshotNames: true,
      pressKeyDelay: 100,
      getPageTimeout: 60000,
      waitForNavigation: ["domcontentloaded", "networkidle0"],
      chrome: {
        args: ['--disable-notifications', '--start - maximized', '--window-size=1920,1080']
      },
    }
  },
  include: {
    I: './steps_file.js',
    searchFlight: './pages/searchflight.js',
    signIn: './pages/signIn.js',
    modal: './fragments/modal.js',
    commonfeaturesStep: './steps/commonfeatures.js'

  },
  bootstrap: null,
  mocha: {},
  name: 'cleartripautomation',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    autoDelay: {
      enabled: true
    },
    allure: {
      enabled: true
    },

    ResembleHelper: {
      require: "codeceptjs-resemblehelper",
      screenshotFolder: "./tests/output/",
      baseFolder: "./tests/screenshots/base/",
      diffFolder: "./tests/screenshots/diff/"
    }
  }
}