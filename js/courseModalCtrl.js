angular.module('prereqsApp').controller('courseModalCtrl', function ($scope, $modalInstance, $http, $q, course) {

	var makeAPICall = function (callString) { // example of callString: '/codes/subjects'
		var response = $q.defer();
		$http.get('https://api.uwaterloo.ca/v2' + callString + '.json?key=841086bf587e62c3eee2711d22043b27').then(function(data) {
			response.resolve(data);
		});
		return response.promise;
	}
	makeAPICall('/courses/' + course.subject + '/' + course.catalog_number + '/prerequisites').then(function (response) {
		$scope.prereqsList = response.data.data;
		console.log($scope.prereqsList);
	});

	$scope.ok = function () {
		$modalInstance.dismiss('ok');
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	}
});