angular.module('prereqsApp').controller('courseModalCtrl', function ($scope, $modalInstance, $http, $q, course) {
	$scope.course = course;

	$scope.courses = ['CS135', 'CS136', 'CS246', 'CS251', 'CS245', 'CS211', 'CS222', 'CS333', 'CS444', 'CS555', 'CS666', 'CS777'];
	var makeAPICall = function (callString) { // example of callString: '/codes/subjects'
		var response = $q.defer();
		$http.get('https://api.uwaterloo.ca/v2' + callString + '.json?key=841086bf587e62c3eee2711d22043b27').then(function(data) {
			response.resolve(data);
		});
		return response.promise;
	}

	//parsePre: Array [Num, String, String....] (Empty String) -> NULL
	//Effects: Logs the elements in the array
	var parsePre = function (pre, recCall){
	  var strOfCourses = "";
	  for(var i = 0; i < pre.length; i++){
	    if(typeof pre[i] === 'number'){
	    	if(recCall === 1){
	    		strOfCourses += "(" + pre[i] + "of: ";
	    	}
	    }
	    else if(typeof pre[i] === 'string'){
	      if(i === pre.length - 1){
	          strOfCourses += pre[i];
	      }
	      else {
	      	  if(recCall > 1){
	      	  	strOfCourses += pre[i] + "/";
	      	  }
	      	  else {
	      	  	strOfCourses += pre[i] + ", ";
	      	  }
	      }
	    }
	    else {
	    	if(recCall === 0){
	    		strOfCourses += parsePre(pre[i], recCall + 1) + ")";
	    	}
	    	else {
	    		strOfCourses += parsePre(pre[i], recCall + 1) + " "; 
	    	}
	    }
	  }
	  return strOfCourses;
	}

	makeAPICall('/courses/' + course.subject + '/' + course.catalog_number + '/prerequisites').then(function (response) {
		$scope.prereqsList = response.data.data.prerequisites_parsed;
		$scope.prereqStr = parsePre($scope.prereqsList, 0);
	});
		

	$scope.close = function () {
		$modalInstance.dismiss('close');
	};
});