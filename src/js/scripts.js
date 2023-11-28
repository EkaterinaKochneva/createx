// Подключение скриптов блоков и страниц

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