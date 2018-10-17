const gulp = require('gulp'),
      scss = require('gulp-sass'),
      plumber = require('gulp-plumber'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync').create();

gulp.task('scss', function(){ // scss task
    return gulp.src('app/sass/**/*.scss')
        .pipe(plumber())
        .pipe(scss()) // scss to css
        .pipe(autoprefixer('last 15 versions', { cascade: true })) // prefixes
        .pipe(gulp.dest('app/css')) // export
        .pipe(browserSync.reload({stream: true})) // reload page
});

gulp.task('html', function() {
    return gulp.src('app/*.html')
        .pipe(gulp.dest('app'))
});

gulp.task('start', function() { // task browser-sync
    browserSync.init({
        server: {
            baseDir: 'app' // server dir - app
        },
        notify: false
    });
    gulp.watch('app/sass/**/*.scss', ['scss']);
    gulp.watch(['app/**/*.html'], ['html']);
});
