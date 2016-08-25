const gulp = require('gulp');
const del = require('del');

/** merge2 for parallel tasks */
var merge = require('merge2');

var embedTemplates = require('gulp-inline-ng2-template');

/** Typescript compilter */
const typescript = require('gulp-typescript');
const uglify = require('gulp-uglify');
/** TSLint checker */
const tslint = require('gulp-tslint');
const sourcemaps = require('gulp-sourcemaps');

/** Sass style */
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const scss = require('postcss-scss');
const stripInlineComments = require('postcss-strip-inline-comments');


const tsProject = typescript.createProject('tsconfig.json');

const config = {
    allSass: 'src/**/*.scss',
    allTs: 'src/**/*.ts',
    allTsd: 'typings/index.d.ts',
    OutputDir: 'dist/'
};

// clean dist directory
gulp.task('clean', function () {
    return del(config.OutputDir);
});

// TypeScript compile
gulp.task('compile-ts', ['clean', 'styles'], function () {
    var sourceTsFile = [
        config.allTs,
        config.allTsd
    ];

    var tsResult = gulp.src(sourceTsFile)
        .pipe(embedTemplates({base: './src/share'}))
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject));

    tsResult.js.pipe(uglify())
        .pipe(gulp.dest(config.OutputDir));

    return merge([
        tsResult.dts.pipe(gulp.dest(config.OutputDir)),
        tsResult.js
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest(config.OutputDir))
        ]);

    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.OutputDir));

});

gulp.task('ts-lint', function () {
    return gulp.src(config.allTs)
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
});

/** Styles Task */
gulp.task('styles', function () {
    var processors = [
        stripInlineComments,
        autoprefixer,
        cssnano
    ];
    return gulp.src(config.allSass)
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors, {syntax: scss}))
        .pipe(gulp.dest('src'));
});

gulp.task('watch', function() {
    gulp.watch([config.allTs], ['ts-lint', 'compile-ts']);
    gulp.watch([config.allSass, config.allHtml], ['styles']);
});

gulp.task('default', ['ts-lint', 'compile-ts']);