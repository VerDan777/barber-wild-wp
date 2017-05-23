const gulp = require('gulp');
const rename = require('gulp-rename');

gulp.task('copyPHP', function() {
    gulp.src('./wp/*.php')
        .pipe(gulp.dest('C:/xampp/htdocs/bw/wp-content/themes/barberwild'));
});

gulp.task('copyCSS', function() {
    gulp.src('./dist/styles.css')
        .pipe(rename('style.css'))
        .pipe(gulp.dest('C:/xampp/htdocs/bw/wp-content/themes/barberwild'));
});

gulp.task('copyJS', function() {
    gulp.src('./dist/*.js')
        .pipe(gulp.dest('C:/xampp/htdocs/bw/wp-content/themes/barberwild'));
});