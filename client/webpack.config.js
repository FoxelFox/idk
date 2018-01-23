const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        app: './client/main.ts',
        vendor: './client/vendor.ts',
        polyfills: './client/polyfills.ts'

    },
    output: {
        path: path.resolve(__dirname, '../bin/client'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [{
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: "client/tsconfig.json" }
                }, 'angular2-template-loader']
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({template: './client/main.html',filename: 'index.html'})
    ]
};