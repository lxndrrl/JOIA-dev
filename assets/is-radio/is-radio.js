$(document).ready(function() {
  $('.is-radio').on('click', function() {
    $(this).parents('ul').find('.is-active').removeClass('is-active');
    $(this).toggleClass('is-active');
  });
});