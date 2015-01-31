angular.module('prereqsApp').controller('courseModalCtrl', function ($scope, course) {

	var makeAPICall = function (callString) { // example of callString: '/codes/subjects'
    	var response = $q.defer();
    	$http.get('https://api.uwaterloo.ca/v2' + callString + '.json?key=841086bf587e62c3eee2711d22043b27').then(function(data) {
      		response.resolve(data);
    	});
    	return response.promise;
  	}
});