var current = 'X';
var divs = [];
var board = document.querySelector('#board');

// show current
document.querySelector('.current').innerHTML = current;

// define function for game logic
var checkForWinner = function (array, test) {
  // vertical check
  if (array[0].innerHTML === test && array[1].innerHTML === test && array[2].innerHTML === test ||
    array[3].innerHTML === test && array[4].innerHTML === test && array[5].innerHTML === test ||
    array[6].innerHTML === test && array[7].innerHTML === test && array[8].innerHTML === test
  ) {
    alert('Player ' + test + ' has won!');
    return 'Player ' + test + ' has won!';
  }
  // horizontal check
  if (array[0].innerHTML === test && array[3].innerHTML === test && array[6].innerHTML === test ||
    array[1].innerHTML === test && array[4].innerHTML === test && array[7].innerHTML === test ||
    array[2].innerHTML === test && array[5].innerHTML === test && array[8].innerHTML === test
  ) {
    alert('Player ' + test + ' has won!');
    return 'Player ' + test + ' has won!';
  }
  // cross check
  if (array[0].innerHTML === test && array[4].innerHTML === test && array[8].innerHTML === test ||
    array[2].innerHTML === test && array[4].innerHTML === test && array[6].innerHTML === test
  ) {
    alert('Player ' + test + ' has won!');
    return 'Player ' + test + ' has won!';
  }
};

// define function to handle turns
function handleTurn() {
  this.innerHTML = current;
  checkForWinner(divs, current);
  if (current === 'X') {
    current = 'O';
  } else {
    current = 'X';
  }
  document.querySelector('.current').innerHTML = current;
}

// create squares
for (var i = 0; i < 9; i++) {
  var div = document.createElement('div');
  div.className = 'square';
  div.id = 'square' + i;
  divs.push(div);
  div.addEventListener('click', handleTurn);
  board.appendChild(div);
}
