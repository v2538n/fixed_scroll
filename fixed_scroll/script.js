/*
	fixed-container
				
	-- block-fixed
	--- container-images
	---- content-img-fixed
	----- image

	-- text-fixed
	--- p
	---- span
	
*/

function scrollAnimation(startPointClass, stopPointClass, containerWidth){
			
	let target  	  = $('.block-fixed');

	let winHeight     = $(window).height();

	let startPoint    = $('.'+startPointClass).offset().top;
	let stopPoint     = $('.'+stopPointClass).offset().top - winHeight;
	

	let images        = $('.content-img-fixed');
	let imagesCount   = images.length;
	let imagesPoint   = new Array();

	let fixedContainer  = $('.fixed-container');
	let containerHeight = (imagesCount * winHeight) + 'px';
	
	fixedContainer.css({'height':containerHeight});

	$('.fixed-container').css({'width':containerWidth});
	$('.content-img-fixed').css({'width':containerWidth});

	function imagesPoints(){
		imagesPoint[0] = startPoint;

		let prevInc = 0;

		for(let i = 1; i <= imagesCount; i++){
			prevInc        = i - 1;
			imagesPoint[i] =  imagesPoint[prevInc] + winHeight;
		}
	}

	imagesPoints();


	function change_img(){

		imagesPoint.forEach(function(item, i) {
			if(pageYOffset > item && pageYOffset < stopPoint){
				images.removeClass('visible');
				images.eq(i).addClass('visible');
			} else if(pageYOffset > stopPoint) {
				images.removeClass('visible');
				images.last().addClass('visible');
			} else if(pageYOffset < startPoint){
				images.removeClass('visible');
				images.first().addClass('visible');
			}
		});
	}

	function fixed_block(){
		if(pageYOffset > startPoint && pageYOffset < stopPoint){
			target.addClass('fixed_top').removeClass('absolute_bottom');
		} 

		else if(pageYOffset > startPoint && pageYOffset > stopPoint) {
			target.removeClass('fixed_top').addClass('absolute_bottom');
		} 

		else {
			target.removeClass('fixed_top');
			target.removeClass('absolute_bottom');
		}
	}

	fixed_block();
	change_img();

	window.addEventListener('scroll', animateOnScroll);

	function animateOnScroll(){
		fixed_block();
		change_img();
	}
}