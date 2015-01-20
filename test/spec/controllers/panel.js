'use strict';

describe('Controller: PanelController', function () {

  // load the controller's module
  beforeEach(module('yoTestProjectApp'));

  var PanelController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PanelController = $controller('PanelController', {
      $scope: scope
    });
  }));

  it('should select a tab', function () {
    scope.selectTab(1);
    expect(scope.tab).toBe(1);
    expect(scope.isSelected(1)).toEqual(true);
  });
});
