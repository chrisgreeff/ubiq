import gulp from 'gulp'

gulp.task('watch', () => {
  gulp.watch('assets/styles/**/*.scss', ['styles'])
  gulp.watch('assets/scripts/**/*.js', ['vendor', 'scripts'])
})
