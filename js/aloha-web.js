$(function () {
	var $header = $('.page-header.header .row');
	var $window = $(window);

	/**
	 * calculates background y position for
	 * parallax effect
	 */
	function backgroundY (scrollTop) {
		return (scrollTop / -4) + 'px';
	}
	
	/**
	 * parallax callback for requestAnimationFrame
	 */
	function parallax (time) {
			var scrollTop = $window.scrollTop();
			$header
				.css('background-position-y', backgroundY(scrollTop));
			window.requestAnimationFrame(parallax);
	}

	


	window.requestAnimationFrame(parallax);
});