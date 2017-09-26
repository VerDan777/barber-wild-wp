const path = require('path');
module.exports = {
    entry: "./src/js/orders.js",
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'orders.js'
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