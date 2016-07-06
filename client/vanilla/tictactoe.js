// Tic-tac-toe application in vanilla javascript

var resetGrid = function () {
  alert('clicked');
};

var divs = [];

$(document).ready(function () {
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
});
