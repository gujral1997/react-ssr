const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.common.js')
const config = {
    mode: 'production',

    // Root of our application
    entry: './src/client/client.js',

    // Tell webpack where to put the output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
};

module.exports = merge(baseConfig, config)