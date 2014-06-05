$('.action_show').click(function(e){
	$('.choosed_list_content').slideDown();
	e.preventDefault();
})
$('.action_collapse').click(function(e){
	$('.choosed_list_content').slideUp();
	e.preventDefault();
})