'use strict';

angular.module('mean.directives').controller('DirectivesController', ['$scope', 'Global', '$stateParams', '$location', 'Directives', function($scope, $stateParams, $location, Global, Directives) {
    $scope.global = Global;

    $scope.hasAuthorization = function(directive) {
      // TODO: autherization
      return true;
    };

    $scope.create = function(isValid) {
      if (isValid) {
        var directive = new Directives({
          text: this.text
        });
        directive.$save(function(response) {
          $location.path('d/' + response._id);
        });

        this.text = '';
      } else {
        $scope.submitted = true;
      }
    };

    $scope.remove = function(directive) {
      if (directive) {
        directive.$remove();

        // TODO: optimize - why a log?
        for (var i in $scope.directives) {
          if ($scope.directives[i] === directive) {
            $scope.directives.splice(i, 1);
          }
        }
      } else {
        $scope.directive.$remove(function(response) {
          $location.path('d');
        });
      }
    };

    $scope.update = function(isValid) {
      if (isValid) {
        var directive = $scope.directive;
        if (!directive.updated) {
          directive.updated = [];
        }
        directive.updated.push(new Date().getTime());

        directive.$update(function() {
          $location.path('d/' + directive._id);
        });
      } else {
        $scope.submitted = true;
      }
    };

    $scope.find = function() {
      Directives.query(function(directives) {
        $scope.directives = directives;
      });
    };

    $scope.findOne = function() {
      Directives.get({
        dId: $stateParams.dId
      }, function(directive) {
        $scope.directive = directive;
      });
    };
  }
]);
