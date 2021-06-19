const { src, dest } = require("gulp");
const plumber = require("gulp-plumber");
const changed = require("gulp-changed");
const svgSprite = require("gulp-svg-sprite");
const gulpif = require("gulp-if");
const config = require("./_config");

function img() {
  return src([
    `${config.path.src}/img/**/*`,
    `!${config.path.src}/img/sprites/**`,
    `!${config.path.src}/img/embedded/**`,
  ])
    .pipe(plumber())
    .pipe(gulpif(config.isDevMode, changed(`${config.path.serve}/img`)))
    .pipe(gulpif(config.isDevMode, dest(`${config.path.serve}/img`)))
    .pipe(gulpif(config.isProdMode, dest(`${config.path.dist}/img`)));
}

function pic() {
  return src(`${config.path.src}/pic/**/*`)
    .pipe(plumber())
    .pipe(gulpif(config.isDevMode, changed(`${config.path.serve}/pic`)))
    .pipe(gulpif(config.isDevMode, dest(`${config.path.serve}/pic`)))
    .pipe(gulpif(config.isProdMode, dest(`${config.path.dist}/pic`)));
}

exports.img = img;
exports.pic = pic;
