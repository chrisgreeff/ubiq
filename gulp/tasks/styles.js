'use strict'

import gulp from 'gulp'
import sass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'

gulp.task('styles', () => {
  return gulp.src('./assets/styles/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))
})
