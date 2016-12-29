/**
 * @Author: @MurhafSousli
 */

const gulp = require('gulp');

/** To log like console.log().. */
var gutil = require('gulp-util');

/** del to remove dist directory */
const del = require('del');

/** merge2 to execute tasks in parallel*/
var merge = require('merge2');

/** load templates and styles in ng2 components */
var embedTemplates = require('gulp-inline-ng2-template');

/** Typescript compiler */
const typescript = require('gulp-typescript');

/** Javascript Minifier */
const uglify = require('gulp-uglify');

/** TSLint checker */
const tslint = require('gulp-tslint');

/** Sourcemaps */
const sourcemaps = require('gulp-sourcemaps');

/** Sass style */
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const scss = require('postcss-scss');
const stripInlineComments = require('postcss-strip-inline-comments');

/** External command runner */
const exec = require('child_process').exec;

/** File Access */
const fs = require('fs');
const file = require('gulp-file');


const LIBRARY_NAME = 'ng2-sharebuttons';

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

    /**
     * Embed templates and styles in ng2 components
     * Write sourcemaps
     * Compile ts
     * Minifiy compiled js
     */
    var sourceTsFile = [
        config.allTs,
        config.allTsd
    ];

    var defaults = {
        base: '/src',  
        target: 'es5', 
        useRelativePaths: true
    };

    var tsResult = gulp.src(sourceTsFile)
        .pipe(embedTemplates(defaults))
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
    /**
     * Remove comments, autoprefixer, Minifier
     */
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

/** Npm Packaging Task */
gulp.task('npm', function () {
    var pkgJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    var targetPkgJson = {};
    var fieldsToCopy = ['version', 'description', 'keywords', 'author', 'repository', 'license', 'bugs', 'homepage'];

    targetPkgJson['name'] = LIBRARY_NAME;

    //only copy needed properties from project's package json
    fieldsToCopy.forEach(function (field) { targetPkgJson[field] = pkgJson[field]; });

    targetPkgJson['main'] = `index.js`;
    targetPkgJson['module'] = 'index.js';
    targetPkgJson['typings'] = 'index.d.ts';

    // defines project's dependencies as 'peerDependencies' for final users
    targetPkgJson.peerDependencies = {};
    Object.keys(pkgJson.dependencies).forEach(function (dependency) {
        targetPkgJson.peerDependencies[dependency] = `^${pkgJson.dependencies[dependency]}`;
    });

    // copy the needed additional files in the 'dist' folder
    return gulp.src(['README.md', 'LICENSE', 'CHANGELOG.md'])
        .pipe(file('package.json', JSON.stringify(targetPkgJson, null, 2)))
        .pipe(gulp.dest('dist/'));
});

gulp.task('compile', ['ts-lint', 'compile-ts']);

/** Npm Publication Task */
gulp.task('publish', [ 'compile', 'npm'], function (done) {
    // run npm publish terminal command to publish the 'dist' folder only
    exec('npm publish ./dist',
        function (error, stdout, stderr) {
            if (stderr) {
                gutil.log(gutil.colors.red(stderr));
            } else if (stdout) {
                gutil.log(gutil.colors.green(stdout));
            }
            // execute callback when its done 
            if (done) {
                done();
            }
        }
    );
});


gulp.task('default', ['compile']);
