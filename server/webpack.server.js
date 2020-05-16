const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.common.js')
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Inform webpack we are building or nodejs, not for browser
    target: 'node',

    // Root of our application
    entry: './src/index.js',

    // Tell webpack where to put the output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config)