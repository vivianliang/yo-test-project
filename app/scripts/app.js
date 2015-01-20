'use strict';

/**
 * @ngdoc overview
 * @name yoTestProjectApp
 * @description
 * # yoTestProjectApp
 *
 * Main module of the application.
 */
angular
  .module('yoTestProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
    localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/egghead', {
        templateUrl: 'views/egghead.html',
        controller: 'EggheadCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/reviews', {
        templateUrl: 'views/reviews.html',
        controller: 'ReviewsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
