'use strict';

angular.module('tihldeApp')
  .controller('MovieCtrl', function ($scope, $http, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.api = 'http://158.38.48.30:8080';

    $scope.getMovie = function() {
      $http.get($scope.api + '/movie/' + $routeParams.movieID).success(function(data) {
        $scope.movie = data;
      });
    }

    $scope.getAllMovies = function() {
      $http.get($scope.api + '/movie').success(function(data) {
        $scope.movies = data;
      });
    }
  });
