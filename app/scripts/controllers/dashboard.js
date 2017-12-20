'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the adminApp
 */
angular.module('zetAdminApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.pageHeader = "Dashboard";
    $scope.pageDescription = "Dashboard page";
    console.log('Dashboard');
    console.log($scope);

  });
