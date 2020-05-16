module.exports = {
    // Tell webpack to run babel
    mode: 'production',
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
}