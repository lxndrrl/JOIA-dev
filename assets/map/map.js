// Настройки hover интерактивной карты

$(function () {
    $('.mapHiLight').maphilight({ stroke: false, fillColor: 'f29500', fillOpacity: 1 });
});

// Плавная прокрутка при клике на ссылку

$(document).ready(function() {
    $(".map area").click(function () {
        // var elementClick = $(this).attr("href");
        var destination = $('#filial').offset().top - 100;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
});