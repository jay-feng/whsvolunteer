$(function() {
  $('.check').show();

  $('#checkbox0').on('click', function() {
    //loop through all boxes, hiding all with a redpin
    if ($('#check0').is(':visible')) {
      $(".box").each(function(){
        $(this).hide();
      });
    }
    //loop through all boxes, showing all with a redpin
    if ($('#check0').is(':hidden')) {
      $(".box").each(function(){
        $(this).show();
      });
    }
    if($('#check1').is(':visible') && $('#check2').is(':visible')
    && $('#check3').is(':visible') && $('#check4').is(':visible') && $('#check5').is(':visible')) {
      $('.check').hide(150);
    } else {
      $('.check').show(150);
    }
  });

  $('#checkbox1').on('click', function() {
    //loop through all boxes, hiding all with a redpin
    if ($('#check1').is(':visible')) {
      $(".box").each(function(){
        if ($(this).hasClass('redpin')) {
          $(this).hide();
        }
      });
    }
    //loop through all boxes, showing all with a redpin
    if ($('#check1').is(':hidden')) {
      $(".box").each(function(){
        if ($(this).hasClass('redpin')) {
          $(this).show();
        }
      });
    }
    if ($('#check1').is(':visible') && $('#check2').is(':visible')
    && $('#check3').is(':visible') && $('#check4').is(':visible') && $('#check5').is(':visible')) {
      $('#check0').hide(150);
    } else if ($('#check1').is(':hidden') && $('#check2').is(':visible')
    && $('#check3').is(':visible') && $('#check4').is(':visible') && $('#check5').is(':visible')){
      $('#check0').show(150);
    }
    $('#check1').fadeToggle(150);
  });

  $('#checkbox2').on('click', function() {
    //loop through all boxes, hiding all with a redpin
    if ($('#check2').is(':visible')) {
      $(".box").each(function(){
        if ($(this).hasClass('orangepin')) {
          $(this).hide();
        }
      });
    }
    //loop through all boxes, showing all with a redpin
    if ($('#check2').is(':hidden')) {
      $(".box").each(function(){
        if ($(this).hasClass('orangepin')) {
          $(this).show();
        }
      });
    }
    if ($('#check1').is(':visible') && $('#check2').is(':visible')
    && $('#check3').is(':visible') && $('#check4').is(':visible') && $('#check5').is(':visible')) {
      $('#check0').hide(150);
    } else if ($('#check1').is(':visible') && $('#check2').is(':hidden')
    && $('#check3').is(':visible') && $('#check4').is(':visible') && $('#check5').is(':visible')){
      $('#check0').show(150);
    }
    $('#check2').fadeToggle(150);
  });

  $('#checkbox3').on('click', function() {
    //loop through all boxes, hiding all with a redpin
    if ($('#check3').is(':visible')) {
      $(".box").each(function(){
        if ($(this).hasClass('greenpin')) {
          $(this).hide();
        }
      });
    }
    //loop through all boxes, showing all with a redpin
    if ($('#check3').is(':hidden')) {
      $(".box").each(function(){
        if ($(this).hasClass('greenpin')) {
          $(this).show();
        }
      });
    }
    if ($('#check1').is(':visible') && $('#check2').is(':visible')
    && $('#check3').is(':visible') && $('#check4').is(':visible') && $('#check5').is(':visible')) {
      $('#check0').hide(150);
    } else if ($('#check1').is(':visible') && $('#check2').is(':visible')
    && $('#check3').is(':hidden') && $('#check4').is(':visible') && $('#check5').is(':visible')){
      $('#check0').show(150);
    }
    $('#check3').fadeToggle(150);
  });

  $('#checkbox4').on('click', function() {
    //loop through all boxes, hiding all with a redpin
    if ($('#check4').is(':visible')) {
      $(".box").each(function(){
        if ($(this).hasClass('bluepin')) {
          $(this).hide();
        }
      });
    }
    //loop through all boxes, showing all with a redpin
    if ($('#check4').is(':hidden')) {
      $(".box").each(function(){
        if ($(this).hasClass('bluepin')) {
          $(this).show();
        }
      });
    }
    if ($('#check1').is(':visible') && $('#check2').is(':visible')
    && $('#check3').is(':visible') && $('#check4').is(':visible') && $('#check5').is(':visible')) {
      $('#check0').hide(150);
    } else if ($('#check1').is(':visible') && $('#check2').is(':visible')
    && $('#check3').is(':visible') && $('#check4').is(':hidden') && $('#check5').is(':visible')){
      $('#check0').show(150);
    }
    $('#check4').fadeToggle(150);
  });

  $('#checkbox5').on('click', function() {
    //loop through all boxes, hiding all with a redpin
    if ($('#check5').is(':visible')) {
      $(".box").each(function(){
        if ($(this).hasClass('purplepin')) {
          $(this).hide(0);
        }
      });
    }
    //loop through all boxes, showing all with a redpin
    if ($('#check5').is(':hidden')) {
      $(".box").each(function(){
        if ($(this).hasClass('purplepin')) {
          $(this).show(0);
        }
      });
    }
    if ($('#check1').is(':visible') && $('#check2').is(':visible')
    && $('#check3').is(':visible') && $('#check4').is(':visible') && $('#check5').is(':visible')) {
      $('#check0').hide(150);
    } else if ($('#check1').is(':visible') && $('#check2').is(':visible')
    && $('#check3').is(':visible') && $('#check4').is(':visible') && $('#check5').is(':hidden')){
      $('#check0').show(150);
    }
    $('#check5').fadeToggle(150);
  });
});
