import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'

gulp.task('sass', () => {
  return gulp.src('./assets/styles/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
})
