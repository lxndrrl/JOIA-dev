$(document).ready(function () {
	// Выделение элемента в каталоге при нажатии
	$('.wine .wine__check__area').click(function (event) {
		$(this).parents('.wine').toggleClass('is-selected');
	});

	// Выпадающий список покупок
	$('div.order-list').on('click', function () {
		$('.choosed_list_content').slideToggle(400);
	});

	// Выпадающее полное описание вина в горизонтальном каталоге
	$('.wine .wine__info').on('click', function () {
		$(this).siblings('.wine__full__info').slideToggle(400);
	});

	// Увеличение блока в плиточном каталоге
	$('.wine__square .wine__info').on('click', function () {
		$(this).parents('.wine').toggleClass('wine__square__big')
	});

});
