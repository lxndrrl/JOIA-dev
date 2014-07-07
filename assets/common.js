// @codekit-append "catalog/catalog.js"
// @codekit-append "header/__in/__right/order-list/order-list.js"
// @codekit-append "signin-form/signin-form.js"
// @codekit-append "fancybox/fancybox.js"

head.ready(function () {
	$(window).scroll(function () {
		t = $(this).scrollTop();
		b = $('body');
		if (t > 100) {
			b.addClass('is-nottop');
		} else {
			b.removeClass('is-nottop');
		}
	});

	$('.search__switcher a').click(function () {
		$('.search__switcher a').removeClass('is-active');
		$(this).addClass('is-active');
		return false;
	});

	$('.superslider__playpause').click(function () {
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

/*Оверлей ПопАпа и событиея на кнопки*/
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
/*/Оверлей ПопАпа и событиея на кнопки*/

/*Развёртывание и свёртывание блоков*/
$('.action_show').click(function(e){
	$('.choosed_list_content').slideDown();
	e.preventDefault();
});
$('.action_collapse').click(function(e){
	$('.choosed_list_content').slideUp();
	e.preventDefault();
});
$('.about_project_content .toggle_link').click(function(e){
	$('.about_project_content .hided_content').slideToggle();
	$(this).toggleClass('arrow_rotate').children('span').toggle();
	e.preventDefault();
});
$('.appeal_content .toggle_link').click(function(e){
	$(this).parent('.appeal_content').hide();
	$('.appeal_hiden_content').slideDown();
	e.preventDefault();
});
$('.appeal_hiden_content .toggle_link').click(function(e){
	$(this).parent('.appeal_hiden_content').slideUp();
	$('.appeal_content').show();
	e.preventDefault();
});
/*/Развёртывание и свёртывание блоков*/

/*Автоматическое выравнивание высоты колонок (float блоков)*/
function setEqualHeight(columns)
{
	var tallestcolumn = 0;
	columns.each(
		function()
		{
			currentHeight = $(this).height();
			if(currentHeight > tallestcolumn)
			{
				tallestcolumn = currentHeight;
			}
		}
	);
	columns.height(tallestcolumn);
}
$(document).ready(function() {
	setEqualHeight($('.contacts__branches.branches > .contacts__border-block'));
});
$(document).ready(function() {
	setEqualHeight($('.contacts__branches.distributors > .contacts__border-block'));
});
/*/Автоматическое выравнивание высоты колонок (float блоков)*/