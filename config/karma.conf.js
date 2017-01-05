var webpackConfig = require('./webpack.test');

module.exports = function (config) {
    var _config = {
        basePath: '',

        frameworks: ['jasmine'],

        plugins: [
            require('karma-jasmine'),
            require('karma-webpack'),
            require('karma-chrome-launcher'),
            require('karma-remap-istanbul'),
            require('karma-sourcemap-loader'),
        ],

        customLaunchers: {
            // chrome setup for travis CI
            Chrome_Travis_CI: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        },
        files: [
            { pattern: './config/karma-test-shim.js', watched: false }
        ],

        preprocessors: {
            './config/karma-test-shim.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },
        remapIstanbulReporter: {
            reports: {
                html: 'coverage',
                lcovonly: './coverage/coverage.lcov'
            }
        },
        reporters: ['progress', 'karma-remap-istanbul'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true
    };

    config.set(_config);
};
