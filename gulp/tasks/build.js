'use strict'

import gulp from 'gulp'
import runSequence from 'run-sequence'

gulp.task('build', (callback) => {
  return runSequence(
    ['clean', 'template-cache'],
    ['styles', 'browserify', 'vendor', 'standard'],
    callback
  )
})
