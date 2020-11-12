(function($){
	$(document).ready(function(){


		function scrollAnimation(){

			const trigger = $('.s1');
			const triggerHeight = trigger.outerHeight(true);
			
			const target  	 = $('.block-fixed');
			const winHeight  = $(window).height();
			const startPoint = $('.s2').offset().top;
			const stopPoint  = ($('.s3').offset().top) - winHeight;
			
			const images      = $('.content-img-fixed');
			let imagesCount   = images.length;
			let imagesPoint   = new Array();

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


			window.addEventListener('scroll', animateOnScroll);

			function animateOnScroll(params){
				fixed_block();
				change_img();
			}

			/*function offset(el){
			 	const rect = el.getBoundingClientRect(),
			 		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			 		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			 	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
			 }*/

			/*setTimeout(() => {
			 	animateOnScroll();
			}, 300);*/
		}

		scrollAnimation();
	});
})(jQuery);