'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {
    return gulp.src('style.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('autopref', () =>
    gulp.src('css/style.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('dist/style1.css'))
);

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('syncReload', function() {
    browserSync.reload();
});


gulp.task('default', ['browser-sync', 'sass'], function() {
    gulp.watch('style.scss', ['sass', 'syncReload']);
});