$(document).ready(function() {
	var currentImage = "";
	var nextimage = 0;
	doSlideshow();
	function doSlideshow() {
		currentImage = $(".active_image");
		$(currentImage).removeClass("active_image");
		if (!$(currentImage).next(".image_header").length) {
			$(".image_header").first().addClass("active_image");
		} else {
			$(currentImage).next(".image_header").addClass("active_image");
		}
		setTimeout(doSlideshow, 5000);
	}

}); 