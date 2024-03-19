// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

basedir = function () { return require('path').join(__dirname, '../coverage') };

module.exports = function (config) {
    var configuration = {
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-jasmine-html-reporter',
            '@angular-devkit/build-angular/plugins/karma',
            'karma-mocha-reporter',
            'karma-coverage'
        ],
        browserNoActivityTimeout: 100000,
        browserDisconnectTimeout: 240000,
        captureTimeout: 240000,
        client: {
            captureConsole: true,
            clearContext: false, // leave Jasmine Spec Runner output visible in browser
            // leave here, undocumented flag that is hard to remember, makes karma 5 behave more like karma 4
            jasmine: {
                random: false
            }
        },
        // reporters: ['progress', 'kjhtml'],
        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        browsers: [
            'Chrome',
            // 'ChromeHeadless'
        ],
        singleRun: false,
        coverageReporter: {
            dir: basedir(),
            reporters: [
                {
                    type: 'html',
                    subdir: '.'
                }, {
                    type: 'lcovonly',
                    subdir: 'report-lcov'
                }, {
                    type: 'text-summary',
                    subdir: '.'
                }, {
                    type: 'cobertura',
                    subdir: '.',
                    file: 'cobertura.xml'
                }
            ]
        },
        hostname: '127.0.0.1',
        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: [
                    '--no-sandbox' , // required to run without privileges in docker
                    '--disable-gpu'
                ]
            }
        }
    };
    config.set(configuration);
};
