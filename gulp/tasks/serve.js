'use strict'

import fs from 'fs'
import path from 'path'
import url from 'url'
import gulp from 'gulp'
import browserSync from 'browser-sync'

// Resolving to the project root.
const folder = path.resolve(__dirname, '../../')
const defaultFile = 'index.html'

gulp.task('serve', () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['./'],
      middleware: function (req, res, next) {
        let filename = url.parse(req.url)
        filename = filename.href.split(filename.search).join('')

        if (!fs.existsSync(folder + filename)) {
          req.url = '/' + defaultFile
        }

        return next()
      }
    }
  })
})
