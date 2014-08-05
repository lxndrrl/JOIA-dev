$(document).ready(function() {
  $(".fancybox").fancybox({
    closeBtn  : false,
    width : 560,
    helpers : {
      overlay : {
        css : {
          'background' : 'rgba(255, 255, 255, .9)'
        }
      }
    }
  }); // fancybox
  $('.item__full').on('click', function() {
     $.fancybox.close();
  });
});