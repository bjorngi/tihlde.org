'use strict';

angular.module('tihldeApp')
    .controller('MainCtrl', function ($scope, $rootScope, $http) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $rootScope.tihlderest = "http://158.38.48.30:8080";

        $http.get($rootScope.tihlderest + '/post').success(function(data) {
            $scope.posts = data;
        });

        $http.get($rootScope.tihlderest + '/firm').success(function(data) {
            $scope.firms = data;
        });
    });
 