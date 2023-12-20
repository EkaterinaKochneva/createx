function reviewsSlider (elements) {
  if (elements.length !== 0) {
    elements.forEach(element => {
      const slider = new Swiper(element, {
        loop: true,
        slidesPerView: 1,
        navigation: {
          nextEl: element.querySelector('.swiper-button-next'),
          prevEl: element.querySelector('.swiper-button-prev'),
        },

      });
    });
  }
}