'use strict'

angular.module('ubiq.config').config(($stateProvider, $urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/landing')

  $stateProvider.state('landing', {
    url: '/landing',
    templateUrl: 'ubiq/pages/landing/landing.html'
  })

  $locationProvider.html5Mode({
    // So we don't need a # before the query params, and routes.
    enabled: true,
    // So we don't need a base element.
    requireBase: false
  })
})
