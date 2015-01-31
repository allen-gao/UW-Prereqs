angular.module('prereqsApp', ['ui.bootstrap']).controller('prereqsCtrl', function ($scope, $modal) {
	$scope.lol = "gg";
	//$scope.input = "CS";
	$scope.myFunction = function () {
		alert('fsdgdfgs');
	}
	$scope.open = function () {

    	var modalInstance = $modal.open({
    		templateUrl: 'templates/modal.html',
    		controller: 'modalCtrl',
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