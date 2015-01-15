'use strict';

/**
 * @ngdoc function
 * @name yoTestProjectApp.controller:EggheadCtrl
 * @description
 * # EggheadCtrl
 * Controller of the yoTestProjectApp
 */
angular.module('yoTestProjectApp')
  .controller('EggheadCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
