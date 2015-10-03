'use strict'

import path from 'path'
import gulp from 'gulp'
import bower from 'main-bower-files'
import concat from 'gulp-concat'

gulp.task('vendor', () => {
  const vendorGlob = bower({ includeDev: true }).filter((filename) => /(\.(js|coffee)$)/i.test(path.extname(filename)))

  vendorGlob.push('assets/scripts/vendor/**/*.js')

  return gulp.src(vendorGlob)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/js'))
})
