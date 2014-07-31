'use strict';

angular.module('tihldeApp')
  .controller('PostCtrl', function ($scope, $routeParams, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://158.38.48.30:8080/post/' + $routeParams.postID).success(function(data) {
    	$scope.post = data;
    });

 
  });
