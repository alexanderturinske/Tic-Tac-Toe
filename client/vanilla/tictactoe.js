var current = 'X';
var divs = [];
var board = document.getElementsByClassName('board');

// create squares
for (var i = 0; i < 9; i++) {
  var div = document.createElement('div');
  div.className = 'squares';
  div.id = 'square' + i;
  divs.push(div);
  document.board.appendChild(div);
  // document.getElementsByClassName('ui-modal');
}

// add squares
