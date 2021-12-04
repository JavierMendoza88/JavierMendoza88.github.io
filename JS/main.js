/* Function that is executed in place and used to handle the YouTube
   video popups and closures. In this case we use the jQuery as an object
   and pass it in as a reference, identified by $. 
*/

$(function($){
	var $window = $(window);
	var	$body = $('body');

	// Called when the page is loaded, uses methods from poptrox library
	$window.on('load', function() {
		var $thumbnails = $('.thumbnails');
		$thumbnails.poptrox({
			// Called when the YouTube popup closes
			onPopupClose: function() { $body.removeClass('is-covered'); },
			// Called when the YouTube popup opens
			onPopupOpen: function() { $body.addClass('is-covered'); },
			// Color that is overlayed on the main web page. Helpful to use
			// So background doesn't distract from video popup
			overlayColor: 'darkgray',
			// If true, then default popup styling will be used
			usePopupDefaultStyling: false,
		});
	});

	// function to slowly scroll back to top of web page using jQuery methods
	$('.scroll_to').click(function(e) {
		var scroll = $(this).attr('href');
		var position = $(scroll).offset();
		$('html, body').stop().animate({
		   scrollTop: position.top
		}, 2000);
		e.preventDefault();
	 });
	
});
