'use strict';

/**
 * @ngdoc function
 * @name yoTestProjectApp.controller:EggheadCtrl
 * @description
 * # EggheadCtrl
 * Controller of the yoTestProjectApp
 */
angular.module('yoTestProjectApp')
  .controller('EggheadCtrl', function ($scope, $location, $anchorScroll) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.gotoBottom = function() {
      $location.hash('bottom');
      $anchorScroll();
    };

  })
  .directive('eggDirective', function (){
    return {
      restrict: 'E',
      template: '<div>Here I am to save the day</div>'
    };
  });
