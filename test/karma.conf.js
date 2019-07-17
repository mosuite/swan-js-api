const webpackConfig = require('../webpack.test.config');
const config = function (config) {
    config.set({
        browsers: ['NoSandboxChromeHeadless'],
        captureTimeout: 60000,
        customLaunchers: {
            NoSandboxChromeHeadless: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        },
        frameworks: ['mocha'],
        port: 9876,
        autoWatch: true,
        files: [ './index.js', './indexIos.js','./indexAndroid.js', './_naSwanExist.js',],
        preprocessors: {
            './index.js': ['webpack'],
            './indexIos.js': ['webpack'],
            './indexAndroid.js': ['webpack'],
            './_naSwanExist.js': ['webpack'],
        },
        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only'
        },

        reporters: ['coverage', 'html'],
        htmlReporter: {
            outputDir: './test', // where to put the reports
            reportName: 'report' // report summary filename; browser info by default
        },
        // 配置代码覆盖率插件
        coverageReporter: {
            dir: './coverage',
            reporters: [
                {
                    type: 'lcov',
                    subdir: '.'
                },
                {
                    type: 'text-summary'
                }
            ]
        },
        mochaReporter: {
            colors: {
                success: 'cyan'
            },
            symbols: {
                success: '-'
            }
        },
        singleRun: true,
        concurrency: Infinity

    });
    
};
module.exports = config;
