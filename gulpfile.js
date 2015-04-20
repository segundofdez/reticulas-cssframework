var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

/**
* Gulp errors
*/
function swallowError (error) {
    console.log(error.toString());
    this.emit('end');
}

/**
* Task watch
*/
gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['less/**/*.less', 'less/**/*.css'], ['styles']);
});

/**
* Task styles: errors, autoprefixer, minified, rename, notify
*/
gulp.task('styles', function () {
  var less_src_import = 'less/main.less';
  var less_dest_folder = 'build/';

  return gulp.src(less_src_import)
    .pipe(less())
    .on('error', swallowError)
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(less_dest_folder))
    .pipe(notify("Less Compiled, Prefixed and Minified"))
    .pipe(livereload());
});
