$(document).ready(function() {

	//Fancybox Lightbox Starts
	if($(".fancybox").length>0){
		$('.fancybox').fancybox({
	    	maxWidth	: 700,
			maxHeight	: 600,
			minHeight   : 500,
			width		: '100%',
			height		: '100%',
			helpers : {
	            title : null            
	        } 
		});
	}
	//Fancybox Lightbox Ends

});