import gulp from 'gulp'
import standard from 'gulp-standard'

const STANDARD_GLOB = [
  './**/*.js',
  '!./node_modules/**/*',
  '!./assets/scripts/vendor/**/*',
  '!./assets/scripts/cache/**/*'
]

gulp.task('standard', () => {
  return gulp.src(STANDARD_GLOB)
    .pipe(standard())
    .pipe(standard.reporter('default', {}))
})
