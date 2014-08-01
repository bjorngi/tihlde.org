'use strict';

angular.module('tihldeApp')
  .controller('PostCtrl', function ($scope, $rootScope, $routeParams, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get($rootScope.tihlderest + '/post/' + $routeParams.postID).success(function(data) {
    	$scope.post = data;
    });

 
  });
