'use strict';

angular.module('tihldeApp')
  .controller('MovieCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.api_key = 'b543b50784787acefc5bff1c35fe9a3e';
    $scope.imdb_id = 'tt0438488';

    $scope.base_url = 'https://image.tmdb.org/t/p/';
    $scope.poster_size = 'w342';
    $scope.banner_size = 'w780';


    $http.get('http://api.themoviedb.org/3/movie/' + $scope.imdb_id + '?api_key=' + $scope.api_key).success(function(data) {
      $scope.movie = data;
      $scope.movie.poster = $scope.base_url + $scope.poster_size + data.poster_path;
      $scope.movie.rating = data.vote_average * 10;
      $scope.movie.banner = $scope.base_url + $scope.banner_size + data.backdrop_path;
      $scope.movie.date = '24.07.2014 16:44';
      $scope.movie.isTrailer = true;
      $scope.movie.trailer = '7ppyPl1m8aA';
      $scope.movie.location = 'Prinsen Kino, Trondheim';
    });

  });
