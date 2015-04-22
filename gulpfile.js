var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var colors = require('colors');
var del = require('del');
var rimraf = require('rimraf');
var exec = require('child-process-promise').exec;
var path = require('path');

gulp.task('build-css', ['clean-css'], function() {
    del(['./css/*.css', './css/*.map']);
    return gulp.src('src/less/*.less')
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.less())
        .pipe($.minifyCss())
        .pipe($.concat('react-ui.css'))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('css'));
});

gulp.task('build-lib', function() {
    rimraf('./lib', function(error) {
        var babelCli = 'babel --optional es7.objectRestSpread ./src --out-dir ./lib';
        exec(babelCli).fail(function(error) { console.log(colors.red(error))});
    });
});

gulp.task('build-dist', function() {
    rimraf('./dist', function(error) {
        var webpackCli = 'webpack --bail';
        var webpackCliProduction = 'webpack --bail -p';
        exec(webpackCli).fail(function(error) { console.log(colors.red(error))})
            .then(function() {exec(webpackCliProduction).fail(function(error) { console.log(colors.red(error));});});
    });
});

gulp.task('watch-css', function() {
    // TODO: This is not deterministic... Sometimes it doesn't work. For precision, use 'build-css'
    gulp.watch(['./src/less/*.less'], ['build-css']);
})