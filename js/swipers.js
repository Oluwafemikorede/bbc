var sliderSwiper = new Swiper('#slider-swiper',{
	loop: false,
	pagination: true,
	grabCursor: true,
	calculateHeight: true,
	autoResize: true,
	autoplay: 5000
});

// Height fix for responsive swipers when orieantation changes
$(window).resize(function(){
	sliderSwiper.reInit();
});

var gallerySwiper = new Swiper('#gallery-swiper',{
	grabCursor: true,
	calculateHeight: true,
	freeMode: true,
	freeModeFluid: true,
	slidesPerView: 'auto',
	scrollbar: {
		container :'#gallery-swiper-scrollbar',
		hide: false,
		draggable: true  
	}
});

var gallerySwiper1 = new Swiper('#gallery-swiper1',{
	grabCursor: true,
	calculateHeight: true,
	freeMode: true,
	freeModeFluid: true,
	slidesPerView: 'auto',
	scrollbar: {
		container :'#gallery-swiper-scrollbar1',
		hide: false,
		draggable: true  
	}
});

var gallerySwiper2 = new Swiper('#gallery-swiper2',{
	grabCursor: true,
	calculateHeight: true,
	freeMode: true,
	freeModeFluid: true,
	slidesPerView: 'auto',
	scrollbar: {
		container :'#gallery-swiper-scrollbar2',
		hide: false,
		draggable: true  
	}
});

var gallerySwiper3 = new Swiper('#gallery-swiper3',{
	grabCursor: true,
	calculateHeight: true,
	freeMode: true,
	freeModeFluid: true,
	slidesPerView: 'auto',
	scrollbar: {
		container :'#gallery-swiper-scrollbar3',
		hide: false,
		draggable: true  
	}
});

var gallerySwiper4 = new Swiper('#gallery-swiper4',{
	grabCursor: true,
	calculateHeight: true,
	freeMode: true,
	freeModeFluid: true,
	slidesPerView: 'auto',
	scrollbar: {
		container :'#gallery-swiper-scrollbar4',
		hide: false,
		draggable: true  
	}
});

var gallerySwiper5 = new Swiper('#gallery-swiper5',{
	grabCursor: true,
	calculateHeight: true,
	freeMode: true,
	freeModeFluid: true,
	slidesPerView: 'auto',
	scrollbar: {
		container :'#gallery-swiper-scrollbar5',
		hide: false,
		draggable: true  
	}
});
