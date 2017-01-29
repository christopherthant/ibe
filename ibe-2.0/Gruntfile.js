'use strict';

module.exports = function (grunt) {

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Configurable paths
    var config = {
        src: 'src',
        dist: 'dist',
        envDefault: 'local'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: config,

        watch: {
            scss: {
                files: ['<%= config.src %>/styles/scss/**/*.scss'],
                tasks: ['<%= grunt.task.current.args[1] ? "sass:single:" + grunt.task.current.args[1] : "sass:all" %>']
            }
        },

        // Compile SASS files
        sass: {
            all: {
                options: {
                    sourcemap: 'none',
                    noCache: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= config.src %>/styles/scss/sites',
                        src: ['**/*.scss'],
                        dest: '<%= config.src %>/styles',
                        ext: '.css'
                    }
                ]
            },
            single: {
                options: {
                    sourcemap: 'none',
                    noCache: true
                },
                files: [
                    {
                        src: '<%= config.src %>/styles/scss/sites/<%= grunt.task.current.args[0] %>.scss',
                        dest: '<%= config.src %>/styles/<%= grunt.task.current.args[0] %>.css'
                    }
                ]
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= config.dist %>',
                        '.tmp'
                    ]
                }]
            },
            tmp: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp'
                    ]
                }]
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= config.src %>/app/{,*/}*.js'
            ]
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // Concat and minify files
        // Creates configurations in memory so additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%= config.dist %>'
            },
            html: '<%= config.src %>/index.html'
        },

        // Compile HTML templates into AngularJS $templateCache
        ngtemplates: {
            dist: {
                cwd: '<%= config.src %>/',
                src: 'app/**/*.html',
                dest: '.tmp/templates.js',
                options: {
                    usemin: 'ibe.js',
                    bootstrap: function(module, script) {
                        return 'function _pegsPutTemplateCache($templateCache) {' + script + '}';
                    }
                }
            }
        },

        copy: {
            dist: {
                files: [
                    {
                        nonull: true,
                        expand: true,
                        dot: true,
                        cwd: '<%= config.src %>',
                        dest: '<%= config.dist %>',
                        src: [
                            '.htaccess',
                            'index.html',
                            'favicon.ico',
                            'mock-api/**/*',
                            'assets/**/*',
                            'styles/**/*.css',
                            '!bower_components/**/*'
                        ]
                    }
                ]
            },
            envDefault: {
                files: [
                    {
                        nonull: true,
                        src: '<%= config.src %>/app/env/<%= config.envDefault %>.js',
                        dest: '<%= config.src %>/app/env.js',
                    }
                ]
            },
            envQa: {
                files: [
                    {
                        nonull: true,
                        src: '<%= config.src %>/app/env/qa.js',
                        dest: '<%= config.src %>/app/env.js',
                    }
                ]
            },
            envUat: {
                files: [
                    {
                        nonull: true,
                        src: '<%= config.src %>/app/env/uat.js',
                        dest: '<%= config.src %>/app/env.js',
                    }
                ]
            },
            envProduction: {
                files: [
                    {
                        nonull: true,
                        src: '<%= config.src %>/app/env/prod.js',
                        dest: '<%= config.src %>/app/env.js',
                    }
                ]
            }
        },

        // Performs rewrites based on the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: [
                    '<%= config.dist %>',
                    '<%= config.dist %>/assets/images',
                    '<%= config.dist %>/assets/styles'
                ]
            },
            html: ['<%= config.dist %>/{,*/}*.html'],
            css: ['<%= config.dist %>/styles/{,*/}*.css']
        },

        // Protractor setup, stop tests if a test fails
        protractor: {
          options: {
            // Location of your protractor config file
            configFile: 'test/conf.js',
         
            // Do you want the output to use fun colors?
            noColor: true,
         
            // Set to true if you would like to use the Protractor command line debugging tool
            // debug: true,
         
            // Additional arguments that are passed to the webdriver command
            args: { }
          },
          e2e: {
            options: {
              // Stops Grunt process if a test fails
              keepAlive: false
            }
          },
          continuous: {
            options: {
              keepAlive: true
            }
          }
        },

        // Configure selenium driver
        connect: {
          options: {
            port: 9000,
            hostname: 'localhost'
          },
          test: {
            options: {
              // set the location of the application files
              base: ['app']
            }
          }
        },

        karma: {
          unit: {
            options: {
                basePath: '.',
                // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
                frameworks: ['mocha', 'sinon-chai'],
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
                    'src/app/pages/plan/controller.js',
                    'test/unit/views/plan.mocha.js'
                    //'src/app/pages/codes/controller.js',
                    //'test/unit/views/codes.mocha.js',
                ],
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
                port: 9876,
                colors: true,
                // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
                logLevel: config.LOG_INFO,
                // enable / disable watching file and executing tests whenever any file changes
                autoWatch: false,
                // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
                browsers: [
                'PhantomJS'
                // , 
                //,'Chrome'
                ],
                singleRun: true
            }
          }
        }
    });

    var defaultTasks = [
        'clean:dist',
        'jshint',
        'sass:all',
        'useminPrepare',
        'ngtemplates',
        'concat',
        'uglify',
        'copy:dist',
        'usemin',
        'clean:tmp',
        'copy:envDefault'
    ];

    grunt.registerTask('default', defaultTasks);
    grunt.registerTask('local', defaultTasks);
    grunt.registerTask('e2e-test', ['connect:test', 'protractor:e2e']);
    grunt.registerTask('qa', ['copy:envQa'].concat(defaultTasks));
    grunt.registerTask('uat', ['copy:envUat'].concat(defaultTasks));
    grunt.registerTask('prod', ['copy:envProduction'].concat(defaultTasks));
};