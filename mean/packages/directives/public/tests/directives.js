describe('Unit:DirectivesController', function() {
  beforeEach(function() {
    module('mean');
    module('mean.system');
    module('mean.directives')
  });
  var ctrl, scope;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('DirectiveController', {
      $scope: scope
    });
  }));
  it('should list all directive',
     function() {
       scope.find();
       expect(scope.directives).toBeNull();
  });
}) 
