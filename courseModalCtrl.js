angular.module('prereqsApp').controller('courseModalCtrl', function ($scope, $http) {
	$scope.openModal
	$http.get('https://api.uwaterloo.ca/v2/courses/' + courseID + '.json?key=841086bf587e62c3eee2711d22043b27').success(function(data) {
		alert('fsdfs');
		$scope.course = data.data;
	});
});