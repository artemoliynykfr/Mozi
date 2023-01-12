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
function burger(){
	let header__burger = document.querySelector('.navbar-toggler'),
		 header__menu = document.querySelector('.nav'),
		 header = document.querySelector('.navbar');
	header__burger.addEventListener('click', function(){
		if (header__burger.classList.contains('active'), header__menu.classList.contains('active'), header.classList.contains('active')){
			header__burger.classList.remove('active') || header__menu.classList.remove('active') || header.classList.remove('active')
		} else {
			header__burger.classList.add('active') || header__menu.classList.add('active') || header.classList.add('active')
		}
	})
}
burger();
if(document.querySelector('.body__main')){
	new Swiper('.swiper-container', {
			direction: 'horizontal',
			loop: !1,
			initialSlide: 0,
			speed: 1500,
			slidesPerView: 4,
			spaceBetween: 30,
			breakpoints: {
				1024:{
					slidesPerView: 4,
					spaceBetween: 30,
				},
				768:{
					slidesPerView: 3,
					spaceBetween: 20,
				},
				480:{
					slidesPerView: 2,
					spaceBetween: 20,
				},
				0:{
					slidesPerView: 1,
					spaceBetween: 20,
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
}