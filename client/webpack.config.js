const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './client/main.ts',
    output: {
        path: path.resolve(__dirname, '../bin/client'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader', options: {
                    configFileName: "client/tsconfig.json"
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './client/main.html',filename: 'index.html'})
    ]
};