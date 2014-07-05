$(document).ready(function() {
  // Выпадающий список покупок
  $('div.order-list').on('click', function () {
    $('.choosed_list_content').slideToggle(400);
  });
});