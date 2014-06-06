$('.action_show').click(function(e){
	$('.choosed_list_content').slideDown();
	e.preventDefault();
})
$('.action_collapse').click(function(e){
	$('.choosed_list_content').slideUp();
	e.preventDefault();
})

$('.about_project_content .toggle_link').click(function(e){
	$('.about_project_content .hided_content').slideToggle();
	$(this).toggleClass('arrow_rotate').children('span').toggle();
	e.preventDefault();
})
$('.appeal_content .toggle_link').click(function(e){
	$(this).parent('.appeal_content').hide();
	$('.appeal_hiden_content').slideDown();
	e.preventDefault();
})
$('.appeal_hiden_content .toggle_link').click(function(e){
	$(this).parent('.appeal_hiden_content').slideUp();
	$('.appeal_content').show();
	e.preventDefault();
})