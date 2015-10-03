'use strict'

import fs from 'fs'
import path from 'path'
import _ from 'lodash-node'

const tasks = fs.readdirSync('./gulp/tasks/').filter((filename) => /(\.(js)$)/i.test(path.extname(filename)))

_.forEach(tasks, (task) => require('./tasks/' + task))
