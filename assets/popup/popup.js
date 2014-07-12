/*Оверлей ПопАпа и события на кнопки*/
$('.popup__content').click(function (e) {
	e.stopPropagation();
});
var sbula = $(".popup label");
sbula.click(function () {
	sbula.removeClass("active").not(sbula).add(this).addClass("active");
});
$('.popup__content__yes label').click(function () {
	$('.popup').fadeOut(1000);
	$('.blur').addClass('blur_-allow');
	$('.popup__content').fadeOut(1000);
});

$('.popup__content__no #no').on('click', function() {
	window.location = $(this).val();
});
/*/Оверлей ПопАпа и события на кнопки*/


// Не показывать попап если пользователь нажал на кнопку ДА
	$('#yes').on('click', function() {
	$.cookie('CLickYesClass', 'click_yes');
	});

	$(document).ready(function() {
		if ($.cookie('CLickYesClass') === 'click_yes') {
			$('#popup').css('display', 'none');
		}
	});