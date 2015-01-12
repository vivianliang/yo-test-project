'use strict';

/**
 * @ngdoc function
 * @name yoTestProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoTestProjectApp
 */
angular.module('yoTestProjectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
