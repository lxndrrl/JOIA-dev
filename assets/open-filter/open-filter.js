
$(document).ready(function() {
  $('.open-filter__link').on('click', function() {
    $(this).fadeOut('400');
    $('body').addClass('is-filter');
    $('.top .search').fadeIn(400);
    $('.header').addClass('is-shadow');
  });
});