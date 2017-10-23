const gulp = require('gulp');

gulp.task('copyPHP', function() {
    return gulp.src('./orders/**/*.php')
        .pipe(gulp.dest('C:/xampp/htdocs/bw'));
});