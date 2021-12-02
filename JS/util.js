(function($) {
	/**
	 * Apply "placeholder" attribute polyfill to one or more forms.
	 * @return {jQuery} jQuery object.
	 */
	$.fn.placeholder = function() {

		// Multiple elements?
			if (this.length > 1) {

				for (var i=0; i < this.length; i++)
					$(this[i]).placeholder();

				return $this;
			}

		return $this;
	};

})(jQuery);