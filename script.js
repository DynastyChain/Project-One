
$(document).ready(function () {
  var counter = 0;
  var moves = [[null,null,null],
               [null,null,null],
               [null, null,null]];

  $('div').on('click', function() {
    if ($(this).hasClass('x') || $(this).hasClass('o')) {
    }
    else {
    if (counter % 2 === 0) {
      $('#turn').html("O's turn");
      $(this).addClass('x');

         if ($('#one').hasClass('x')) {
           moves[0][0] = "x";
         }
         if ($('#two').hasClass('x')) {
           moves[0][1] = "x";
         }
         if ($('#three').hasClass('x')) {
          moves[0][2] = "x";
        }
         if ($('#four').hasClass('x')) {
          moves[1][0] = "x";
        }
         if ($('#five').hasClass('x')) {
          moves[1][1] = "x";
        }
         if ($('#six').hasClass('x')) {
          moves[1][2] = "x";
        }
         if ($('#seven').hasClass('x')) {
          moves[2][0] = "x";
        }
         if ($('#eight').hasClass('x')) {
           moves[2][1] = "x";
         }
         if ($('#nine').hasClass('x')) {
          moves[2][2] = "x";
        }
        checkWinner();

        return counter++;
    }
    else {
      $('#turn').html("X's turn");
      $(this).addClass('o');
         if ($('#one').hasClass('o')) {
           moves[0][0] = "o";
         }
         if ($('#two').hasClass('o')) {
          moves[0][1] = "o";
        }
         if ($('#three').hasClass('o')) {
          moves[0][2] = "o";
        }
         if ($('#four').hasClass('o')) {
          moves[1][0] = "o";
        }
         if ($('#five').hasClass('o')) {
          moves[1][1] = "o";
        }
         if ($('#six').hasClass('o')) {
          moves[1][2] = "o";
        }
         if ($('#seven').hasClass('o')) {
          moves[2][0] = "o";
        }
         if ($('#eight').hasClass('o')) {
          moves[2][1] = "o";
        }
         if ($('#nine').hasClass('o')) {
          moves[2][2] = "o";
        }
      checkWinner();
      return counter++;
    }
  }
  });
function checkWinner() {
  //row win x
  if (moves[0][0] === 'x' && moves[0][1] === 'x' && moves[0][2] === 'x') {
    $('.reset').before("<h1>X'S WIN</h1>");

  }
  if (moves[1][0] === 'x' && moves[1][1] === 'x' && moves[1][2] === 'x') {
    $('.reset').before("<h1>X'S WIN</h1>");
  }
  if (moves[2][0] === 'x' && moves[2][1] === 'x' && moves[2][2] === 'x') {
    $('.reset').before("<h1>X'S WIN</h1>");
  }
 //column win x
  if (moves[0][0] === 'x' && moves[1][0] === 'x' && moves[2][0] === 'x') {
    $('.reset').before("<h1>X'S WIN</h1>");
  }
  if (moves[0][1] === 'x' && moves[1][1] === 'x' && moves[2][1] === 'x') {
    $('.reset').before("<h1>X'S WIN</h1>");
  }
  if (moves[0][2] === 'x' && moves[1][2] === 'x' && moves[2][2] === 'x') {
    $('.reset').before("<h1>X'S WIN</h1>");
  }
//diagonal win x
  if (moves[0][0] === 'x' && moves[1][1] === 'x' && moves[2][2] === 'x') {
    $('.reset').before("<h1>X'S WIN</h1>");
  }
  if (moves[0][2] === 'x' && moves[1][1] === 'x' && moves[2][0] === 'x') {
    $('.reset').before("<h1>X'S WIN</h1>");
  }
  // row win o
  if (moves[0][0] === 'o' && moves[0][1] === 'o' && moves[0][2] === 'o') {
    $('.reset').before("<h1>O'S WIN</h1>");
  }
  if (moves[1][0] === 'o' && moves[1][1] === 'o' && moves[1][2] === 'o') {
    $('.reset').before("<h1>O'S WIN</h1>");
  }
  if (moves[2][0] === 'o' && moves[2][1] === 'o' && moves[2][2] === 'o') {
    $('.reset').before("<h1>O'S WIN</h1>");
  }
  // column win o
  if (moves[0][0] === 'o' && moves[1][0] === 'o' && moves[2][0] === 'o') {
    $('.reset').before("<h1>O'S WIN</h1>");
  }
  if (moves[0][1] === 'o' && moves[1][1] === 'o' && moves[2][1] === 'o') {
    $('.reset').before("<h1>O'S WIN</h1>");
  }
  if (moves[0][2] === 'o' && moves[1][2] === 'o' && moves[2][2] === 'o') {
    $('.reset').before("<h1>O'S WIN</h1>");
  }
  // diagonal win o
  if (moves[0][0] === 'o' && moves[1][1] === 'o' && moves[2][2] === 'o') {
    $('.reset').before("<h1>O'S WIN</h1>");
  }
  if (moves[0][2] === 'o' && moves[1][1] === 'o' && moves[2][0] === 'o') {
    $('.reset').before("<h1>O'S WIN</h1>");
  }
}
$('.reset').on('click', function () {
  location.reload(true);
});
});

