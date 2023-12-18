function simpleSlider (elements) {
  if (elements.length !== 0) {
    elements.forEach(el => {
      const element = el;
      const breakpoints = 767;
      const options = {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        setWrapperSize: true,
        pagination: {
          el: el.querySelector('.simple-slider__pagination'),
        },
      }
      sliderMobile(element, breakpoints, options);
    });    
  }
}