'use strict';

describe('Controller: EggheadCtrl', function () {

  // load the controller's module
  beforeEach(module('yoTestProjectApp'));

  var EggheadCtrl,
    scope,
    compile;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $compile, $rootScope) {
    scope = $rootScope.$new();
    EggheadCtrl = $controller('EggheadCtrl', {
      $scope: scope
    });
    compile = $compile;
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  // Test egg-directive
  it('should replace the element with the appropriate content', function(){
    var element = compile('<egg-directive></egg-directive>')(scope);
    scope.$digest();
    expect(element.html()).toContain('Here I am to save the day');
  });
});
