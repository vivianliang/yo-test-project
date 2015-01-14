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
    $scope.todos = [];
    $scope.addTodo = function(){
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function(index){
      $scope.todos.splice(index,1);
    };
  });
