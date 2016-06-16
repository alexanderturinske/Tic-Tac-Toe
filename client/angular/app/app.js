/**
* app Module
*
* Description
*/
var app = angular.module('app', [
  'ui-router',
])

.config(function ($stateProvider, $urlRouterProvider) {
  // setup misc. routing
  $urlRouterProvider.otherwise();

  $stateProvider
    // basic view
    .state('tictactoe', {
      url: '/angular',
    });
});
