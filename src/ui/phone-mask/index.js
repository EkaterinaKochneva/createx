function phoneMask(elements) {

  if (elements.length !== 0) {
    const maskOptions = {
      mask: '+{7} (000) 000-00-00'
    };
    console.log("phonemask")
    elements.forEach(element => {
      const mask = IMask(element, maskOptions);
    });
  }
}