const gulp = require('gulp');
const webpack = require('webpack-stream');

gulp.task('scripts', function() {
    return gulp.src('./src/js/app.js')
        .pipe(webpack(require('../../webpack.config.js')))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./dist/'));
});