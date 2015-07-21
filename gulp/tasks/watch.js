import gulp from 'gulp'

gulp.task('watch', () => {
  gulp.watch('assets/styles/**/*.scss', ['sass'])
  gulp.watch('assets/scripts/**/*.js', ['standard', 'browserify'])
})
