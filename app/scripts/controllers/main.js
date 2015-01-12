'use strict';

/**
 * @ngdoc function
 * @name yoTestProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoTestProjectApp
 */
angular.module('yoTestProjectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
