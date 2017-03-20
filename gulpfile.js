const gulp = require('gulp');

gulp.task('copy-html', () => {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy-styles', () => {
  return gulp.src('./src/**/*.scss')
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['copy-html', 'copy-styles']);
