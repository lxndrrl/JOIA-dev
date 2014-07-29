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
});