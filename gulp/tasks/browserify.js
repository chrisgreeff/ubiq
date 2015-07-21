'use strict'

import gulp from 'gulp'
import browserify from 'browserify'
import babelify from 'babelify'
import chalk from 'chalk'

gulp.task('browserify', () => {
  return browserify({ debug: true })
    .add('./assets/scripts/ubiq.js')
    .transform(babelify)
    .bundle()
    .on('error', function (error) {
      console.log(chalk.red(error))
      this.emit('end')
    })
})
