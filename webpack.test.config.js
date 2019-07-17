/**
 * @file swan-api 单元测试的编译打包
 * @author lijia30(jianglian01@baidu.com)
 */
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development', // development
    entry: {
        index: __dirname + '/src/index.js'
    },
    output: {
        path: __dirname + '/dist/',
        filename: '[name].js',
        libraryTarget: 'umd'
    },

    devtool: 'cheap-inline-source-map',
    resolve: {
        alias: {
            san:
                process.env.NODE_ENV === 'production'
                    ? 'san/dist/san.js'
                    : 'san/dist/san.dev.js'
        },
        extensions: ['.js', '.san', '.json', '.css', '.node', '.less', '*']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: [
                            'transform-class-properties',
                            ['transform-object-rest-spread', {'useBuiltIns': true}],
                            'transform-decorators-legacy',
                            'transform-object-assign',
                            'istanbul'
                        ]
                    }
                },
                exclude: path.resolve(__dirname, 'node_modules')
            }
        ]
    }
};