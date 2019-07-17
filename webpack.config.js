/**
 * @file webpack config for swan-api
 * @author wuxiaopan(wuxiaopan@baidu.com)
 */

const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        src: __dirname + '/src/index.js'
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'index.js',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['env'],
                    plugins: [
                        'transform-class-properties', ['transform-object-rest-spread', {useBuiltIns: true}],
                        'transform-decorators-legacy',
                        'transform-object-assign'
                    ]
                }
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            // minimize: true,
            debug: false
        })
    ]
};
