'use strict';

angular.module('mean.directives').factory('Directives', ['$resource',
  function($resource) {
    return $resource('d/:dId', {
      dId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
