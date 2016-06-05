var gulp = require("gulp");
var connect = require('gulp-connect');
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var watchify = require("watchify");
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');

var watchedBrowserify = watchify(browserify({
  basedir: '.',
  debug: true,
  entries: ['src/app.ts'],
  cache: {},
  packageCache: {}
}).plugin(tsify, {
   target: "es2015",
   module: "commonjs",
   sourceMap: true,
   noEmitOnError: true,
   experimentalDecorators: true
}));

gulp.task("copy-html", function () {
  return gulp.src('src/*.html')
    .pipe(gulp.dest("app"));
});

function bundle() {
  return watchedBrowserify
    .on('error', function (error) { console.error(error.toString()); })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest("app"));
}

gulp.task('connect', function () {
  connect.server({
    root: './app/',
    livereload: true
  });
});

gulp.task('js', function () {
  gulp.src('app/bundle.js')
    .pipe(connect.reload());
});

gulp.task('html-reload', function () {
  gulp.src('src/*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch('app/bundle.js', ['js']);
  gulp.watch('src/index.html', ['html-reload']);
});

/*
When a ts file is changed
- html is copied
- server is started
- watch beings monitoring for file changes in js & html files
- bundle will create the bundle.js file transpiled
- 
*/
gulp.task('default', ["copy-html", 'connect', 'watch'], bundle);
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", gutil.log);