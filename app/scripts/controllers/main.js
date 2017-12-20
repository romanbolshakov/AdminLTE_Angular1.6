'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminApp
 */
angular.module('zetAdminApp')
  .controller('MainCtrl', function ($scope) {
    console.log('MainCtrl invoked');
    $scope.pageTitle = 'Custom header page';
    console.log($scope);
  });
