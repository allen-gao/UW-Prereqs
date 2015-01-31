angular.module('prereqsApp').controller('courseModalCtrl', function ($scope, $modalInstance, $http, $q, course) {
	$scope.course = course;
	var makeAPICall = function (callString) { // example of callString: '/codes/subjects'
		var response = $q.defer();
		$http.get('https://api.uwaterloo.ca/v2' + callString + '.json?key=841086bf587e62c3eee2711d22043b27').then(function(data) {
			response.resolve(data);
		});
		return response.promise;
	}

	//parsePre: Array [Num, String, String....] (Empty String) -> NULL
	//Effects: Logs the elements in the array
	var parsePre = function (pre){
	  var strOfCourses = "";
	  for(var i = 0; i < pre.length; i++){
	    if(typeof pre[i] === 'number'){
	      strOfCourses += "(" + pre[i] + "of: ";
	    }
	    else if(typeof pre[i] === 'string'){
	      if(i === pre.length - 1){
	          strOfCourses += pre[i];
	      }
	      else {
	          strOfCourses += pre[i] + ", \n";
	      }
	    }
	    else {
	    	strOfCourses += parsePre(pre[i]) + ")";
	    }
	  }
	  return strOfCourses;
	}

	makeAPICall('/courses/' + course.subject + '/' + course.catalog_number + '/prerequisites').then(function (response) {
		$scope.prereqsList = response.data.data.prerequisites_parsed;
		console.log($scope.prereqsList);
		$scope.prereqStr = parsePre($scope.prereqsList);
		console.log($scope.prereqStr);
	});
		

	$scope.ok = function () {
		$modalInstance.dismiss('ok');
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	}
});