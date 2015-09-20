import gulp from 'gulp'
import concat from 'gulp-concat'

gulp.task('vendor', () => {
  gulp.src('assets/scripts/vendor/**/*.js')
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/js'))
})
