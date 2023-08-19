const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('src/assets/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('src/assets/comp/css'))
}

function watchTask() {
    watch(['src/assets/scss/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)