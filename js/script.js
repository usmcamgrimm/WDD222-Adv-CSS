$(function() {
	$('img').hover(function() { 
		$('#container').fadeIn(); 
	}, function() { 
		$('#container').fadeOut(); 
	});
});