const MILISECONDS_PER_MINUTE = 60000;

// function timeOfDay(deltaMinutes) {
//   const midnight = new Date('1/1/2000 00:00');
//   const afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILISECONDS_PER_MINUTE);

//   let hours = afterMidnight.getHours();
//   let minutes = (afterMidnight.getMinutes());

//   console.log(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
// }

// function convertDateTimeToMinutes(date) {
//   let miliseconds = date.getTime();
//   let minutes = miliseconds / MILISECONDS_PER_SECOND /  SECONDS_PER_MINUTES;
//   return minutes;
// }
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const DATE_PART = '1/1/2000'

function afterMidnight(time) {
  let midnight = new Date(`${DATE_PART} 00:00`);
  let currentDateTime = new Date(`${DATE_PART} ${time}`)

  let miliseconds = currentDateTime.getTime() - midnight.getTime();
  let minutesAfterMidnight = miliseconds / MILISECONDS_PER_MINUTE;
  
  return minutesAfterMidnight;
}

function beforeMidnight(time) {
  let minutesBeforeMidnight = MINUTES_PER_DAY - afterMidnight(time);
  if (minutesBeforeMidnight === 1440) minutesBeforeMidnight = 0;

  return minutesBeforeMidnight;
}

console.log(afterMidnight('00:00'));       // 0
console.log(beforeMidnight('00:00'));      // 0
console.log(afterMidnight('12:34'));       // 754
console.log(beforeMidnight('12:34'));      // 686

// function timeOfDay(deltaMinutes) {
//   let time =  new Date(0, 0, 0, 0, 0, 0, deltaMinutes * MILISECONDS_PER_MINUTE).toTimeString().slice(0, 5);
//   console.log(time);
//   return time;
// }

// timeOfDay(0);          // "00:00"
// timeOfDay(-3);         // "23:57"
// timeOfDay(35);         // "00:35"
// timeOfDay(-1437);      // "00:03"
// timeOfDay(3000);       // "02:00"
// timeOfDay(800);        // "13:20"
// timeOfDay(-4231);      // "01:29"


