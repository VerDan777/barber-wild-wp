const gulp = require('gulp');
const rename = require('gulp-rename');

gulp.task('copyWpPHP', function() {
    return gulp.src('./wp/*.php')
        .pipe(gulp.dest('C:/xampp/htdocs/bw/wp-content/themes/barberwild'));
});

gulp.task('copyWpCSS', function() {
    return gulp.src('./dist/styles.css')
        .pipe(rename('style.css'))
        .pipe(gulp.dest('C:/xampp/htdocs/bw/wp-content/themes/barberwild'));
});

gulp.task('copyWpJS', function() {
    return gulp.src('./dist/*.js')
        .pipe(gulp.dest('C:/xampp/htdocs/bw/wp-content/themes/barberwild'));
});