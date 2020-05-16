const path = require('path')

module.exports = {
    // Inform webpack we are building or nodejs, not for browser
    target: 'node',

    mode: 'production',

    // Root of our application
    entry: './src/index.js',

    // Tell webpack where to put the output file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
    },

    // Tell webpack to run babel
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node-modules/,
                options: {
                    presets: [
                        '@babel/react',
                        ['@babel/env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }
};