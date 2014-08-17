'use strict';

angular.module('mean.physicsjs').controller('PhysicsjsController', ['$scope', 'Global', 'Physicsjs',
  function($scope, Global, Physicsjs) {
    $scope.global = Global;
    $scope.package = {
      name: 'physicsjs'
    };
  }
]);
