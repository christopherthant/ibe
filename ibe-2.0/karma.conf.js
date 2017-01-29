// Karma configuration
// Generated on Mon Nov 21 2016 11:44:45 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
        'src/bower_components/jquery/dist/jquery.js',
        'src/bower_components/angular/angular.js',
        'src/bower_components/angular-deferred-bootstrap/angular-deferred-bootstrap.js',
        'src/bower_components/angular-sanitize/angular-sanitize.js',
        'src/bower_components/angular-slick/dist/slick.js',
        'src/bower_components/angular-translate/angular-translate.js',
        'src/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
        'src/bower_components/angular-ui-router/release/angular-ui-router.js',
        'src/bower_components/ngmap/build/scripts/ng-map.js',
        'src/bower_components/angular-local-storage/dist/angular-local-storage.js',
        'src/bower_components/angular-modal-service/dst/angular-modal-service.js',
        'src/bower_components/angular-mocks/angular-mocks.js',
        'src/app/configEnv.js',
        'src/app/appModule.js',
        'src/app/common/providers/plan.js',
        'src/app/components/plan/controller.js',
        'test/unit/views/plan.mocha.js',
        'src/app/components/codes/controller.js',
        'test/unit/views/codes.mocha.js',

    ],


    // list of files to exclude
    exclude: [
    ],


    // // preprocess matching files before serving them to the browser
    // // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // preprocessors: {
    //   'src/*.js': ['coverage']
    // },

    // coverageReporter: {
    //   // type : 'html',
    //   type : 'text-summary',
    //   dir : 'coverage/'
    // },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'
    // , 'coverage'
    ],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
    'PhantomJS'
    // , 
    //,'Chrome'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
