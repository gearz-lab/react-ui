var path = require('path');
var postcss = require('postcss');
var cssnext = require('cssnext');
var cssgrace = require('cssgrace');
var fs = require('fs');

var processor = postcss([cssnext, cssgrace]);
var repoRoot = path.resolve(__dirname, '../../');

var css = fs.readFileSync('./css/bundle.css');

processor
    .process(css, { from: 'app.css', to: 'app.out.css' })
    .then(function (result) {
        fs.fileWriteSync('app.out.css', result.css);
        if ( result.map ) {
            fs.fileWriteSync('app.out.css.map', result.map);
        }
    });