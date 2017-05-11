const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });

    // pug
    watch('./src/*.pug', function() {
        gulp.start('pugRender');
    });

    // html
    watch('./dist/*.html', function() {
        browserSync.reload();
    })

    // styles
    watch('./src/**/*.scss', function() {
        gulp.start('cssInject');
    });

    // scripts

    // wordpress
    watch('./wp/*.php', function() {
        gulp.start('copyPHP');
    });

    watch('./dist/styles.css', function() {
        gulp.start('copyCSS');
    });
});

gulp.task('cssInject', ['styles'], function() {
    gulp.src('./dist/styles.css')
        .pipe(browserSync.stream());
})