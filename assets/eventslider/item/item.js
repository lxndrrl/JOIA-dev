$(document).ready(function() {
  $(".fancybox").fancybox({
    width : 560,
    helpers : {
      overlay : {
        css : {
          'background' : 'rgba(255, 255, 255, .9)'
        }
      }
    }
  }); // fancybox
  $('.fancy-close').on('click', function() {
     $.fancybox.close();
  });
});