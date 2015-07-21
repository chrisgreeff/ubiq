import gulp from 'gulp'
import standard from 'gulp-standard'

gulp.task('standard', () => {
  return gulp.src(['./**/*.js', '!./node_modules/**/*'])
    .pipe(standard())
    .pipe(standard.reporter('default', {}))
})
