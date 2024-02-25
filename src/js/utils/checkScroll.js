function checkScroll (element, cb, offsetY) {

    function getTopCoords(elem) {
        let box = elem.getBoundingClientRect();      
        return box.top + window.pageYOffset;
    }

    const blockPosTop = getTopCoords(element);
    const ident = offsetY ? offsetY : 0;
    let activated = false;

    const activateScrollElement = () => {
        let posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if ((posTop + ident > blockPosTop) && !activated) {
            activated = true;
            cb();
        }
    }
    const onScroll = debounce(activateScrollElement, 200);
    window.addEventListener('scroll', onScroll);
  }