var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var colors = require('colors');
var del = require('del');
var rimraf = require('rimraf-promise');
var exec = require('child-process-promise').exec;
var path = require('path');
var fsp = require('fs-promise');
var fsep = require('fs-extra-promise');
var React = require('react');
var Router = require('react-router');
var path = require('path');
var routes = require('./docs/src/Routes');
var _ = require('lodash');

gulp.task('build-css', function () {
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

gulp.task('build-lib', function () {
    return rimraf('./lib')
        .then(function (error) {
            var babelCli = 'babel --optional es7.objectRestSpread ./src --out-dir ./lib';
            return exec(babelCli).fail(function (error) {
                console.log(colors.red(error))
            });
        });
});

gulp.task('build-dist', function () {
    return rimraf('./dist').then(function (error) {
        var webpackCli = 'webpack --bail';
        var webpackCliProduction = 'webpack --bail -p';
        return exec(webpackCli).fail(function (error) {
            console.log(colors.red(error))
        })
            .then(function () {
                exec(webpackCliProduction).fail(function (error) {
                    console.log(colors.red(error));
                });
            });
    });
});

gulp.task('build-amd', function () {
    function bowerConfig() {
        return Promise.all([
            fsp.readFile('./package.json')
                .then(function (json) {
                    return JSON.parse(json);
                }),
            fsp.readFile('./tools/amd/bower.json')
                .then(function (template) {
                    return _.template(template);
                })
        ])
            .then(function (args) {
                var package = args[0];
                var template = args[1];
                return template({pkg: package});
            })
            .then(function (config) {
                return fsp.writeFile('./amd/bower.json', config);
            });
    }

    return rimraf('./amd').then(function (error) {
        return fsp.mkdir('./amd').then(function () {
            return Promise.all([
                bowerConfig(),
                exec('babel --modules amd --optional es7.objectRestSpread ./src --out-dir ./amd/lib'),
                fsep.copy('./tools/amd/README.md', './amd/README.md'),
                fsep.copy('./LICENSE', './amd/LICENSE')
            ]);
        });
    });
});

gulp.task('build-docs', function () {
    return rimraf('./docs-built').then(function (error) {
        return fsp.mkdir('./docs-built').then(function () {
            var docPages = ['index.html', 'getting-started.html', 'components.html'];
            var writes = docPages.map(function (fileName) {


                return new Promise(function (resolve, reject) {
                    Router.run(routes, '/' + fileName, function (Handler) {
                        var RootHTML = React.renderToString(React.createElement(Handler));
                        console.log(RootHTML);
                        var write = fsp.writeFile(path.join('./docs-built', fileName), RootHTML);
                        resolve(write);
                    });
                });



            });
            return Promise.all(writes.concat([
                exec('webpack --config webpack.docs.js -p --bail'),
                fsep.copy('./LICENSE', './docs-built/LICENSE'),
                fsep.copy('./readme.md', './docs-built/readme.md')
            ]));
        });
    });
});

gulp.task('build', ['build-css', 'build-docs', 'build-lib', 'build-dist', 'build-amd']);

gulp.task('watch-css', function () {
    // TODO: This is not deterministic... Sometimes it doesn't work. For precision, use 'build-css'
    gulp.watch(['./src/less/*.less'], ['build-css']);
})