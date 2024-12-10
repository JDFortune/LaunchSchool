let Student = require('./studentClass.js');

class School {
  #students = [];
  #VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th'];

  addStudent(name, year) {
    if (this.#VALID_YEARS.includes(year)) {
      let student = new Student(name, year)
      this.#students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  }

  enrollStudent(student, courseName, courseCode) {
    student.addCourse({ name: courseName, code: courseCode });
  }

  addGrade(student, courseName, grade) {
    let course = this.#getCourse(student, courseName);

    if (course) course.grade = grade;
  }

  getReportCard(student) {
    student.listCourses().forEach(({name, grade}) => {
      console.log(`${name}: ${grade ? grade : 'In Progress'}`);
    });
  }

  courseReport(courseName) {
    let grades = [];

    this.#getStudents().forEach(student => {
      let course = this.#getCourse(student, courseName);
      if (course && course.grade) {
        grades.push({name: student.name, grade: course.grade});
      }
    });

    if (grades.length === 0) {
      return undefined
    } else {
      console.log(`=${courseName}=`);
      grades.forEach(el => console.log(`${el.name}: ${el.grade}`));
      
      console.log('---');
      let average = grades.map(({grade}) => grade).reduce((total, g) => total + g, 0) / grades.length;
      console.log('Course Average: ' + average);
    }
  }

  #getCourse(student, courseName) {
    return student.listCourses().find(course => course.name === courseName);
  }

  #getStudents() {
    return this.#students;
  }
}

let school = new School;

let paul = school.addStudent('Paul', '3rd');
school.enrollStudent(paul, 'Math', 101);
school.enrollStudent(paul, 'Advanced Math', 102);
school.enrollStudent(paul, 'Physics', 202);
school.addGrade(paul, 'Math', 95);
school.addGrade(paul, 'Advanced Math', 90);

let mary = school.addStudent('Mary', '1st');
school.enrollStudent(mary, 'Math', 101);
school.addGrade(mary, 'Math', 91);

let kim = school.addStudent('Kim', '2nd');
school.enrollStudent(kim, 'Math', 101);
school.enrollStudent(kim, 'Advanced Math', 102);
school.addGrade(kim, 'Math', 93);
school.addGrade(kim, 'Advanced Math', 90);

console.log('Paul grades');
school.getReportCard(paul);
console.log('');

school.courseReport('Math');
console.log('');

school.courseReport('Advanced Math');
console.log('');

console.log(school.courseReport('Physics'));