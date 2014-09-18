$(function () {
	function recur($obj, i, manipulate) {
		manipulate($obj, i);
		if (i > 0) {
			setTimeout(function () {
				recur($obj, --i, manipulate);
			}, 17);
		}
	}

	$('.btn-tryit').on('mousedown', function () {
		$('.flip-container').addClass('flip');
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

	function colorcycle() {
		var colors = [
			'#54c8eb', // light blue
			'#4ea9de', // med blue
			'#4b97d2', // dark blue
			'#92cc8f', // light green
			'#41bb98', // mint green
			'#c9de83', // yellowish green
			'#dee569', // yellowisher green
			'#c891c0', // light purple
			'#9464a8', // med purple
			'#7755a1', // dark purple
			'#f069a1', // light pink
			'#f05884', // med pink
			'#e7457b', // dark pink
			'#ffd47e', // peach
			'#f69078' // salmon
		];
		var color = colors[parseInt(Math.random() * (colors.length - 1), 10)];
		$('.funky').css('background-color', color);
	}

	colorcycle();
	setInterval(colorcycle, 15000);

	setTimeout(function () {
		$('.btn-wrap, .navbar-header, .navbar-right').fadeIn(2000);
	}, 1000);
	$('.froggy-container img')
		.css('-webkit-filter', 'brightness(1)')
		.css('filter', 'brightness(1)');

});