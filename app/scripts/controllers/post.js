'use strict';

angular.module('tihldeApp')
  .controller('PostCtrl', function ($scope, $rootScope, $routeParams, $http, $route, ngDialog) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.edited = false;
    $scope.isEdit = false;
    $scope.newPost;

    $http.get($rootScope.tihlderest + '/post/' + $routeParams.postID).success(function(data) {
      $scope.post = data;
    });

    $scope.edit = function() {
      $scope.isEdit = !$scope.isEdit;
      if(!$scope.edited) {
        $scope.newPost = angular.copy($scope.post);
        $scope.edited = true;
      }
    };

    $scope.preview = function() {
      $scope.post = $scope.newPost;
      $scope.isEdit = false;
    };

    $scope.abort = function() {
      $route.reload();
    };

    $scope.submit = function() {

      $http.put($rootScope.tihlderest + '/post/' + $routeParams.postID, $scope.newPost).success(
        function() {
          $scope.isEdit = false;
          $route.reload();
        });
    };

    $scope.openImage = function() {
      $scope.currentImage =
      ngDialog.open({ template: 'views/dialogs/image.html'});
    }

  });
