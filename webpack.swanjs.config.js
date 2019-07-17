/**
 * @file webpack config for swanjs of webview
 * @author lijia(lijia30@baidu.com)
 */

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'development', // development
    entry: {
        swan: __dirname + '/src/swanjs/index.js'
    },
    output: {
        path: __dirname + '/output/',
        filename: '[name].js',
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
            minimize: true,
            debug: false
        }),
        new UglifyJSPlugin()

    ]
};
