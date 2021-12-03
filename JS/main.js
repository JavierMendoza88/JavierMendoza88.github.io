/* Function that is executed in place and used to handle the YouTube
   video popups and closures. In this case we use the jQuery as an object
   and pass it in as a reference, dented by $. */
$(function($) {

	var $window = $(window),
		$body = $('body');

	// Poptrox. Called when the web page is loaded.
		$window.on('load', function() {
			// This variable will be used to handle the thumbnails element from the HTML
			var $thumbnails = $('.thumbnails');

			if ($thumbnails.length > 0)
				$thumbnails.poptrox({
					// Called when the YouTube popup closes
					onPopupClose: function() { $body.removeClass('is-covered'); },
					// Called when the YouTube popup opens
					onPopupOpen: function() { $body.addClass('is-covered'); },
					// Color that is overlayed on the main window. Helpful to use
					// So background doesn't distract from video popup
					overlayColor: 'darkgray',
					// If true, then default popup styling will be used
					usePopupDefaultStyling: false,
				});
		});
})(jQuery); // return jQuery object
