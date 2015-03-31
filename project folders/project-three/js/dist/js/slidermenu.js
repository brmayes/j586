			$(function() {
				$('nav#menu').mmenu({
					extensions	: [ 'effect-slide', 'pageshadow' ],
					header		: true,
					searchfield	: true,
					counters	: true,
					footer		: {
						add			: true,
						content		: '<a href="mmenu.frebsite.nl">Visit website &rsaquo;</a>'
					}
				});
			});