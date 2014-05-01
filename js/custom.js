$(document).ready(function(){
	// Load PhotoSwipes (Image galleries)
//	if ($('#gallery-swiper a').length) { // Check if the targetted element exists
//		var options = {}; // Set the options to a variable
//		$('#gallery-swiper a').photoSwipe(options); // Call the initializer function
//	}
//	
//	if ($('#gallery-swiper1 a').length) { // Check if the targetted element exists
//		var options = {}; // Set the options to a variable
//		$('#gallery-swiper1 a').photoSwipe(options); // Call the initializer function
//	}
//	
//	if ($('#gallery-swiper2 a').length) { // Check if the targetted element exists
//		var options = {}; // Set the options to a variable
//		$('#gallery-swiper2 a').photoSwipe(options); // Call the initializer function
//	}
//	
//	if ($('#gallery-swiper3 a').length) { // Check if the targetted element exists
//		var options = {}; // Set the options to a variable
//		$('#gallery-swiper3 a').photoSwipe(options); // Call the initializer function
//	}
//	
//	if ($('#gallery-swiper4 a').length) { // Check if the targetted element exists
//		var options = {}; // Set the options to a variable
//		$('#gallery-swiper4 a').photoSwipe(options); // Call the initializer function
//	}
	
	if ($('.gallery a').length)	{
		var options = {};
		$('.gallery a').photoSwipe(options);
	}
	if ($('.photography a').length)	{
		var options = {};
		$('.photography a').photoSwipe(options);
	}
	
	$('.notification').append('<div class="close">X</div>');
	$('.notification .close').click(function(){
		$(this).parent().animate({opacity: "0"});
		$(this).parent().slideUp();
	});
	
	$('blockquote').prepend('<div class="mark left">“</div>');
	$('blockquote').append('<div class="mark right">”</div>');
	
	$(window).resize();
});


$(window).resize(function() {
	var mt = ($('body').height() / 2) - ($('.content').height() / 2) - 30;
	if (mt < 8) mt = 8;
	$('.vertical-centered').css({
		marginTop: mt + "px"
	});
});