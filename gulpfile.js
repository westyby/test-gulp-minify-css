'use strict';
var gulp = require('gulp');
var minifycss = require('gulp-minify-css');

var task = {};

gulp.task('cssmin', function () {
    gulp.src('./src.css')
        .pipe(minifycss({

        }))
        .pipe(gulp.dest('./build/gulp'))
});
gulp.task('default', ['cssmin']);