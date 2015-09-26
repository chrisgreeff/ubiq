import gulp from 'gulp'
import standard from 'gulp-standard'

const STANDARD_GLOB = [
  './**/*.js',
  '!./node_modules/**/*',
  '!./assets/scripts/vendor/**/*',
  '!./dist/**/*.js',
  '!./assets/scripts/util/**/*.js'
]

gulp.task('standard', () => {
  return gulp.src(STANDARD_GLOB)
    .pipe(standard())
    .pipe(standard.reporter('default', {}))
})
