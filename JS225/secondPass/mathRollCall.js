let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall(students) {
  return function() {
    rollCall('Math', subjects['Math']);
  }
}

let mathRollCall = makeMathRollCall(subjects['Math']);
mathRollCall();
// => Math:
// => Fatima
// => Gary
// => Susan