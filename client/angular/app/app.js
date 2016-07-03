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
    vm.squares = ['', '', '', '', '', '', '', '', ''];
    vm.next = 'X';
    vm.handleTurn = function handleTurn(index) {
      if (!vm.squares[index]) {
        if (vm.next === 'X') {
          vm.squares[index] = 'X';
          vm.next = 'O';
        } else {
          vm.squares[index] = 'O';
          vm.next = 'X';
        }
      } else {
        alert('This position has been used!');
      }
    };
  }
})();
