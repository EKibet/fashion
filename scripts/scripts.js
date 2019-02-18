$(window).on('scroll',function(){
    if($(window).scrollTop()){
      $('nav').addClass('black');
    }else {
      $('nav').removeClass('black');
    }
    $('#item').click(function() {
      $(".top-right").toggle()
      $('#item').css({
        'border':'4px solid #cc9966'
    });
    });
  })
