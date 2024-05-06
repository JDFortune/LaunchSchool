let today = new Date();

function dateSuffix(date) {
  date = date.getDate();
  if (date >= 11 && date <= 19) {
    return date + 'th';   
  }

  let ending = date % 10;
  switch (ending) {
    case 1: return date + 'st';
    case 2: return date + 'nd';
    case 3: return date + 'rd';
    default: return date + 'th';
  }
}

function formattedMonth(date){
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);
  date = dateSuffix(date)
  return `Today is ${day}, ${month} ${date}.`
}

// console.log(formattedDate(today));

// console.log(today.getFullYear());
// console.log(today.getYear());

// let jan1970 = new Date("January 1, 1970");

// console.log(today.getTime());
// console.log(today - jan1970);

// let tomorrow = new Date(today.getTime());
// tomorrow.setDate(today.getDate() + 1);

// console.log(formattedDate(tomorrow));

let nextWeek = new Date(today.getTime());
// nextWeek.setDate(today.getDate() + 7);

nextWeek.setDate(nextWeek.getDate() + 7);
console.log(nextWeek.toDateString());
console.log(today.toDateString());

console.log(nextWeek.toDateString() === today.toDateString());

function formatTime(date) {
  let hour = date.getHours().toString().padStart(2, '0');
  let min = date.getMinutes().toString().padStart(2, '0');
  return hour + ':' + min;
}

console.log(formatTime(today));