'use strict';

/**
 * @ngdoc overview
 * @name adminApp
 * @description
 * # adminApp
 *
 * Main module of the application.
 */
angular
  .module('zetAdminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    //'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main");

    $stateProvider
      .state('main', {
        url: "/main",
        templateUrl: "views/main.html",
        controller: 'MainCtrl',
        data: { pageTitle: 'Example view' }
      })
      .state('dashboard', {
        url: "/dashboard",
        controller: "DashboardCtrl",
        templateUrl: "views/dashboard/index.html",
      })
  });
