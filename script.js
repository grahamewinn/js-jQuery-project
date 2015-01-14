$(document).ready(function() {
	for (var i = 1; i < 17; i++) {
		$("#wrapper").append('<div class="grid_square"></div>');
	}
	$(".grid_square").hover(function() {
		$(this).addClass("highlight");
	});
});

function makeGrid() {
		$("div").removeClass("highlight");
		$("#wrapper").empty();
		var grid_size = prompt("How many squares per side for the new grid?");
		for (var i = 1; i <= grid_size; i++) {
			for (var j = 1; j <= grid_size; j++) {	
				$("#wrapper").append('<div class="grid_square"></div>');
				var new_square_size = Math.floor(400 / grid_size);
				$(".grid_square").css("height", new_square_size);
				$(".grid_square").css("width", new_square_size);
			}
		}
		$(".grid_square").hover(function() {
			$(this).addClass("highlight");
		});
	};