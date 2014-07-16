$(document).ready(function () {
	// Выделение элемента в каталоге при нажатии
	$('.wine .wine__check__area').on('click', function() {
		$(this).parents('.wine').toggleClass('is-selected');
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