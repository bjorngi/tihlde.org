'use strict';

angular.module('tihldeApp')
  .controller('MainCtrl', function ($scope, $rootScope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $rootScope.tihlderest = 'http://127.0.0.1:8080';

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
 