(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
 

  // owlCarousel
  $(".social_slide").owlCarousel({
    loop: true,
    margin: 20,
    items: 11,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>'
    ],
    autoplay: true,
    nav: false,
    dots: true,
    center: true,
    responsive: {
      0: {
        items: 5
      },
      767: {
        items: 7
      },
      992: {
        items: 11
      }
    }
  });
 
  
 
})(jQuery);
