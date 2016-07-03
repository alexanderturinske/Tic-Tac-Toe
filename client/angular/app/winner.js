(function () {
  'use strict';

  angular
   .module('logic', [])
    .factory('WinnerService', WinnerService);

  function WinnerService() {
    var vm = this;
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
  }
})();
