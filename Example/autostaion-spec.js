var Eyes = require('eyes.protractor').Eyes;
var eyes = new Eyes();
var ExampleSite = "https://www.google.com";
var EC = protractor.ExpectedConditions;
var DebugMode = false;
var OpenEyes = false;
//eyes.setApiKey("");

describe('Example Site check', function() {

     beforeAll(function(done) {
         // ignore angular sync since this is a test on a  non-angular site
        browser.ignoreSynchronization = true;

        switch(browser.browserName){

             case 'chrome':

              break;

             default:

              break;
         }

        done();

    });

    afterAll(function(done) {
         done();
    });

    beforeEach(function(done) {
        done();
     });

    afterEach(function(done) {
         done();
    });

      it('Test Page', function(done) {

        browser.get(ExampleSite);

        browser.wait(function(){
                    // browserSleep();
                    return element(by.id("hplogo")).isPresent();
                  }, 15000)
                    .then(function(isPresent) {

                done();
        });
      });

});
