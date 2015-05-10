'use strict'

angular.module('prereqsApp', ['ui.bootstrap']).controller('prereqsCtrl', function ($scope, $modal, $http, $q) {
  $scope.selectedSubject = "Select a Subject";
  var makeAPICall = function (callString) { // example of callString: '/codes/subjects'
    var response = $q.defer();
    $http.get('https://api.uwaterloo.ca/v2' + callString + '.json?key=841086bf587e62c3eee2711d22043b27').then(function(data) {
      response.resolve(data);
    });
    return response.promise;
  }

  makeAPICall('/codes/subjects').then(function (response) {
    $scope.courseSubjects = response.data.data; // first data wrapper is created by http call
  });

  $scope.lookupSubject = function(subject) {
    makeAPICall('/courses/' + subject).then(function (response) {
      $scope.courses = response.data.data;
    })
  }

  $scope.test = "aaaaaaa";


  $scope.openCourseModal = function (course) {
    var modalInstance = $modal.open({
    	templateUrl: '../templates/courseModal.html',
    	controller: 'courseModalCtrl',

       resolve: {
         course: function () {
          return course;
        }
      }
    });
  }
});