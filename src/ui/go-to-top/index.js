function goToTop() {

  const button = document.querySelector('.go-to-top');  
  const scrollVal = 100;

  window.addEventListener('scroll', function() {

    let scrollOffset = window.scrollY;  

    if (scrollOffset > scrollVal && !button.classList.contains('is-active')) {
      button.classList.add('is-active');
    } else if (scrollOffset <= scrollVal && button.classList.contains('is-active')) {
      button.classList.remove('is-active');
    }

  });

  button.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

}