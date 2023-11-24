"use strict";

// Подключение скриптов блоков и страниц

var mobileMenu = function mobileMenu() {
  var body = document.querySelector('body');
  var mainMenu = document.querySelector('.top-menu');
  var burger = document.querySelector('.burger');
  var close = document.querySelector('.top-menu__close');
  burger.addEventListener('click', function () {
    mainMenu.classList.add('is-active');
    body.classList.add('faded');
  });
  close.addEventListener('click', function () {
    mainMenu.classList.remove('is-active');
    body.classList.remove('faded');
  });
};
mobileMenu();
var heroSlider = new Swiper('.hero__slider', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.hero__button-next',
    prevEl: '.hero__button-prev'
  },
  pagination: {
    el: '.hero__pagination',
    clickable: true,
    type: 'bullets',
    renderBullet: function renderBullet(index, className) {
      var number;
      if (index < 11) {
        number = "0".concat(index + 1);
      } else {
        number = index + 1;
      }
      return '<span class="' + className + '">' + '<span class="swiper-pagination-numbered">' + number + '</span>' + '</span>';
    }
  }
});
function goToTop() {
  var button = document.querySelector('.go-to-top');
  var scrollVal = 100;
  window.addEventListener('scroll', function () {
    var scrollOffset = window.scrollY;
    if (scrollOffset > scrollVal && !button.classList.contains('is-active')) {
      button.classList.add('is-active');
    } else if (scrollOffset <= scrollVal && button.classList.contains('is-active')) {
      button.classList.remove('is-active');
    }
  });
  button.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
goToTop();
function videoCover(videos) {
  var deleteLength = 'https://youtu.be/'.length;
  var videoIframe = function videoIframe(id) {
    var query = '?&autoplay=1';
    return 'https://www.youtube.com/embed/' + id + query;
  };
  var createIframe = function createIframe(id) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
    iframe.setAttribute('src', videoIframe(id));
    return iframe;
  };
  videos.forEach(function (element) {
    var videoHref = element.dataset.video;
    var videoId = videoHref.substring(deleteLength, videoHref.length);
    var button = element.querySelector('.video-cover__button');
    var videoCover = element.querySelector('.video-cover__img');
    button.addEventListener('click', function () {
      var iframe = createIframe(videoId);
      videoCover.remove();
      button.remove();
      element.appendChild(iframe);
    });
  });
}
var videos = document.querySelectorAll('.video-cover');
videoCover(videos);