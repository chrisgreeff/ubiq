import gulp from 'gulp'
import concat from 'gulp-concat'

gulp.task('scripts', () => {
  gulp.src('assets/scripts/ubiq/**/*.js')
    .pipe(concat('ubiq.js'))
    .pipe(gulp.dest('dist/js'))
})
