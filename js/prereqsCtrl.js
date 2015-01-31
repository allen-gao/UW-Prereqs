angular.module('prereqsApp', ['ui.bootstrap']).controller('prereqsCtrl', function ($scope, $modal) {
	$scope.lol = "gg";
	//$scope.input = "CS";
	$scope.myFunction = function () {
		alert('fsdgdfgs');
	}
	$scope.openCourseModal = function () {

    	var modalInstance = $modal.open({
    		templateUrl: '../templates/courseModal.html',
    		controller: 'courseModalCtrl',
      /*
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
      */
  		});
	}
});