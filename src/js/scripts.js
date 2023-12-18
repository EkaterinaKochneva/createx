// Подключение скриптов блоков и страниц
window.addEventListener('DOMContentLoaded', function() {

// utils
//=include utils/debounce.js

//=include ../components/header/index.js
mobileMenu();

//=include ../components/hero/index.js
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
});