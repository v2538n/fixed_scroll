(function($){
	$(document).ready(function(){

/* ----------------------------------------------------------------------------------------- */

	
	/* Анимация для вернхнего меню, при скролле страницы */

		function scrollAnimation(){
			const trigger = $('.s1');
			const triggerHeight = trigger.outerHeight(true);

			const target  = $('.block-fixed');
			const targetHeight = target.outerHeight(true);


			const images = $('.content-img-fixed');

			const win_h = $(window).height();

			const image2 = targetHeight + triggerHeight;
			const image3 = image2 + targetHeight;
			const image4 = image3 + targetHeight;
			const image5 = image4 + targetHeight;
			const image6 = image5 + targetHeight;
			const image7 = image6 + targetHeight;

			window.addEventListener('scroll', animateOnScroll);

			function animateOnScroll(params){
				
				if(pageYOffset > triggerHeight){
					target.addClass('fixed_top');

				} 

				if(pageYOffset > image2 && pageYOffset < image3){
					images.removeClass('visible');
					images.eq(1).addClass('visible');
				} 

				if(pageYOffset > image3 && pageYOffset < image4){
					images.removeClass('visible');
					images.eq(2).addClass('visible');
				}

				if(pageYOffset > image4 && pageYOffset < image5){
					images.removeClass('visible');
					images.eq(3).addClass('visible');
				}

				if(pageYOffset > image5 && pageYOffset < image6){
					images.removeClass('visible');
					images.eq(4).addClass('visible');
				}

				if(pageYOffset > image6 && pageYOffset < image7){
					images.removeClass('visible');
					images.eq(5).addClass('visible');
				}

				if(pageYOffset > image7 && pageYOffset < image8){
					images.removeClass('visible');
					images.eq(5).addClass('visible');
				}

				if(pageYOffset > image8 && pageYOffset < image9){
					images.removeClass('visible');
					images.eq(5).addClass('visible');
				}

				/*else if (animateTrigger.hasClass('animation_active')) {
					animateTrigger.removeClass('animation_active');
					animateTarget.addClass('animation_backward');
				}*/
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