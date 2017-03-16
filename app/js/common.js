$( document ).ready(function() {
	$('.toggle-btn').click(function(){
		$(this).toggleClass('open');
		$('.mobile-list').toggleClass('open');
	})
});