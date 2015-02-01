angular.module('prereqsApp').controller('courseModalCtrl', function ($scope, $modalInstance, $http, $q, course) {
	$scope.course = course;
	//(1of: PHYS112, PHYS122)(2of: PHYS234, PHYS241, PHYS242, PHYS256, PHYS258/PHYS358 PHYS263, PHYS275)
	$scope.prereqArr = [];
	var makeAPICall = function (callString) { // example of callString: '/codes/subjects'
		var response = $q.defer();
		$http.get('https://api.uwaterloo.ca/v2' + callString + '.json?key=841086bf587e62c3eee2711d22043b27').then(function(data) {
			response.resolve(data);
		});
		return response.promise;
	}

	makeAPICall('/courses/' + course.subject + '/' + course.catalog_number + '/prerequisites').then(function (response) {
		$scope.prereqsList = response.data.data.prerequisites_parsed;
		console.log($scope.prereqsList);
	});

	function scroll() {
    	$window.scrollBy(0,50); // horizontal and vertical scroll increments
    	scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds
	}
		

	$scope.close = function () {
		$modalInstance.dismiss('close');
	};
});