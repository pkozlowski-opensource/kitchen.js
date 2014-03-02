var gulp = require('gulp');
var traceur = require('gulp-traceur');

var traceurOptions = {
  types: true,
  annotations: true,
  modules: 'amd'
};

gulp.task('default', function () {

  //traceur compilation
  gulp.src('node_modules/di/src/*.js')
    .pipe(traceur(traceurOptions)).pipe(gulp.dest('dist/di'));
  gulp.src('node_modules/*.js/*.js')
    .pipe(traceur(traceurOptions)).pipe(gulp.dest('dist'));
  gulp.src(['index.js', 'kitchen.js'])
    .pipe(traceur(traceurOptions)).pipe(gulp.dest('dist'));

  //copy public files
  gulp.src('public/*').pipe(gulp.dest('dist'));
  gulp.src('node_modules/es6-shim/es6-shim.js').pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch(['public/*', 'index.js', 'kitchen.js'], ['default']);
});