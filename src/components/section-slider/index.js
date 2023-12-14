function sectionSlider (elements) {
  if (elements.length !== 0) {
    elements.forEach(n => {
      const slider = new Swiper(n.querySelector('.swiper'), {
        loop: true,
        slidesPerView: 1,
        breakpoints: {
          370: {
            slidesPerView: 2,
            spaceBetween: 10	
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 20	
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30
          }
          
        },
        navigation: {
          nextEl: n.querySelector('.section-slider__button-next'),
          prevEl: n.querySelector('.section-slider__button-prev'),
        },
        pagination: {
          el: n.querySelector('.section-slider__pagination'),
        },
      });
    });
  }
}