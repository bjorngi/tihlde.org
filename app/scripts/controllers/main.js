'use strict';

angular.module('tihldeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('data/posts.json').success(function(data) {
    	$scope.posts = data;
    });

    $http.get('data/firm.json').success(function(data) {
    	$scope.firms = data;
    });
  });
 