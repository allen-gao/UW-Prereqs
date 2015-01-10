var prereqsApp = angular.module('prereqsApp', []);

prereqsApp.controller('prereqsCtrl', function ($scope) {
	$scope.courses = ['CS135', 'CS136', 'CS246'];
}
  