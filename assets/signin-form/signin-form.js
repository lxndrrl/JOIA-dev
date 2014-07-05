// Открыть форму входа
$('.login').click(function(){
	$('.signin-form').removeClass('hidden').addClass('as-table');
	$('.blur').addClass('blur_-popup-launched');
	$('.popup').fadeIn(1000);
});
/// Открыть форму входа

// Закрыть форму входа
$('.signin-form__btn-close').click(function(){
	$('.signin-form').addClass('hidden').removeClass('as-table');
	$('.blur').removeClass('blur_-popup-launched');
	$('.popup').fadeOut(1000);
});
/// Закрыть форму входа