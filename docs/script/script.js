

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

//Implementation of a function for checking the input of only digits
function check_number(){
    if((event.keyCode < 48)||(event.keyCode > 57)) event.returnValue=false;

}

//Implementation of a function for jumping to the second part of the phone number
function nextJump(x) {
	if (x.value.length == 3) {
		
		do {
			x = x.nextSibling;
		}
		while (x && !(/text/.test(x.type)));
		if (x && /text/.test(x.type)) {
			$(x).select();
		}
	}
}