const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    devServer: {
      historyApiFallback: true,
    },
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
        }]
    }
}