'use strict'

import gulp from 'gulp'
import templateCache from 'gulp-angular-templatecache'

gulp.task('template-cache', () => {
  return gulp.src('./assets/scripts/**/*.html')
    .pipe(templateCache({
      filename: 'ubiq-templates.js',
      module: 'ubiq.templates'
    }))
    .pipe(gulp.dest('./assets/scripts/cache'))
})
