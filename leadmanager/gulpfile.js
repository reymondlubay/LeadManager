var gulp = require('gulp');
var gls = require('gulp-live-server');
var reload = browserSync.reload;

gulp.task('serve', function () {
  browserSync.init({
    server: { baseDir: './' },
  });

  gulp.watch('*.jsx').on('change', reload);
});
