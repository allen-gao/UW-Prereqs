var prereqsApp = angular.module('prereqsApp', ['$modal']);

prereqsApp.controller('prereqsCtrl', function ($scope, $modal, $http) {

	$http.get('https://api.uwaterloo.ca/v2/codes/subjects.json?key=841086bf587e62c3eee2711d22043b27').success(function(data) {
		$scope.subjects = data.data;
	});
	$scope.searchCourse = function(selected_subject) {
		$http.get('https://api.uwaterloo.ca/v2/courses/' + $scope.selected_subject +'.json?key=841086bf587e62c3eee2711d22043b27').success(function(data) {
			$scope.courses = data.data;
			if ($scope.courses.length == 0) {
				$scope.courses[0] = {
					'subject': 'No courses found for this subject.', 
					'catalog_number': 'This is likely an outdated subject code.', 
					'nonClickable': true
				};
			}
		});
	}
	
	$scope.openModal = function (courseID) {
		var ModalInstance = $modal.open({
			templateUrl: 'courseModal.html',
			controller: 'courseModalCtrl'
		});
	}

	
});