'use strict'

angular.module('ubiq.controllers', [])
angular.module('ubiq.directives', [])
angular.module('ubiq.services', [])
angular.module('ubiq.config', [])
angular.module('ubiq.templates', [])
angular.module('ubiq.vendor', [])

require('../cache/ubiq-templates')
require('./services/services')
require('./config/config')
require('./pages/pages')
require('./global/controllers/controllers')
require('./vendor-modules/vendor-modules')

angular.module('ubiq', [
  'ubiq.vendor',
  'ubiq.controllers',
  'ubiq.directives',
  'ubiq.services',
  'ubiq.config',
  'ubiq.templates'
])
