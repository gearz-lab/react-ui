var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var colors = require('colors');
var del = require('del');

gulp.task('clean-css', function (){
    del(['./css/*.css', './css/*.map']);
});

gulp.task('build-css', ['clean-css'], function() {
    return gulp.src('src/less/*.less')
        .pipe($.plumber())
        .pipe($.sourcemaps.init())
        .pipe($.less())
        .pipe($.minifyCss())
        .pipe($.concat('react-ui.css'))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('css'));
});

gulp.task('watch-css', function() {
    // TODO: This is not deterministic... Sometimes it doesn't work. For precision, use 'build-css'
    gulp.watch(['./src/less/*.less'], ['build-css']);
})