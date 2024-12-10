let Stopwatch = function() {
  const CENTI_PER_HOUR = 360000;
  const CENTI_PER_MINUTE = 6000;
  const CENTI_PER_SECOND = 100;

  return {
    totalTime: 0,
    stopwatch: [0, 0, 0, 0],

    updateTime() {
      this.totalTime += 1;

      this.stopwatch = [
        this.totalTime / 360000,
        (this.totalTime / 6000) % 60,
        (this.totalTime / 100) % 60,
        this.totalTime % 100
      ].map(Math.floor);
    },

    updateStopWatch(timeElements) {
      timeElements.forEach((el, idx) => {
        let time = String(this.stopwatch[idx]).padStart(2, '0');
        if (el.textContent !== time) el.textContent = time;
      });
    },

    start(timeElements) {
      return setInterval(() => {
        Stopwatch.updateTime();
        Stopwatch.updateStopWatch(timeElements);
      }, 10);
    },

    reset(interval, timeElements) {
      if (interval) clearInterval(interval);
      this.totalTime = 0;
      this.stopwatch = [0, 0, 0, 0];
      this.updateStopWatch(timeElements);
    }
  }
}();




document.addEventListener('DOMContentLoaded', () => {
  let timeElements = document.querySelectorAll('.time');
  let startBtn = document.querySelector('#startBtn');
  let resetBtn = document.querySelector('#reset');

  let interval;

  startBtn.addEventListener('click', event => {
    if (interval) {
      clearInterval(interval);
      startBtn.textContent = 'Start';
      interval = null;
    } else {
      startBtn.textContent = 'Stop';
      interval = Stopwatch.start(timeElements)
    }

    resetBtn.addEventListener('click', event => {
      Stopwatch.reset(interval, timeElements);
      startBtn.textContent = 'Start';
      interval = null;
    });

  });
});