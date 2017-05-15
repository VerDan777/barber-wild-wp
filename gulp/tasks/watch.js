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
        gulp.start('pugChanged');
    });

    // html
    // watch('./dist/*.html', function() {
    //     browserSync.reload();
    // })

    // styles
    watch('./src/sass/**/*.scss', function() {
        gulp.start('cssInject');
    });

    // scripts
    watch('./src/js/**/*.js', function() {
        gulp.start('jsChanged');
    });

    // wordpress
    watch('./wp/*.php', function() {
        gulp.start('copyPHP');
    });

    watch('./dist/styles.css', function() {
        gulp.start('copyCSS');
    });
});

gulp.task('jsChanged', ['scripts'], function() {
    browserSync.reload();
});

gulp.task('pugChanged', ['pugRender'], function() {
    browserSync.reload();
});

gulp.task('cssInject', ['styles'], function() {
    gulp.src('./dist/styles.css')
        .pipe(browserSync.stream());
});