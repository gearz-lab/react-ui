var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var colors = require('colors');
var del = require('del');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');

gulp.task('clean-styles', function (done){
    del(['./css/*.css', './css/*.map'], done);
})
gulp.task('styles', ['clean-styles'], function() {
    return gulp.src('src/less/*.less')
        .pipe($.plumber())
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(concat('react-ui.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css'));
});


gulp.task('less-watcher', function() {
    gulp.watch(['./css/*.css'], ['styles']);
})