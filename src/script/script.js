
//tabs
(function ($, window, document) {
    $(function () {
        tab.init();
      });

    $(function() {
      $('.js-tab-titles').on('click', '.tab__title:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active')
          .closest('.tab').find('.js-tab-item').removeClass('active').eq($(this).index()).addClass('active');
      });
    
    });
}(window.jQuery, window, document));