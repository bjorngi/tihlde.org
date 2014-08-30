'use strict';

angular.module('tihldeApp')
  .controller('MainCtrl', function ($scope, $rootScope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.tihlderest = 'http://158.38.48.29:8080';
    $scope.reverse = true;

    var getPartial = function(url) {
      $http.get($rootScope.tihlderest + url).success(function(data) {
        $scope.page.push(data);
      });
    };

    $http.get($rootScope.tihlderest + '/frontpage').success(function(data) {
      $scope.page = [];
      for(var url in data) {
        getPartial(data[url].url);
      }
    });
  });
 