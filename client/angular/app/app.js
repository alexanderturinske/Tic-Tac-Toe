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
    vm.squares = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    vm.next = true;
    vm.move = function move(index) {
      if (vm.next) {
        vm.squares[index] = 'X';
      } else {
        vm.squares[index] = 'O';
      }
      vm.next = !vm.next;
    };
  }
})();
