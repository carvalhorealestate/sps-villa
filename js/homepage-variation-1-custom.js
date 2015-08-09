$(document).ready(function() {
	var sliderTextMarginTop = ($(window).height() - ($(".property_info_header").height() + $(".schedule_visit_btn_header").height())) / 3;
	$(".property_info_header").css("margin-top", sliderTextMarginTop);
	$(window).resize(function() {
		sliderTextMarginTop = ($(window).height() - ($(".property_info_header").height() + $(".schedule_visit_btn_header").height())) / 3;
		$(".property_info_header").css("margin-top", sliderTextMarginTop);
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