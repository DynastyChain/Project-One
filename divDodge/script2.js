$(document).ready(function () {
  var counter = 0;
  $('#reset').hide();
  $('aside').hide();
  $('div').on('mouseover', function() {
    $('div').css('display', 'none');
    $('#nextLvl').css('display', 'none');
    $('#reset').show();
  });
  $('#reset').on('click', function() {
    $('div').css('display', 'block');
    $('#nextLvl').css('display', 'block');
  });
  $('#help').on('click', function() {
    counter++;
    $('aside').show();
    if (counter % 2 ===0) {
      $('aside').hide();
    }
  });
  $('aside').on('click', function() {
    $('aside').hide();
  });
});
