'use strict';

/**
 * @ngdoc overview
 * @name prereqsAppApp
 * @description
 * # prereqsAppApp
 *
 * Main module of the application.
 */
angular
  .module('prereqsApp', [
    'ngCookies',
    'ngRoute'
  ])
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
      .otherwise({
        redirectTo: '/'
      });
  });
