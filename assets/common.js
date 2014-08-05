// @codekit-append "catalog/catalog.js"
// @codekit-append "header/__in/__right/order-list/order-list.js"
// @codekit-append "signin-form/signin-form.js"
// @codekit-append "fancybox/fancybox.js"
// @codekit-append "best-offers/best-offers.js"
// @codekit-append "entry/entry.js"
// @codekit-append "open-filter/open-filter.js"
// @codekit-append "is-radio/is-radio.js"
// @codekit-append "is-checkbox/is-checkbox.js"
// @codekit-append "baners/baners.js"
// @codekit-append "eventslider/item/item.js"
// @codekit-append "house/house.js"
// @codekit-append "map/map.js"

	$(window).scroll(function () {
		t = $(this).scrollTop();
		b = $('body');
		if (t > 100) {
			b.addClass('is-nottop');
		} else {
			b.removeClass('is-nottop');
		}
	});


$(document).ready(function() {

	$('.search__switcher a').click(function () {
		$('.search__switcher a').removeClass('is-active');
		$(this).addClass('is-active');
		return false;
	});

	$('.superslider__playpause').click(function () {
		$('.superslider').cycle('stop');
	});
});

/*расширяемый блок*/
$('.expander').click(function () {
	$(this).closest('.expandable__in').toggleClass('expanded').find('.expandable').slideToggle();
});
/*/расширяемый блок*/

/*блок на всю высоту вьюпорта*/
$(document).ready(function ($) {
$(window).resize(function () {
	$('.top').height($(window).height());
});
$('.top').height($(window).height());
});
/*/блок на всю высоту вьюпорта*/

//---

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
