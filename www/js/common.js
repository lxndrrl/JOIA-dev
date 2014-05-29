head.ready(function() {
	$('.wine').click(function(event) {
		$(this).toggleClass('is-selected');
	});
	$(window).scroll(function(){
		t = $(this).scrollTop();
		b = $('body');
		if(t>100){
			b.addClass('is-nottop');
		}
		else{
			b.removeClass('is-nottop')
		}
	});

	$('.search__switcher a').click(function(event) {
		$('.search__switcher a').removeClass('is-active');
		$(this).addClass('is-active');
		return false;
	});

	$('.superslider__playpause').click(function(event) {
		$('.superslider').cycle('stop');
	});

<<<<<<< HEAD
	$('.search').search();

	$('.expander').click(function() {
		$(this).closest('.expandable__in').toggleClass('expanded').find('.expandable').slideToggle();
	});

	/*mobile menu*/
=======
    $('.search').search();

>>>>>>> FETCH_HEAD
	$(document).ready(function() {
		$("[data-toggle]").click(function() {
			var toggle_el = $(this).data("toggle");
			$(toggle_el).toggleClass("open-sidebar");
		});

	});

	$(".swipe-area").swipe({
		swipeStatus:function(event, phase, direction, distance, duration, fingers)
		{
			if (phase=="move" && direction =="right") {
<<<<<<< HEAD
				$(".container").addClass("open-sidebar");
				return false;
			}
			if (phase=="move" && direction =="left") {
				$(".container").removeClass("open-sidebar");
=======
				$(".top").addClass("open-nav-mob");
				return false;
			}
			if (phase=="move" && direction =="left") {
				$(".top").removeClass("open-nav-mob");
>>>>>>> FETCH_HEAD
				return false;
			}
		}
	});
<<<<<<< HEAD
	/*/mobile menu*/
});
=======
});
>>>>>>> FETCH_HEAD
