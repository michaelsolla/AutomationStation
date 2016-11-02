exports.config = {
    seleniumServerJar: '/usr/lib/node_modules/protractor/node_modules/webdriver-manager/selenium/selenium-server-standalone-2.53.1.jar',

    //Selenium server location
     seleniumAddress: 'http://localhost:4444/wd/hub',

    //spec file to use
    specs: [
        './Example/autostaion-spec.js'
    ],

    //global timeout of tests in ms
    allScriptsTimeout: 15000,
    multiCapabilities: [{    //  Used for multiple browsers per spec file

      "browserName": "chrome",
      directConnect: true

      // "chromeOptions": {
      // //  binary: "/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
      //  args: [],
      //  extensions: [],
  //  }


    //   Below is if you want to get Chrome to act like a mobile browser, very useful if you don't want to run on a mobile emulator.
    //    // "chromeOptions": {
    //    //    mobileEmulation:{"deviceName": "Google Nexus 6P"}
    //    //},

  },
  {
      "browserName": "firefox",
      directConnect: true,
      'marionette': true,
      baseUrl: 'https://www.google.com'


  }],
    maxSessions: 1,
    getPageTimeout: 10000,
    framework: 'jasmine2',
    onPrepare: function() {

        //This will force the Browser to open at Full Screen when the test are ran.
        //  Using a common set size since now all browsers behave the same on set.
        browser.driver.manage().window().maximize();
        // browser.driver.manage().window().setSize(1800, 950);


        var jasmineReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new jasmineReporter({displayStacktrace: true}));

        browser.getCapabilities().then(function (caps) {

          browser.browserName = caps.get("browserName");
          browser.version = caps.get("version")
          console.log(caps.get("browserName"), caps.get("version"));

        });

    },

    jasmineNodeOpts: {
        print: function() {}
    }
};
