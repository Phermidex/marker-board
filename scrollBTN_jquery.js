jQuery(document).ready(function() {
  
    var btn = $('.btn-top-scroll');
    var btnClick = $('.btn-top');
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.removeClass('hide');
        $('body').addClass('fixed-nav');
      } else {
        btn.addClass('hide');
        $('body').removeClass('fixed-nav');
      }
    });
  
    btnClick.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
  
  });
