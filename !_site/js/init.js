/***************************************************************************/
/*******      Images to backgound       ********/
/***************************************************************************/
$(document).ready(function() {
	if($('.teachers').length > 0){
	 $('.teachers__images').each(function(){
	  $(this).css('background-image', 'url(' + $(this).find('img').attr('src') + ')' );
	  $(this).find('img').css('opacity', '0' );
	 });
	};

});

