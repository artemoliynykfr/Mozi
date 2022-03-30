// webp
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}else{
		document.querySelector('body').classList.add('no-webp');
	}
});

const tl = new TimelineMax()
new SmoothScroll('a[href*="#"]')


// header burger	
/* function burgerMenu(){
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const body = document.querySelector('body')
	burger.addEventListener('click', () => {
		if(!menu.classList.contains('active')){
			menu.classList.add('active')
			burger.classList.add('active-burger')
			body.classList.add('locked')
		} else {
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})
	window.addEventListener('resize', () => {
		if (window.innerWidth > 767.98){
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})
}
burgerMenu();
function fixedNav(){
	const nav = document.querySelector('nav')
	const breakpoint = 1
	if (window.scrollY > breakpoint){
		nav.classList.add('fixed__nav')
	} else {
		nav.classList.remove('fixed__nav')
	}
}
window.addEventListener('scroll', fixedNav) */
//swiper
/* if (document.querySelector('.body__main')){
	
} */
new Swiper('.swiper-container', {
		direction: 'horizontal',
		loop: !1,
		initialSlide: 0,
		speed: 1500,
		slidesPerView: 4,
		spaceBetween: 30,
		breakpoints: {
			0:{
				slidesPerView: 1,
				spaceBetween: 20,
			},
			480:{
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768:{
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1024:{
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		keyboard: {
			enabled: !0,
			onlyInViewport: !1
		},
		navigation: {
			nextEl: '.swiper__arrow-next',
			prevEl: '.swiper__arrow-prev'
		}
	});