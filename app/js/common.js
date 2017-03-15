$( document ).ready(function() {
	$('.toggle-btn').click(function(){
		$(this).toggleClass('open');
		$('.nav-list').toggleClass('open');
	})
});