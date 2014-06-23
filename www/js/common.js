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

/*блок на всю высоту вьюпорта*/
$(document).ready(function ($) {
$(window).resize(function () {
	$('.w-900 .superslider__slide, .lt-900 .superslider__slide, .mobile .w-1280 .superslider__slide, .mobile .lt-1280 .superslider__slide').height($(window).height());
});
$('.w-900 .superslider__slide, .lt-900 .superslider__slide, .mobile .w-1280 .superslider__slide, .mobile .lt-1280 .superslider__slide').height($(window).height());
});
/*/блок на всю высоту вьюпорта*/

//---

$('.popup__content').click(function (e) {
	e.stopPropagation();
});
var sbula = $(".popup label");
sbula.click(function () {
	sbula.removeClass("active").not(sbula).add(this).addClass("active");
});
$('.popup__content__yes label').click(function () {
	$('.popup').fadeOut(1000);
	$('.blur').addClass('blur-allow');
});