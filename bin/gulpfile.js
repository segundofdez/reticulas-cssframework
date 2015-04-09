var gulp = require('gulp');
var less = require('gulp-less');
//var del = require('del');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var notify = require('gulp-notify');
var watch = require('gulp-watch');
var rename = require('gulp-rename');

/**
* Gulp errors
*/
function swallowError (error) {
    console.log(error.toString());
    this.emit('end');
}

/**
* Task watch and styles
*/
gulp.task('site-less', function () {
    gulp.watch('../less/**/*.less', ['styles']);
});

/**
* Task styles: errors, autoprefixer, minified, rename, notify
*/
gulp.task('styles', function () {
  var less_src_import = '../less/main.less';
  var less_dest_folder = '../build/';
  var minOpts = {processImport:false};

  gulp.src(less_dest_folder + '/main.min.css', {read: false});

  return gulp.src(less_src_import)
    .pipe(less())
    .on('error', swallowError)
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(minifycss(minOpts))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(less_dest_folder))
    .pipe(notify("Less Compiled, Prefixed and Minified"));
});


/**
* Valid css
*/
gulp.task('css', function () {
    return css();
});

gulp.task('build', ['css']);
