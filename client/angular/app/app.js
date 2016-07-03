/**
* app Module
*
* Description
*/
(function () {
  'use strict';

  angular
    .module('TicTacToe', ['logic'])
    .controller('BoardController', BoardController);

  BoardController.$inject = ['WinnerService'];

  function BoardController(WinnerService) {
    var vm = this;
    vm.squares = ['', '', '', '', '', '', '', '', ''];
    vm.next = 'X';
    vm.handleTurn = function handleTurn(index) {
      if (!vm.squares[index]) {
        if (vm.next === 'X') {
          vm.squares[index] = 'X';
          WinnerService.checkForWinner(vm.squares, vm.next);
          vm.next = 'O';
        } else {
          vm.squares[index] = 'O';
          WinnerService.checkForWinner(vm.squares, vm.next);
          vm.next = 'X';
        }
      } else {
        alert('This position has been used!');
      }
    };
    vm.resetGrid = function resetGrid() {
      vm.squares = ['', '', '', '', '', '', '', '', ''];
    };
  }
})();
