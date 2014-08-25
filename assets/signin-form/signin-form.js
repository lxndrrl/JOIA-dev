$(document).ready(function() {
  // Открыть форму входа
  $('.login').click(function(){
    $('.signin-form').removeClass('hidden').removeClass('is-hidden').addClass('as-table');
    $('html').css('overflow', 'hidden');
    setTimeout(function () {
      $('.blur').addClass('blur_-disallow').removeClass('blur_-allow');
    }, 400);
  });
  /// Открыть форму входа

  // Закрыть форму входа

  $('.signin-form__btn-close').on('click', function() {
    $('.blur').addClass('blur_-allow').removeClass('blur_-disallow');
    $('html').css('overflow', 'auto');
    $('.signin-form').addClass('is-hidden');
    setTimeout(function () {
      $('.signin-form').addClass('hidden');
    }, 500);
  });


});