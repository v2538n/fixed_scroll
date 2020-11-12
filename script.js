(function($){
	$(document).ready(function(){


		function scrollAnimation(){
			
			let target  	 = $('.block-fixed');

			let winHeight  = $(window).height();
			let tenth      = winHeight / 10;

			let startPoint = $('.s2').offset().top;
			
			let images        = $('.content-img-fixed');

			let stopPoint = (images.last().offset().top) + (winHeight - (tenth * 4));

			let imagesCount     = images.length;
			let imagesPoint     = new Array();

			/*let stopPoint  = ($('.s3').offset().top) - (tenth * (imagesCount * 0.2));*/

			let fixedContainer  = $('.fixed-container');
			let containerHeight = (imagesCount * (winHeight + tenth)) + 'px';

			fixedContainer.css({'height':containerHeight});

			function imagesPoints(){
				imagesPoint[0] = startPoint;

				let prevInc = 0;

				for(let i = 1; i <= imagesCount; i++){
					prevInc        = i - 1;
					imagesPoint[i] =  imagesPoint[prevInc] + winHeight;
				}
			}

			imagesPoints();

			console.log('target ' + target);
			console.log('winHeight ' + winHeight);
			console.log('tenth ' + tenth);
			console.log('startPoint ' + startPoint);
			console.log('stopPoint ' + stopPoint);
			console.log('images ' + images);
			console.log('imagesCount ' + imagesCount);
			console.log('fixedContainer ' + fixedContainer);
			console.log('containerHeight ' + containerHeight);
			console.log('imagesPoint ' + imagesPoint);


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

			function animateOnScroll(){
				fixed_block();
				change_img();
			}
		}

		scrollAnimation();
	});
})(jQuery);