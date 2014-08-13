'use strict';

angular.module('mean.directives').config(['$stateProvider',
  function($stateProvider) {
    var checkLoggedin = function($q, $timeout, $http, $location) {
      // Initialize a new promise
      var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/loggedin').success(function(user) {
        // Authenticated
        if (user !== '0') $timeout(deferred.resolve);

        // Not Authenticated
        else {
          $timeout(deferred.reject);
          $location.url('/login');
        }
      });

      return deferred.promise;
    };

    $stateProvider
      .state('directives example page', {
       url: '/d/example',
       templateUrl: 'directives/views/index.html'
      })
      .state('all dirs', {
        url: '/d',
        templateUrl: 'directives/views/list.html',
        resolve: {
          loggedin: checkLoggedin
        }
      })
      .state('create dir', {
        url: '/d/create',
        templateUrl: 'directives/views/create.html',
        resolve: {
          loggedin: checkLoggedin
        }
      })
      .state('edit dir', {
        url: '/d/:dId/edit',
        templateUrl: 'directory/views/edit.html',
        resolve: {
          loggedin: checkLoggedin
        }
      });
  }
]);
