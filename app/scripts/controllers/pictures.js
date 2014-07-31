'use strict';

angular.module('tihldeApp')
  .controller('PicturesCtrl', function ($scope, $routeParams, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('https://api.flickr.com/services/rest/?method=flickr.photosets.getList&api_key=**API_KEY**&user_id=62297155%40N07&format=json&nojsoncallback=1')
    .success(function(data) {
      $scope.albums = data.photosets.photoset;
    });
  });
