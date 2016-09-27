;(function($){
  $.config = {
    autoInit: true //no recommend
  }
  
  $(".swiper-container").swiper({
    pagination: '.swiper-pagination',
    paginationClickable: true,
    height:'auto',
    // loop : true,
    autoplay: 1000,//5000
    effect : 'fade',
    fade: {
      crossFade: false,
    }
  })
  var i = 0;
  $('.icon-menu').on('click', function() {
    // alert(1)
    i++;
    
    if (i % 2 == 1) {
    // // $('.page-current').hide()
      $('#router2').css({'z-index':2005})
      //addClass('animated slideInDown');
      //.css({'z-index':2005});
      
      $('#router2').slideDown(200)
    } else {
      $('#router2').slideUp(200)
      $('#router2').css({'z-index':2})
    }
   
     $('#router2').on('touch', function() {
        $($(this)).hide()
      })
    })
})(Zepto)