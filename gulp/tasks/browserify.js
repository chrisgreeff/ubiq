'use strict'

import gulp from 'gulp'
import wrap from 'gulp-wrap'
import sourcemaps from 'gulp-sourcemaps'
import ngAnnotate from 'browserify-ngannotate'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import babelify from 'babelify'
import chalk from 'chalk'

gulp.task('browserify', () => {
  const bundler = browserify({
    entries: './assets/scripts/ubiq/app.js',
    debug: true,
    transform: [
      babelify.configure({ compact: false }),
      ngAnnotate
    ]
  })

  return bundler.bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(wrap(';(function() {<%= contents %>}());'))
    .on('error', function (error) {
      console.log(chalk.red(error))
      this.emit('end')
    })
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist/js'))
})
