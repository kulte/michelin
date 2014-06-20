'use strict';

angular.module('michelinApp')
  .controller('MainCtrl', function ($scope, $http) {
    var request = $http.get('http://localhost:3000/api/restaurants');
    request.success(function (data) {
      $scope.restaurants = data.restaurants;
    })
  });
