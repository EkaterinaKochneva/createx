// Подключение скриптов блоков и страниц
window.addEventListener('DOMContentLoaded', function() {

// utils
//=include utils/debounce.js

//=include ../components/header/index.js
mobileMenu();

//=include ../components/hero/index.js
const heroSlider = document.querySelector('.hero__slider');
heroSliderInit(heroSlider);

//=include ../ui/go-to-top/index.js
goToTop();

//=include ../ui/video-cover/index.js
const videos = document.querySelectorAll('.video-cover');
videoCover(videos);

//=include ../ui/phone-mask/index.js
const inputPhoneList = document.querySelectorAll('input[type="tel"]');
phoneMask(inputPhoneList);

//=include ../ui/form-validate/index.js
const formsList = document.querySelectorAll('.validate-form');
formValidate(formsList);

//=include ../ui/modal/index.js

//=include ../ui/select/index.js
const selectList = document.querySelectorAll('.select');
select(selectList);

//=include ../ui/add-file/index.js
const addFileList = document.querySelectorAll('.add-file');
addFileInput(addFileList);

//=include ../components/section-slider/index.js
const slidersList = document.querySelectorAll('.section-slider');
sectionSlider(slidersList);

//=include ../ui/slider-mobile/index.js
//=include ../components/simple-slider/index.js
const slidersMobileList = document.querySelectorAll('.jsSliderMobile');
simpleSlider(slidersMobileList);

//=include ../components/reviews-slider/index.js
const slidersReviewList = document.querySelectorAll('.reviews-slider');
reviewsSlider(slidersReviewList);

//=include ../components/digits/index.js
const digitsList = document.querySelectorAll('.digits__item');

//=include utils/checkScroll.js
const digits = document.querySelector('.digits');
checkScroll(digits, digitsProgress.bind(null, digitsList), 300);

});