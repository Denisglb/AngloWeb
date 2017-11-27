jQuery(document).ready(function($){
	//create the slider
	$('.cd-testimonials-wrapper-2').flexslider({
		selector: ".cd-testimonials-2 > li",
		animation: "slide",
		controlNav: false,
		slideshow: false,
		smoothHeight: true,
		start: function(){
			$('.cd-testimonials-2').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});

	//open the testimonials modal page
	$('.cd-see-all-2').on('click', function(){
		$('.cd-testimonials-all-2').addClass('is-visible');
	});

	//close the testimonials modal page
	$('.cd-testimonials-all-2 .close-btn').on('click', function(){
		$('.cd-testimonials-all-2').removeClass('is-visible');
	});
	$(document).keyup(function(event){
		//check if user has pressed 'Esc'
    	if(event.which=='27'){
    		$('.cd-testimonials-all-2').removeClass('is-visible');	
	    }
    });
    
	//build the grid for the testimonials modal page
	$('.cd-testimonials-all-wrapper-2').children('ul').masonry({
  		itemSelector: '.cd-testimonials-item'
	});
});