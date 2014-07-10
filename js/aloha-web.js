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

	aloha($('.container .tryit')[0]);
	$('.btn.startdemo').click(function () {
		$('.demo-wrap').slideDown();
	});



	aloha($('.header-content h1')[0]);

	var boundary = aloha.boundaries.fromEndOfNode($('.header-content h1')[0]);
	aloha.boundaries.select(boundary);
	aloha.selections.show($('.aloha-caret')[0], boundary);
});