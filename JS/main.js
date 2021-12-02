
$(function($) {

	var $window = $(window),
		$body = $('body');

	// Poptrox.
		$window.on('load', function() {

			var $thumbs = $('.thumbnails');

			if ($thumbs.length > 0)
				$thumbs.poptrox({
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
})(jQuery);
