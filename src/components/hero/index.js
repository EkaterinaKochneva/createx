const heroSlider = new Swiper('.hero__slider', {
  loop: true,
	slidesPerView: 1,
  navigation: {
    nextEl: '.hero__button-next',
    prevEl: '.hero__button-prev',
  },
  pagination: {
    el: '.hero__pagination',
    clickable: true,
    type: 'bullets',
    renderBullet: function (index, className) {
      let number;
      if (index < 11) {
        number = `0${index + 1}`;
      } else {
        number = index + 1;
      }
      return '<span class="' + className + '">' + '<span class="swiper-pagination-numbered">' + number + '</span>' + '</span>';
    }
  },
});