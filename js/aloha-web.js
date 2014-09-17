$(function () {
	function recur($obj, i, manipulate) {
		manipulate($obj, i);
		if (i > 0) {
			setTimeout(function () {
				recur($obj, --i, manipulate);
			}, 17);
		}
	}

	$('.btn-tryit').click(function () {
		$(this).fadeOut();
		aloha($('.demo-edit')[0]);
		var boundary = aloha.boundaries.fromEndOfNode($('.header-content h1')[0]);
		aloha.selections.select(boundary, boundary, aloha.editor);

		// flash header
		recur($('.header h1'), 10, function ($obj, i) {
			$obj.css('text-shadow', '0 0 ' + i * 3 + 'px white');
		});

		// flash caret
		recur($('.aloha-caret'), 10, function ($obj, i) {
			$obj.css('box-shadow', '0 0 ' + i * 3 + 'px white');
		});
	});
});