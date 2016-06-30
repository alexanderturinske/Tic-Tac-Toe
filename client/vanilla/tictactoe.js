// Tic-tac-toe application in vanilla javascript

var resetGrid = function () {
  alert('clicked');
};

$(document).ready(function () {
  $('.button').on('click', resetGrid);
  for (var i = 0; i < 9; i++) {
    $('#board').append('<div class="square" id="square">yis</div>');
  }
});
