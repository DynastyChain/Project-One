$(document).ready(function () {
   var count = 1;
   $('#helpBox').hide();
   $('#finish').hide();
   $('.refresh').hide();
   $('.reload').hide();
   $('.detonate').hide();
   $('#cannon2').hide();
   $('#cannon3').hide();
   $('#fire').hide();

   $('div').on('mouseover', function() {
    $('div').hide();
    $('img').hide();
    $('article').hide();
    $('section').hide();
    $('.refresh').show();
    $('.reload').hide();
   });
   $('#cannon1').on('click', function() {
    $('#shot1').addClass('boom1');
    $('.reload').show();
    $('#shot1').css('z-index', '5');
   });
   $('#cannon2').on('click', function() {
    $('#shot2').addClass('boom2');
    $('.reload').show();
    $('#shot2').css('z-index', '5');
  });
  $('#cannon3').on('click', function() {
    $('#shot3').addClass('boom3');
    $('.reload').hide();
    $('#shot3').css('z-index', '5');
    $('div').hide();
    $('.detonate').show();
    $('#trog').addClass('spin');
    $('article').addClass('spin');
  })
  $('.detonate').on('click', function() {
    $('#fire').show();
    $('#cannon3').hide();
    $('#fire').addClass('rumble');
    $('body').addClass('flash');
    $('#trog').hide();
    $('article').hide();
    $('#finish').show();
    $('#finish').addClass('billOne');
  })
  $('.reload').on('click', function() {
    if (count === 1) {
      $('#cannon1').hide();
      $('#cannon2').show();
      $('.reload').hide();
    }
    else if (count === 2) {
      $('#cannon2').hide();
      $('#cannon3').show();
    }
    count++;
  });
    $('.refresh').on('click', function() {
    location.reload(true);
    });
});
