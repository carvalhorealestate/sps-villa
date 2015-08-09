$(document).ready(function() {
	var sliderTextMarginTop = ($(window).height() - ($("header").height() + $(".slider_text").height())) / 2;
	if (sliderTextMarginTop <= 50) {
		sliderTextMarginTop = 100;
	}
	if($(window).width()<=640)
	{
		sliderTextMarginTop=0;
	}
	$(".slider_text").css("margin-top", sliderTextMarginTop);
	$(window).resize(function() {
		sliderTextMarginTop = ($(window).height() - ($("header").height() + $(".slider_text").height())) / 2;
		if (sliderTextMarginTop <= 50) {
			sliderTextMarginTop = 100;
		}
	    if($(window).width()<=640)
		{
			sliderTextMarginTop=0;
		}
		$(".slider_text").css("margin-top", sliderTextMarginTop);
	});
	function centerModals() {
		$('.modal').each(function(i) {
			var $clone = $(this).clone().css('display', 'block').appendTo('body');
			var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
			top = top > 0 ? top : 0;
			$clone.remove();
			$(this).find('.modal-content').css("margin-top", top);
		});
	}
	$('.modal').on('show.bs.modal', centerModals);
	$(window).on('resize', centerModals);
}); 