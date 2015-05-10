'use strict';

/**
 * @ngdoc function
 * @name prereqsAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the prereqsAppApp
 */
angular.module('prereqsAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
