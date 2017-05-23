const gulp = require('gulp');
const webpack = require('webpack-stream');

const commonCfg = {
    entry: './src/js/scripts.js',
    output: {
        filename: 'scripts.js'
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

const ordersCfg = {
    entry: './src/js/scripts.js',
    output: {
        filename: 'order.js'
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