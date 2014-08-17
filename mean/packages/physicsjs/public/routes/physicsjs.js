'use strict';

angular.module('mean.physicsjs').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('physicsjs example page', {
      url: '/physicsjs/example',
      templateUrl: 'physicsjs/views/index.html'
    });
  }
]);
