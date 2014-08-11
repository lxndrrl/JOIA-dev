$(document).ready(function() {
  // Открыть форму входа
  $('.login').click(function(){
    $('.signin-form').removeClass('hidden').removeClass('is-hidden').addClass('as-table');
    $('html').css('overflow', 'hidden');
    // $('.blur').addClass('blur_-popup-launched');
  //  $('.popup__content').addClass('hidden');
    // $('.popup').fadeIn(1000);
  });
  /// Открыть форму входа

  // Закрыть форму входа

  $('.signin-form__btn-close').on('click', function() {
    $('html').css('overflow', 'auto');
    $('.signin-form').addClass('is-hidden');
    setTimeout(function () {
      $('.signin-form').addClass('hidden');
    }, 500);
  });


});