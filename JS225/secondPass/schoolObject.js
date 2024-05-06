let createStudent = require('./studentObject.js');

let school = function(name) {
  const students = [];
  const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th']

  function getCourse(student, courseName) {
    return student.listCourses().find(course => course.name === courseName);
  }

  return {
    name,

    addStudent(name, year) {
      if (VALID_YEARS.includes(year)) {
        let student = createStudent(name, year)
        students.push(student);
        return student;
      } else {
        return 'Invalid Year';
      }
    },
  
    enrollStudent(student, course) {
      student.addCourse(course);
    },

    addGrade(student, courseName, grade) {
      let course = getCourse(student, courseName);

      if (course) {
        course.grade = grade;
      } else {
        return `${student.name} is not enrolled in this course.`;
      }
    },

    getReportCard(student) {
      student.listCourses().forEach(course => {
        console.log(`${course.name}: ${course.grade ? course.grade : 'In Progress'}`); 
      });
    },

    courseReport(courseName) {
      let courseGrades = [];

      students.forEach(student => {
        let course = getCourse(student, courseName);
        if (course && course.grade) {
          courseGrades.push({ name: student.name, grade: course.grade });
        }
      });
      if (courseGrades.length > 0) {
        console.log(`=${courseName} Grades=`);
        courseGrades.forEach(({name, grade}) => console.log(`${name}: ${grade}`));
        console.log('---');

        let average = courseGrades.map(({grade}) => grade)
                                  .reduce((total, num) => total + num) / courseGrades.length;
        console.log(`Course Average: ${Math.round(average)}`);
      } else {
        console.log(undefined);
      }
    },
  }
}('Oxford');


let paul = school.addStudent('Paul', '3rd');
let mary = school.addStudent('Mary', '2nd');
let kim = school.addStudent('Kim', '1st');

school.enrollStudent(paul, { name: 'Math', code: 101 });
school.enrollStudent(paul, { name: 'Advanced Math', code: 102 });
school.enrollStudent(paul, { name: 'Physics', code: 202 });
school.addGrade(paul, 'Math', 95);
school.addGrade(paul, 'Advanced Math', 90);

school.enrollStudent(mary, { name: 'Math', code: 101 });
school.addGrade(mary, 'Math', 91);

school.enrollStudent(kim, { name: 'Math', code: 101 });
school.enrollStudent(kim, { name: 'Advanced Math', code: 102 });
school.addGrade(kim, 'Math', 93);
school.addGrade(kim, 'Advanced Math', 90);


school.getReportCard(paul);

school.courseReport('Math');

school.courseReport('Advanced Math');

school.courseReport('Physics');