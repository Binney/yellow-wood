console.log("Loading story...");
$().ready(() => {

	const populateOptions = function(newChapter) {
		$('#chapter').html(newChapter.prose);

		if (newChapter.is_death) {
			$('#advancement').html("You died. :(");
			return;
		} else if (!newChapter.choices) {
			console.log("Error: dead end");
			return;
		}

		$('#advancement').html('');
		for (i = 0; i < newChapter.choices.length; i++) {
			const n = i;
			var newButton = $("<div/>")
				.click(function() {
					advance(newChapter.choices[n].link_to)
				})
				.html(newChapter.choices[i].option)
				.appendTo($('#advancement'));
		}
	}

	const advance = function(nextChapterTitle) {
		progress = nextChapterTitle;
		populateOptions(plot[nextChapterTitle]);
	}

	var progress = "The yellow wood";
	advance(progress);
	console.log("Story ready!");


});