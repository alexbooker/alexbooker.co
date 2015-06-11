var gulp        = require('gulp');
var sass        = require('gulp-ruby-sass');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

function initBrowserSync() {
  browserSync.init({
    server: {
      baseDir: "www"
    },
    notify: false
  });
}

gulp.task('sass', function() {
  return sass('www/scss/main.scss')
  .on('error', function (err) {
    console.error('Error!', err.message);
  })
  .pipe(gulp.dest('www/css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch('www/scss/main.scss', ['sass']);
  gulp.watch([
    'www/*.html',
    'www/css/*.css',
  ]).on('change', reload);
  initBrowserSync();
});