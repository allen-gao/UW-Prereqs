var prereqsApp = angular.module('prereqsApp', []);

prereqsApp.controller('prereqsCtrl', function ($scope, $http) {
	
	$http.get('https://api.uwaterloo.ca/v2/codes/subjects.json?key=841086bf587e62c3eee2711d22043b27').success(function(data) {
		$scope.subjects = data.data;
	});
	$scope.searchCourse = function(selected_subject) {
		$http.get('https://api.uwaterloo.ca/v2/courses/' + $scope.selected_subject +'.json?key=841086bf587e62c3eee2711d22043b27').success(function(data) {
			$scope.courses = data.data;
		});
	}
});
  