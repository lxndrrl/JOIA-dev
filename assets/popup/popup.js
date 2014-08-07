
$('#yes').on('click', function () {
	$.cookie('CLickYesClass', 'click_yes');
	$('.blur-wrap').fadeOut('400');
});

$(document).ready(function () {

	// Нажатие на кнопку нет
	$('.popup__content__no #no').on('click', function () {
		window.location = $(this).val();
	});

	// Для начала вытащим popup
	$('body > .blur').addClass('blur_-disallow');
	$('#popup').css('display', 'block');

	// Не показывать попап если пользователь нажал на кнопку ДА
	if ($.cookie('CLickYesClass') === 'click_yes') {
		$('.blur-wrap').css('display', 'none');
		$('#popup').css('display', 'none');
		$('#popup__content').css('display', 'none');
		$('#popup').siblings('body > .blur').addClass('blur_-allow');
		$('#popup').siblings('body > .blur').removeClass('blur_-disallow');
	}
	else {

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


		/*/Оверлей ПопАпа и события на кнопки*/
	}
});