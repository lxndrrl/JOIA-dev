// Открыть форму входа
$('.login').click(function(){
	$('.signin-form').removeClass('hidden');
	$('.blur').addClass('blur_-popup-launched');
});
/// Открыть форму входа

// Закрыть форму входа
$('.signin-form__btn-close').click(function(){
	$('.signin-form').addClass('hidden');
	$('.blur').removeClass('blur_-popup-launched');
});
/// Закрыть форму входа