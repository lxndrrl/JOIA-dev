$(document).ready(function () {
	$('.wine .wine__check__area').on('click', function() {

		// Выделение элемента в каталоге при нажатии
		$(this).parents('.wine').toggleClass('is-selected'); //Алексей попросил закомментить

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
	$('.wine__info, .wine__pic, .wine__text').on('click', function () {
		$(this).siblings('.wine__full__info').slideToggle(400);
	}); //Алексей попросил закомментить

	// Увеличение блока в плиточном каталоге
	$('.wine__square .wine__info').on('click', function () {
		$(this).parents('.wine').toggleClass('wine__square__big');
	}); //Алексей попросил закомментить


  // Появление полей при нажатии на элементы КП
  $('.radios_section .radios_section_click .radio, .radios_section .radios_section_click label').on('click', function() {
  	if ($(this).prop('checked') === true) {
  		$(this).parents('.radios_section_row').after('<div class="radios_section_field field clearfix special_conditions_text"><input type="text" value="" class="text_field"></div>');
  	} else {
  		$(this).parents('.radios_section_row').next('.field').remove();
  	}

  	$('.radios_section_field .text_field').bind('hastext', function() {
  		$(this).addClass('is-focus');
  	});

  	$('.radios_section_field .text_field').bind('notext', function() {
  		$(this).removeClass('is-focus');
  	});

  });

  $('.radios_section1 > div:nth-child(1)').on('click', function() {
  	$('.radios_section_field').css('display', 'none');
  });





});



