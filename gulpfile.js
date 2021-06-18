const { series, parallel } = require('gulp');
const clean = require('./_gulp/clean');
const { serve } = require('./_gulp/browser-sync');
const { html } = require('./_gulp/pages');
const styles = require('./_gulp/styles');
const scripts = require('./_gulp/scripts');
const { img, pic } = require('./_gulp/images');
const { watch } = require('./_gulp/watch');

exports.clean = clean;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.img = img;
exports.pic = pic;
exports.watch = watch;

exports.dev = series(
  clean,
  parallel(html, styles, scripts, img, pic),
  parallel(serve, watch)
);

exports.build = series(
  clean,
  parallel(html, styles, scripts, img, pic)
);
