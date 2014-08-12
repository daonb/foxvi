'use strict';

angular.module('mean.directives').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('directives example page', {
      url: '/directives/example',
      templateUrl: 'directives/views/index.html'
    });
  }
]);
