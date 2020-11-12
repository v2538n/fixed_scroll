(function($){
	$(document).ready(function(){

/* ----------------------------------------------------------------------------------------- */

	
	/* Анимация для вернхнего меню, при скролле страницы */

		function scrollAnimation(){

			const trigger = $('.s1');
			const triggerHeight = trigger.outerHeight(true);
			
			const target  	 = $('.block-fixed');
			const winHeight  = $(window).height();
			const startPoint = $('.s2').offset().top;
			const stopPoint  = ($('.s3').offset().top) - winHeight;
			
			const images = $('.content-img-fixed');
			const image1 = startPoint;
			const image2 = image1 + winHeight;
			const image3 = image2 + winHeight;
			const image4 = image3 + winHeight;
			const image5 = image4 + winHeight;
			const image6 = image5 + winHeight;
			const image7 = image6 + winHeight;
			const image8 = image7 + winHeight;
			const image9 = image8 + winHeight;
			const image10 = image9 + winHeight;

			window.addEventListener('scroll', animateOnScroll);

			function animateOnScroll(params){
				
				console.log('pageOffset ' + pageYOffset);
				console.log('startPoint ' + startPoint);

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


				function change_img(){

					if(pageYOffset > image1 && pageYOffset < stopPoint){
						images.removeClass('visible');
						images.eq(0).addClass('visible');
					}

					if(pageYOffset > image2 && pageYOffset < stopPoint){
						images.removeClass('visible');
						images.eq(1).addClass('visible');
					}

					if(pageYOffset > image3 && pageYOffset < stopPoint){
						images.removeClass('visible');
						images.eq(2).addClass('visible');
					}

					if(pageYOffset > image4 && pageYOffset < stopPoint){
						images.removeClass('visible');
						images.eq(3).addClass('visible');
					}

					if(pageYOffset > image5 && pageYOffset < stopPoint){
						images.removeClass('visible');
						images.eq(4).addClass('visible');
					}

					if(pageYOffset > image6 && pageYOffset < stopPoint){
						images.removeClass('visible');
						images.eq(5).addClass('visible');
					}

					if(pageYOffset > image7 && pageYOffset < stopPoint){
						images.removeClass('visible');
						images.eq(6).addClass('visible');
					}

					if(pageYOffset > image8 && pageYOffset < stopPoint){
						images.removeClass('visible');
						images.eq(7).addClass('visible');
					}

					if(pageYOffset > image9 && pageYOffset < stopPoint){
						images.removeClass('visible');
						images.eq(8).addClass('visible');
					}

					if(pageYOffset > image10 && pageYOffset < stopPoint){
						images.removeClass('visible');
						images.eq(9).addClass('visible');
					}

				}

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