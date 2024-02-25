const mobileMenu = () => {

  const header = document.querySelector('header');
  const mainMenu = document.querySelector('.top-menu');
  const burger = document.querySelector('.burger');
  const close = document.querySelector('.top-menu__close');
  
  if( !mainMenu || !burger || !close) {
    return false;
  }

  burger.addEventListener('click', () => {
    mainMenu.classList.add('is-active');
    header.classList.add('faded');
    
  });
  close.addEventListener('click', () => {
    mainMenu.classList.remove('is-active');
    header.classList.remove('faded');
    
  });
  
}