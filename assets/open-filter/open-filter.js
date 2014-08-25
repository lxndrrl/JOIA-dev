
$(document).ready(function() {

  // Появление и исчезание блока с фильтром при нажатии на кнопку "поиск вина"
  $('.open-filter__link').on('click', function() {
    $(this).fadeOut('400');
    $('.superslider').addClass('is-filter');
    $('.top .search').fadeIn(400);

    $('.search__close').on('click', function() {
      $('.open-filter__link').fadeIn(400);
      $('.superslider').removeClass('is-filter');
      $('.top .search').fadeOut('fast');
    });
  });
});