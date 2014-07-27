$(document).ready(function () {
	$('.wine .wine__check__area').on('click', function() {

		// Выделение элемента в каталоге при нажатии
		/*$(this).parents('.wine').toggleClass('is-selected');*/ //Алексей попросил закомментить

		// Появление списка при выборе хотя бы одного вина
		if ($('.wine').hasClass('is-selected')) {
			$('.choosed_list_container').fadeIn(400);
			$('.choosed_list_container').addClass('show');
		}
		else {
			$('.choosed_list_container').fadeOut('400');
			$('.choosed_list_container').removeClass('show');
		}
	});

	// Выпадающее полное описание вина в горизонтальном каталоге
	$('.wine .wine__info').on('click', function () {
		$(this).siblings('.wine__full__info').slideToggle(400);
	});

	// Увеличение блока в плиточном каталоге
	$('.wine__square .wine__info').on('click', function () {
		$(this).parents('.wine').toggleClass('wine__square__big');
	});


});