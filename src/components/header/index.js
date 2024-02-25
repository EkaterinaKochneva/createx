const mobileMenu = () => {

  const body = document.querySelector('body');
  const header = document.querySelector('header');
  const mainMenu = document.querySelector('.top-menu');
  const burger = document.querySelector('.burger');
  
  if( !mainMenu || !burger || !close) {
    return false;
  }

  burger.addEventListener('click', () => {
    body.classList.toggle('is-hidden');
    mainMenu.classList.toggle('is-active');
    header.classList.toggle('is-open');
    
  });
  
}