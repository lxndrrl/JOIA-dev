
$(document).ready(function() {

  // Появление и исчезание блока с фильтром при нажатии на кнопку "поиск вина"
  $('.open-filter__link').on('click', function() {
    $(this).fadeOut('400');
    $('body').addClass('is-filter');
    $('.top .search').fadeIn(400);
    // $('.header').append('<span class="is-shadow"></span>');

    // $('span.is-shadow').on('click', function() {
    //   $('.open-filter__link').fadeIn(400);
    //   $('body').removeClass('is-filter');
    //   $('.top .search').fadeOut('fast');
    //   $(this).remove();
    // });
  });
});