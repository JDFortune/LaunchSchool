const MINS_SECS = 60;

function dms(deg) {
  deg = deg % 360;
  deg = deg < 0 ? deg + 360 : deg;
  let degrees = Math.floor(deg);
  deg = (deg - degrees) * MINS_SECS;
  let minutes = Math.floor(deg);
  deg = (deg - minutes) * MINS_SECS;
  let seconds = Math.floor(deg);

  console.log(`${degrees}°${padFormat(minutes)}'${padFormat(seconds)}"`);
}

function padFormat(num) {
  return num.toString().padStart(2, '0');
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"