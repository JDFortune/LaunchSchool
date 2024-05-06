/*
Build a funciton to parse strings of email data

Input:
  - email data (probably a string)
Output:
  - number of email messages found in the string (number)
  - The date range of the email messages (date objects?)

Notes:
  - Emails separated by `##||##`
  - Emails have 5 parts: (separated by `#/#`)
    1. Sender (`From: `)
    2. Subject (Subject:)
    3. Date (Date as MM-DD-YYYY)
    4. Recipient (To:)
    5. Body
- additionally each email part is on a new line (\n) (split by the delimiter (`#/#), followed by a new line)
- each email is split by the delimiter and two new lines (`##||##\n\n`)
*/

// let emails = emailData.split('##||##\n\n');

// let emailCount = emails.length;

// function parseEmail(email) {
//   emailParts = {};
//   parts = email.split('#/#\n').map(part => {
//     return part.split(/[:]\s+/);
//   });

//   parts.forEach(part => {
//     if (part.length === 2) {
//       emailParts[part[0].toLowerCase()] = part[1];
//     } else {
//       emailParts['body'] = part[0];
//     }
//   })
//   return emailParts;
// }

// function coerceDate(email) {
//   parsedDate = email.date.split('-').map(Number)
//   date = new Date(parsedDate[2], parsedDate[0] - 1, parsedDate[1]);
//   email.date = date;
// }

// function dateSort(date1, date2){
//   if (date1 > date2) {
//     return 1
//   } else if (date1 < date2) {
//     return -1
//   } else {
//     return 0
//   }
// }

// const dateDisplay = {
//   weekday: 'short',
//   year: 'numeric',
//   month: 'short',
//   day: 'numeric',
// }

// let parsedEmails = emails.map(email => parseEmail(email))
// parsedEmails.forEach(email => coerceDate(email));

// let dateRange = parsedEmails.map(email => email.date);
// dateRange.sort((a, b) => dateSort(a, b));

// let firstEmailDate = dateRange[0].toLocaleDateString('en-US', dateDisplay).replace(/,/g, '');
// let lastEmailDate = dateRange[dateRange.length - 1].toLocaleDateString('en-US', dateDisplay).replace(/,/g, '');

// console.log(`Count of Email: ${emailCount}`);
// console.log(`Date Range: ${firstEmailDate} - ${lastEmailDate}`);

function mailCount(emailData) {
  let emails = emailData.split('##||##');
  let count = emails.length;
  let emailDates = emails.map(email => email.split('#/#')[2]);

  console.log('Count of Email: ' + count);
  console.log('Date Range: ' + displayableDateRange(emailDates));
}

function displayableDateRange(dates) {
  let dateObjects = getDateObjects(dates);
  dateObjects.sort((a, b) => a.valueOf() - b.valueOf());
  return dateObjects[0].toDateString() + ' - ' + dateObjects[dateObjects.length - 1].toDateString();
}

function getDateObjects(dates) {
  return dates.map(date => {
    let dateElements = date.split(' ')[1].split('-');
    let month = parseInt(dateElements[0], 10) - 1;
    let day = parseInt(dateElements[1], 10);
    let year = parseInt(dateElements[2], 10);
    return new Date(year, month, day);
  });
}

mailCount(emailData);