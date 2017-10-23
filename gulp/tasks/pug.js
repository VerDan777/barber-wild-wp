const gulp = require('gulp');
const pug = require('gulp-pug2');

gulp.task('pugRender', function() {
    return gulp.src('./src/*.pug')
        .pipe(pug())
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./dist/'));
});