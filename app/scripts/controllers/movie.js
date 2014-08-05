'use strict';

angular.module('tihldeApp')
  .controller('MovieCtrl', function ($scope, $rootScope, $http, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];



    $scope.getMovie = function() {
      $http.get($rootScope.tihlderest + '/movie/' + $routeParams.movieID).success(function(data) {
        $scope.movie = data;
      });
    };

    $scope.getAllMovies = function() {
      $http.get($rootScope.tihlderest + '/movie').success(function(data) {
        $scope.movies = data;
      });
    };
  });
