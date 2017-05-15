module.exports = {
    entry: './src/js/app.js',
    output: {
        filename: 'app.js'
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            },
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
}