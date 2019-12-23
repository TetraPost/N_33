const leftBtn = document.querySelector('.red');
const stopBtn = document.querySelector('.yellow');
const rightBtn = document.querySelector('.green');

const redDivR = document.querySelector('#redDivR');
const yellowDivR = document.querySelector('#yellowDivR');
const greenDivR = document.querySelector('#greenDivR');

const redDivL = document.querySelector('#redDivL');
const yellowDivL = document.querySelector('#yellowDivL');
const greenDivL = document.querySelector('#greenDivL');

const car1 = document.querySelector('#car1');
const car2 = document.querySelector('#car2');


function step1R() {
  redDivR.classList.add('redDiv');
  yellowDivR.classList.remove('yellowDiv');

  
  car1.classList.remove('carGreen');
  car2.classList.add('carGreen');

  greenDivL.classList.add('greenDiv');
  yellowDivL.classList.remove('yellowDiv');
}
function step2R() {
  redDivR.classList.remove('redDiv');
  yellowDivR.classList.add('yellowDiv');

  greenDivL.classList.remove('greenDiv');
  yellowDivL.classList.add('yellowDiv');
}
function step3R() {
  yellowDivR.classList.remove('yellowDiv');
  greenDivR.classList.add('greenDiv');
  
  car1.classList.add('carGreen');
  car2.classList.remove('carGreen');
  
  yellowDivL.classList.remove('yellowDiv');
  redDivL.classList.add('redDiv');
}
function step4R() {
  yellowDivR.classList.add('yellowDiv');
  greenDivR.classList.remove('greenDiv');

  redDivL.classList.remove('redDiv');
  yellowDivL.classList.add('yellowDiv');
}

function rightStep() {
  redDivR.classList.remove('redDiv');
  yellowDivR.classList.remove('yellowDiv');
  greenDivR.classList.add('greenDiv');

  car2.classList.remove('carGreen');
  car1.classList.add('carGreen');

  redDivL.classList.add('redDiv');
  yellowDivL.classList.remove('yellowDiv');
  greenDivL.classList.remove('greenDiv');
}
function leftStep() {
  redDivL.classList.remove('redDiv');
  yellowDivL.classList.remove('yellowDiv');
  greenDivL.classList.add('greenDiv');

  car1.classList.remove('carGreen');
  car2.classList.add('carGreen');

  redDivR.classList.add('redDiv');
  yellowDivR.classList.remove('yellowDiv');
  greenDivR.classList.remove('greenDiv');
}

function myFuncRight() {
  setTimeout(step1R, 2000);
  setTimeout(step2R, 4000);
  setTimeout(step3R, 6000);
  setTimeout(step4R, 8000);
}

const delay = 8100;
const timerId = setInterval(myFuncRight, delay);

stopBtn.onclick = () => {
  rightBtn.classList.remove('disabled');
  leftBtn.classList.remove('disabled');
  setTimeout(() => {
    clearInterval(timerId);
    // myFunc();
  }, 0);
};

rightBtn.onclick = () => {
  rightStep();
};
leftBtn.onclick = () => {
  leftStep();
};
