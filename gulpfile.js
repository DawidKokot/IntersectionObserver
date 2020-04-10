const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoPref = require('gulp-autoprefixer');
const sourceMaps = require('gulp-sourcemaps');

const styleSRC = 'src/scss/main.scss';
const styleDST = 'css/';
const styleWatch = 'src/scss/**/*.scss'

const paths = {
    style: {
        src: 'scss/main.scss',
        dst: 'css/',
        watch: 'scss/'
    }
}

function style() {

    return gulp.src(styleSRC)
        .pipe(sourceMaps.init())
        .pipe(sass({
            errorLogToConsole: true,
            outputStyle: 'compressed'
        }))
        .on('error', console.error.bind(console))
        .pipe(autoPref({
            cascade: false,
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(sourceMaps.write('./'))
        .pipe(gulp.dest(styleDST));

};

function watch() {
    gulp.watch(styleWatch, style)
}


exports.watch = watch
exports.default = style;