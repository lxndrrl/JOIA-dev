$(document).ready(function() {
  $('.is-checkbox').on('click', function() {
    $(this).parents('ul').find('.is-active').removeClass('is-active');
    $(this).toggleClass('is-active');
  });
});