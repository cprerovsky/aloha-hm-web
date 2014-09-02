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

	function flashHeader($obj, size, callback) {
		$obj.css('text-shadow', '0 0 ' + size + 'px white');
		if (size > 0) {
			setTimeout(function () {
				flashHeader($obj, --size, callback);
			}, 10);
		} else {
			callback();
		}
	}

	aloha($('.container .tryit')[0]);
	$('.btn.startdemo').click(function () {
		$('.demo-wrap').slideDown();
	});

	aloha($('.header-content h1')[0]);

	flashHeader($('.header h1'), 30, function () {
		var boundary = aloha.boundaries.fromEndOfNode($('.header-content h1')[0]);
		aloha.selections.select(boundary, boundary, aloha.editor);
	});
});