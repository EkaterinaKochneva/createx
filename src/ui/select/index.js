function select (elements) {
  if (elements.length !== 0) {
    elements.forEach(element => {
      element.addEventListener('change', function() {
        element.classList.add('is-change');
      });
    });
  }
}