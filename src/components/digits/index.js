const digitsProgress = (elements) => {
  if (elements.length !== 0) {
    let timing = 10;
    const strokeWidth = 6;
    const width = 148;

    elements.forEach(element => {
      let counter = 0;
      const progressCircle = +element.dataset.progress;
      const progressVal = +element.dataset.value;
      const progressRatio = (progressVal / progressCircle).toFixed(2);
      const elementVal = element.querySelector(".digits__value span");
      
      const circle = element.querySelector(".digits__progress circle");
      const radius = (width / 2) - (strokeWidth / 2);
      const circleLength = 2 * Math.PI * radius;

      circle.setAttribute("cx", width / 2);
      circle.setAttribute("cy", width / 2);
      circle.setAttribute("r", radius);
      circle.style.strokeDasharray = Math.round(circleLength);

      const progress = () => {
        if (counter == progressCircle) {
          clearInterval();
          return;
        } 
        counter++;
        let valueCounter = Math.round(counter * progressRatio);
        circle.style.strokeDashoffset = Math.round(circleLength - (counter / 100) * circleLength);
        elementVal.innerText = `${valueCounter}`;
      }
      setInterval(progress, timing);

    });
  }
};