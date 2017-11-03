const path = require('path');
const gulp = require('gulp');
const pump = require('pump');
const sass = require('node-sass');
const through = require('through2');
const gulpUtil = require('gulp-util');
const helpers = require('../helpers');

const cssnano = require('cssnano');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const stripInlineComments = require('postcss-strip-inline-comments');


const config = {
  themesDir: helpers.root('src/styles/themes/**/*.scss'),
  stylesDir: helpers.root('src/styles/share-buttons.scss'),
  themesOutputDir: helpers.root('dist/styles/themes'),
  stylesOutputDir: helpers.root('dist/styles')
};

const compileThemes = () => {
  return through.obj((file, encoding, callback) => {
    if (file.isNull()) {
      return cb(null, file);
    }
    if (file.isStream()) {
      return cb(new gulpUtil.PluginError('compileThemes', 'Streaming not supported'));
    }
    if (path.basename(file.path).startsWith('_')) {
      return cb();
    }
    if (!file.contents.length) {
      file.path = gulpUtil.replaceExtension(file.path, '.css');
      return cb(null, file);
    }

    /**
     * Remove comments, autoprefixer, Minifier
     */
    let processors = [
      stripInlineComments,
      autoprefixer,
      cssnano
    ];
    if (/\.(scss|sass)$/.test(path.extname(file.path))) {
      let sassObj = sass.renderSync({ file: file.path });
      if (sassObj && sassObj['css']) {

        let css = sassObj.css.toString('utf8');
        postcss(processors).process(css).then(function (result) {
          result.warnings().forEach(function (warn) {
            gulpUtil.warn(warn.toString());
          });
          file.contents = new Buffer(result.css);
          file.path = gulpUtil.replaceExtension(file.path, '.css');
          callback(null, file);
        });
      }
    }

  });
};

gulp.task('styles', (cb) => {
  pump(
    [
      gulp.src(config.stylesDir),
      compileThemes(),
      gulp.dest(config.stylesOutputDir)
    ],
    cb);
});


gulp.task('themes', (cb) => {
  pump(
    [
      gulp.src(config.themesDir),
      compileThemes(),
      gulp.dest(config.themesOutputDir)
    ],
    cb);
});
