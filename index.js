const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
// const createTimerAnimator = () => (seconds) => {
//   const timerTick = () => {
//     if(seconds >= 0){
//       hours = parseInt(seconds / 3600, 10);
//       minutes = parseInt((seconds - (hours * 3600)) / 60, 10);
//       seconds = parseInt(seconds % 60, 10);
//       hours = hours < 10 ? "0" + hours : hours;
//       minutes = minutes < 10 ? "0" + minutes : minutes;
//       seconds = seconds < 10 ? "0" + seconds : seconds;
//       timerEl.textContent = hours + ":" + minutes + ":" + seconds;
//       seconds--
//       setTimeout(timerTick, 1000)
//     }
//   }
//   timerTick() 
// };
  

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => (seconds) => {
  const duration = seconds + 1;
  let sec = 0;
  const timer = setInterval(() => {
      hours = parseInt(seconds / 3600, 10);
      minutes = parseInt((seconds - (hours * 3600)) / 60, 10);
      sec = parseInt(seconds % 60, 10);
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      sec = sec < 10 ? "0" + sec : sec;
      console.log(hours,minutes,sec)
      timerEl.textContent = hours + ":" + minutes + ":" + sec;
      seconds--
    }, 1000);
  setTimeout(() => {
    clearInterval(timer);
  }, duration*1000);
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  let inputVal = inputEl.value;
  if (typeof inputVal === "string") {
    let numbersOnly = inputVal.replace(/[^0-9]/g, "");
    inputEl.value = numbersOnly;
  }
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  console.log(seconds)
  // createTimerAnimator(seconds);
  animateTimer(seconds)
  inputEl.value = '';

});
