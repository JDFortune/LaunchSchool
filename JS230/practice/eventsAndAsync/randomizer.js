function randomizer(...callbacks) {
  if (callbacks.length < 1) return;

  let seconds = 0;
  let timeout = callbacks.length * 2;

  let interval = setInterval(() => {
    seconds += 1;
    console.log(seconds);

    if (seconds >= timeout) clearInterval(interval);
  }, 1000);

  callbacks.forEach(callback => {
    let executionTime = Math.floor(Math.random() * timeout * 1000);
    setTimeout(callback, executionTime);
  });
}

function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

randomizer(callback1, callback2, callback3, callback1, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6