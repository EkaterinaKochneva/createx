const { src, dest } = require('gulp');

const path = require('../config/path.js');
const app = require('../config/app.js');

const favicons = require('gulp-favicons');
const filter = require('gulp-filter');

module.exports = function favicon() {
  return src(path.favicon.src)
    .pipe(dest(path.favicon.build))
    .pipe(favicons(app.favicons))
    .pipe(dest(path.favicon.build))
    .pipe(filter(['favicon.ico', 'apple-touch-icon.png', 'manifest.json' ]))
    .pipe(dest(path.buildFolder))
}