jQuery(document).ready(function(){
	jQuery('.inner-faq-panel-heading a').click(function(){
		var faq_status = '';
		faq_status = jQuery(this).attr('aria-expanded');
		if( faq_status == 'true' )
			jQuery(this).prev().attr("src", "imgs/plus-mark.png");
		if( faq_status == 'false' )
			jQuery(this).prev().attr("src", "imgs/minus-mark.png");
	});
	jQuery('.inner-faq-panel-heading img').click(function(){
		$(this).next().trigger("click");
	});				
	jQuery('.inner-faq-panel-heading a').first().trigger("click");				
});