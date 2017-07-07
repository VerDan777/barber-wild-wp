const gulp = require('gulp');
const webpack = require('webpack-stream');

const commonCfg = {
    entry: {
        scripts: './src/js/scripts.js',
        orders: './src/js/orders.js',
        partners: './src/js/partners.js',
        samples: './src/js/samples.js',
        map: './src/js/map.js'
    },
    output: {
        filename: '[name].js'
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

gulp.task('scripts', function() {
    return gulp.src('./src/js/scripts.js')
        .pipe(webpack(commonCfg))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./dist/'));
});