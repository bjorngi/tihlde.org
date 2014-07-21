'use strict';

angular.module('tihldeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'angularMoment'
    ];

    $http.get('http://158.38.48.30:8080/post').success(function(data) {
    	$scope.posts = data;
    });

    $http.get('http://158.38.48.30:8080/firm').success(function(data) {
    	$scope.firms = data;
    });
  });
 