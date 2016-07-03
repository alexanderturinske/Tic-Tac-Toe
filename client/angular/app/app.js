/**
* app Module
*
* Description
*/
(function () {
  'use strict';

  angular
    .module('TicTacToe', [])
    .controller('BoardController', BoardController);

  function BoardController() {
    var vm = this;
    vm.squares = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
      .map(function (ele) {
        return 'yis';
      });
  }
})();
