$(document).ready(function() {
  $(".fancybox-button").fancybox({
    prevEffect    : 'none',
    nextEffect    : 'none',
    closeBtn    : false,
    padding: 0,
    helpers   : {
     overlay: {
       locked: false
     },
     title : { type : 'inside' },
     buttons : {}
   }
 });

// Плавная прокрутка при клике на вине


$("a.house__slider__bottles__link").click(function () {
  var elementClick = $(this).attr("href")
  var destination = $(elementClick).offset().top - 70;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
  return false;
});



});