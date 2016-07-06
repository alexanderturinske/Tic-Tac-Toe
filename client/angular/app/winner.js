(function () {
  'use strict';

  angular
   .module('logic', [])
   .factory('WinnerService', WinnerService);

  function WinnerService() {
    var WinnerService = {};
    WinnerService.checkForWinner = function checkForWinner(array, test) {
      // vertical check
      if (array[0] === test && array[1] === test && array[2] === test ||
        array[3] === test && array[4] === test && array[5] === test ||
        array[6] === test && array[7] === test && array[8] === test
      ) {
        alert('Player ' + test + ' has won!');
        return 'Player ' + test + ' has won!';
      }
      // horizontal check
      if (array[0] === test && array[3] === test && array[6] === test ||
        array[1] === test && array[4] === test && array[7] === test ||
        array[2] === test && array[5] === test && array[8] === test
      ) {
        alert('Player ' + test + ' has won!');
        return 'Player ' + test + ' has won!';
      }
      // cross check
      if (array[0] === test && array[4] === test && array[8] === test ||
        array[2] === test && array[4] === test && array[6] === test
      ) {
        alert('Player ' + test + ' has won!');
        return 'Player ' + test + ' has won!';
      }
    };
    return WinnerService;
  }
})();
