// Tic-tac-toe application in vanilla javascript
var current = 'X';
var divs = [];
var resetGrid = function () {
  divs.forEach(function (el) {
    el.text('');
  });
};

$(document).ready(function () {
  $('.current').text(current);

  // place divs with the right class and id
  $('.button').on('click', resetGrid);
  for (var i = 0; i < 9; i++) {
    var div = $('<div/>', {
      id: 'square' + i,
      class: 'square',
      text: '',
    });
    divs.push(div);
    div.appendTo('#board');
  }

  // add on('click') events to divs
  divs.forEach(function (e) {
    e.on('click', function () {
      var id = $(this).attr('id');
      $('#' + id).text(current);
      checkForWinner(divs, current);
      if (current === 'X') {
        current = 'O';
      } else {
        current = 'X';
      }
      $('.current').text(current);
    });
  });

});

var checkForWinner = function checkForWinner(array, test) {
  // vertical check
  if (array[0].text() === test && array[1].text() === test && array[2].text() === test ||
    array[3].text() === test && array[4].text() === test && array[5].text() === test ||
    array[6].text() === test && array[7].text() === test && array[8].text() === test
  ) {
    alert('Player ' + test + ' has won!');
    return 'Player ' + test + ' has won!';
  }
  // horizontal check
  if (array[0].text() === test && array[3].text() === test && array[6].text() === test ||
    array[1].text() === test && array[4].text() === test && array[7].text() === test ||
    array[2].text() === test && array[5].text() === test && array[8].text() === test
  ) {
    alert('Player ' + test + ' has won!');
    return 'Player ' + test + ' has won!';
  }
  // cross check
  if (array[0].text() === test && array[4].text() === test && array[8].text() === test ||
    array[2].text() === test && array[4].text() === test && array[6].text() === test
  ) {
    alert('Player ' + test + ' has won!');
    return 'Player ' + test + ' has won!';
  }
};
