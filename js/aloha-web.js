$(function () {
	var $window = $(window);

	function flashHeader($obj, size, callback) {
		$obj.css('text-shadow', '0 0 ' + size + 'px white');
		if (size > 0) {
			setTimeout(function () {
				flashHeader($obj, size -= 3, callback);
			}, 10);
		} else {
			callback();
		}
	}

	$('.btn-tryit').click(function () {
		$(this).fadeOut();
		aloha($('.demo-edit')[0]);
		flashHeader($('.header h1'), 30, function () {
			var boundary = aloha.boundaries.fromEndOfNode($('.header-content h1')[0]);
			aloha.selections.select(boundary, boundary, aloha.editor);
		});
	});

	$('#froggy').attr('style', '');
});