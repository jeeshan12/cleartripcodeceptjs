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
    Puppeteer: {
      url: 'https://www.cleartrip.com',
      show: true,
      waitForTimeout: 15000,
      waitForAction: 500,
      fullPageScreenshots: true,
      uniqueScreenshotNames: true,
      pressKeyDelay: 100,
      getPageTimeout: 20000,
      waitForNavigation: ["domcontentloaded", "networkidle0"],
      chrome: {
        args: ['--disable-notifications', '--start - maximized', '--window-size=1920,1080']
      },
    },
    PuppeteerHelper: {
      require: './puppeteerhelper_helper.js',
    },

    ApiDataFactory: {
      endpoint: "http://user.com/api",
      cleanup: true,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      factories: {
        post: {
          uri: "/posts",
          factory: "./factories/post",
        },
        comment: {
          factory: "./factories/comment",
          create: {
            post: "/comments/create"
          },
          delete: {
            post: "/comments/delete/{id}"
          },
          fetchId: (data) => data.result.id
        }
      }
    }
  },
  include: {
    I: './steps_file.js',
    searchFlight: './pages/searchflight.js'

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
    }
  }
}