const wrapperDay = document.querySelectorAll('.wrapperDay');
let index = 0;

const actv = n => {
    for(let slide of wrapperDay) {
        slide.classList.remove('active');
    }
    wrapperDay[n].classList.add('active');
}

setInterval( () => {
    if(index === wrapperDay.length - 1) {
        index = 0;
        actv(index);
    }
    else {
        index++;
        actv(index);
    }
},5000);