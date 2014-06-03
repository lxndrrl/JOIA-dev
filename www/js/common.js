head.ready(function () {
	$('.wine').click(function (event) {
		$(this).toggleClass('is-selected');
	});
	$(window).scroll(function () {
		t = $(this).scrollTop();
		b = $('body');
		if (t > 100) {
			b.addClass('is-nottop');
		} else {
			b.removeClass('is-nottop')
		}
	});

	$('.search__switcher a').click(function (event) {
		$('.search__switcher a').removeClass('is-active');
		$(this).addClass('is-active');
		return false;
	});

	$('.superslider__playpause').click(function (event) {
		$('.superslider').cycle('stop');
	});

	$('.search').search();

	/*расширяемый блок*/
	$('.expander').click(function () {
		$(this).closest('.expandable__in').toggleClass('expanded').find('.expandable').slideToggle();
	});
	/*/расширяемый блок*/
});

$('.popup-content').click(function (e) {
	e.stopPropagation();
});
var sbula = $(".popup label");
sbula.click(function () {
	sbula.removeClass("active").not(sbula).add(this).addClass("active");
});
$('.popup .yes label').click(function () {
	$('.popup').fadeOut(1000)
});