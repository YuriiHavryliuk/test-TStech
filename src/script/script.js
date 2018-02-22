

(function ($, window, document) {

    //Implementation of tabs
    $(document).ready(function() {
        $('.js-tab').easyResponsiveTabs({
            type: 'vertical',
            tabidentify: 'hor_1',
        });
    });

//Implementation of animation for collasible tabs (desctop)
    $('.tab__title').click(function() {
        if(!$(this).hasClass('resp-tab-active')){
            $('.resp-tab-content').animate({
                opacity: 0,   
              }, 500);  
              $('.resp-tab-content').animate({
                opacity: 1,         
              }, 500); 
        }
    
    });

//Implementation of scrolling
    $(".js-scroll").on("click", function (e) {
      e.preventDefault();
      var id  = $(this).attr('href'),   
          top = $(id).offset().top;
    
      $('body,html').animate({scrollTop: top}, 1000);
    });
  
}(window.jQuery, window, document));

