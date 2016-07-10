var current = 'X';
var divs = [];
var board = document.querySelector('#board');

// show current
document.querySelector('.current').innerHTML = current;

// define function to handle turns
function handleTurn() {
  this.innerHTML = current;
  if (current === 'X') {
    current = 'O';
  } else {
    current = 'X';
  }
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
