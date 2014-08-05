'use strict';

angular
  .module('tihldeApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'akoenig.deckgrid',
    'angular-momentjs'
  ])
  .config(function($momentProvider){
    $momentProvider
      .asyncLoading(false)
      .scriptUrl('//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/post/:postID', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl'
      })
      .when('/movie/:movieID', {
        templateUrl: 'views/movie.html',
        controller: 'MovieCtrl'
      })
      .when('/movie', {
        templateUrl: 'views/movie_list.html',
        controller: 'MovieCtrl'
      })
      .when('/pictures', {
        templateUrl: 'views/pictures.html',
        controller: 'PicturesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

