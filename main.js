const slider = document.querySelectorAll('.slider');
let index = 0;

const activeSlider = n => {
  for(let sliders of slider) {
    sliders.classList.remove('active');
  }
  slider[n].classList.add('active');
}


setInterval(() => {

  
    if(index === slider.length - 1) {
      index = 0;
      activeSlider(index);
    }
    else {
      index++;
      activeSlider(index);
    }

},13000)