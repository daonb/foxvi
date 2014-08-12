'use strict';

angular.module('mean.directives').controller('DirectivesController', ['$scope', 'Global', 'Directives',
  function($scope, Global, Directives) {
    $scope.global = Global;
    $scope.package = {
      name: 'directives'
    };
  }
]);
