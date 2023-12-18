const sliderMobile = (element, breakpoints, options) => {

  let sliderInstance = null;

  const initSlider = () => {
    sliderInstance = new Swiper(element, options);
  };

  const destroySlider = () => {
    sliderInstance?.destroy();
    sliderInstance = null;
  };

  const makeSliderComponent = () => {
    const conditionInit = () => {
      const isMobile = window.innerWidth <= breakpoints;
      return isMobile && !sliderInstance;
    }

    const conditionDestroy = () => {
      const isDesktop = window.innerWidth > breakpoints;
      return isDesktop && sliderInstance;
    }
    
    if (conditionInit()) {
      initSlider();      
    }
    
    if (conditionDestroy()) {
      destroySlider();
    } 
  }

  const onResize = debounce(makeSliderComponent, 300);

  makeSliderComponent();
  window.addEventListener('resize', onResize);
};