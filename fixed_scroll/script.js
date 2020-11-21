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

/*
$.fn.scrollAnimation = function(){
	
}*/

/*
function fixScroll(startPointClass, stopPointClass){
	this.startPointClass = startPointClass;
	this.stopPointClass  = stopPointClass;	
}

let firstSlider  = new fixScroll('s2', 's3');
let secondSlider = new fixScroll('s4', 's5');*/


(function($){
	$(document).ready(function(){

		$(window).on('load', function(){
	resizeFixImg('s2');
	resizeFixImg('s4');
});
$(window).on('resize', function(){
	resizeFixImg('s2');
	resizeFixImg('s4');
});

function resizeFixImg(startPointClass) {

	let 
		wW              = $(window).width(),
		wH              = $(window).height(),
		target          = $('.'+startPointClass),
		images      	= target.find($('.content-img-fixed')),
		imagesCount  	= images.length,

		fixedContainer  = target.find($('.fixed-container')),
		containerOffset = fixedContainer.offset().left,
		containerWidth  = wW - (containerOffset * 2),
		containerHeight = (imagesCount * wH) + 'px';


		console.log('wW' + wW);
		console.log('wH' + wH);
		console.log('target' + target);
		console.log('images' + images);
		console.log('imagesCount' + imagesCount);
		console.log('fixedContainer' + fixedContainer);
		console.log('containerOffset' + containerOffset);
		console.log('containerWidth' + containerWidth);
		console.log('containerHeight' + containerHeight);



		console.log(' ------------- ');
		console.log(' Отбивка ');
		console.log(' ------------- ');

	fixedContainer.css({'height': containerHeight});
	images.css({'width':containerWidth});

}


function scrollAnimation(startPointClass, stopPointClass){
			
	let target  	  = $('.'+startPointClass).find($('.block-fixed'));

	let winHeight     = $(window).height();

	let startPoint    = $('.'+startPointClass).offset().top;
	let stopPoint     = $('.'+stopPointClass).offset().top - winHeight;
	

	let images        = $('.'+startPointClass).find($('.content-img-fixed'));
	let imagesCount   = images.length;
	let imagesPoint   = new Array();

	let fixedContainer  = $('.'+startPointClass).find($('.fixed-container'));




	console.log('target' + target);
	console.log('winHeight' + winHeight);
	console.log('startPoint' + startPoint);
	console.log('stopPoint' + stopPoint);
	console.log('images' + images);
	console.log('imagesCount' + imagesCount);
	console.log('fixedContainer' + fixedContainer);

	/*let containerHeight = (imagesCount * winHeight) + 'px';*/
	

	/*fixedContainer.css({'height':containerHeight});

	images.css({'max-width':containerWidth});
	fixedContainer.css({'max-width':containerWidth});*/

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

	$(window).on('scroll', function(){
		fixed_block();
		change_img();
	});
}

scrollAnimation('s2','s3');
scrollAnimation('s4','s5');

	});
})(jQuery);




/*
function calc(val){
	return: {
		testMinus: function(){
			//va
		}
	}
}
*/





/*function calckit(initNum) {
	return {
		resultNum: initNum,
		plus: function (b) {
	  		this.resultNum += b;
	  		return this;
		},
		minus: function(b) {
	 	 	this.resultNum -= b;
	  		return this;
		},
		res:  function() {
		 console.log(this.resultNum);
		}
	}
}


	function calc(initNum){
		return {
			resultNum: initNum,

			plus: function(b){
				this.resultNum += b;
				return this;
			},
			minus: function(b){
				this.resultNum -= b;
			},
			res: function(){
				console.log(this.resultNum);
			}
		}
	}




function addClass(className){
	return {
		reusltClass: className,	

		strip: function(param){
			this.reusltClass = 'test-'+ param;
			return this;
		},

		res: function(param){
			console.log(param + this.reusltClass);
		}
	}
}

addClass('className').strip('new-class-name').res('message-');*/


/*calc(5).minus(2).plus(2).res(); // 5
calc(5).minus(2).minus(2).minus(2).minus(2).minus(2).res(); // -5
calc(5).minus(1).plus(1).res(); // 5
calc(5).plus(1).plus(1).res(); // 7
*/