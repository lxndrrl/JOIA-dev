$(document).ready(function() {
  $('.best-offers__wrap__more').on('click', function() {
    $(this).toggleClass('is-active');
    $('.best-offers__wrap__in').slideToggle(400);
  });
});