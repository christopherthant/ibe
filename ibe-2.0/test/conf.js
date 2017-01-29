exports.config = {
  // location of the Selenium JAR file and chromedriver, use these if you installed protractor locally
  // seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.40.0.jar',
  // chromeDriver: '../node_modules/protractor/selenium/chromedriver',
 
  // location of your E2E test specs
  specs: [
    '../test/e2e/*.js'
  ],
  //root: '#teromac-container',
  // configure multiple browsers to run tests
  // note currently not working with firefox. issue with webdriver and firefox.
  multiCapabilities: [{
    'browserName': 'chrome'
  }],
  onPrepare: function() {
    // implicit and page load timeouts
    browser.manage().timeouts().pageLoadTimeout(40000);
    browser.manage().timeouts().implicitlyWait(25000);

    // for non-angular page
    browser.ignoreSynchronization = true;

    // sign in before all tests

    }
  ,
  // or configure a single browser
  /*
  capabilities: {
    'browserName': 'chrome'
  }
  */
 
  // url where your app is running, relative URLs are prepending with this URL
  baseUrl: 'http://localhost:9000/',
 
  // testing framework, jasmine is the default
  framework: 'jasmine'
};