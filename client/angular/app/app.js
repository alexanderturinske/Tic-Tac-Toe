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
          vm.checkForWinner(vm.next);
          vm.next = 'O';
        } else {
          vm.squares[index] = 'O';
          vm.checkForWinner(vm.next);
          vm.next = 'X';
        }
      } else {
        alert('This position has been used!');
      }
    };
    vm.checkForWinner = function checkForWinner(test) {
      // vertical check
      if (vm.squares[0] === test && vm.squares[1] === test && vm.squares[2] === test ||
        vm.squares[3] === test && vm.squares[4] === test && vm.squares[5] === test ||
        vm.squares[6] === test && vm.squares[7] === test && vm.squares[8] === test
      ) {
        alert('Player ' + test + ' has won!');
        return 'Player ' + test + ' has won!';
      }
      // horizontal check
      if (vm.squares[0] === test && vm.squares[3] === test && vm.squares[6] === test ||
        vm.squares[1] === test && vm.squares[4] === test && vm.squares[7] === test ||
        vm.squares[2] === test && vm.squares[5] === test && vm.squares[8] === test
      ) {
        alert('Player ' + test + ' has won!');
        return 'Player ' + test + ' has won!';
      }
      // cross check
      if (vm.squares[0] === test && vm.squares[4] === test && vm.squares[8] === test ||
        vm.squares[2] === test && vm.squares[4] === test && vm.squares[6] === test
      ) {
        alert('Player ' + test + ' has won!');
        return 'Player ' + test + ' has won!';
      }
    };
    vm.resetGrid = function resetGrid() {
      vm.squares = ['', '', '', '', '', '', '', '', ''];
    };
  }
})();
