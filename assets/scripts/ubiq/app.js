'use strict'

angular.module('ubiq.controllers', [])
angular.module('ubiq.directives', [])
angular.module('ubiq.services', [])
angular.module('ubiq.config', [])

require('../cache/ubiq-templates')
require('./pages/pages')

angular.module('ubiq', [
  'ubiq.controllers',
  'ubiq.directives',
  'ubiq.services',
  'ubiq.config',
  'ubiq.templates'
])
