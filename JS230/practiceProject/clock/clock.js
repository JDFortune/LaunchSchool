document.addEventListener('DOMContentLoaded', () => {
  const secondHand = document.querySelector('.second');
  const minuteHand = document.querySelector('.minute');
  const hourHand = document.querySelector('.hour');

  function setTime() {
    let now = new Date();

    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    return {hours, minutes, seconds};
  }

  setInterval(() => {
    let time = setTime();

    let hourDeg = Math.round((time.hours / 12) * 360);
    let minuteDeg = Math.round((time.minutes / 60) * 360);
    let secondDeg = Math.round((time.seconds / 60) * 360);

    secondHand.style.transform = `rotate(${secondDeg % 360}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg % 360}deg)`;
    hourHand.style.transform = `rotate(${hourDeg % 360}deg)`;
  },1000);
});