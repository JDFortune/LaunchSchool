function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(this.name + ' is a ' + this.year + ' year student');
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      return this.courses;
    },

    addNote(code, note) {
      let course = getCourse(code);
      if (course) {
        course.note = course.note ? course.note + `; ${note}` : note;
      }
    },

    updateNote(code, note) {
      let course = getCourseName(code);
      if (course) {
        course.note = note;
      }
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(course.name + ': ' + course.note);
        }
      });
    },

    getCourse(code) {
      return this.courses.find(currentCourse => currentCourse.code === code);
    },
  }
}

let school = (function() {
  const students = [];
  const REF = ['1st', '2nd', '3rd', '4th', '5th'];

  function getCourse(student, courseName) {
    return student.listCourses().filter(({name}) => name === courseName)[0];
  }
  
  return {
    courses: [
      { name: 'Math', code: 101, },
      { name: 'Advanced Math', code: 102, },
      { name: 'Physics', code: 202, },
    ],
    addStudent(name, year) {
      let student;
      if (REF.includes(year)) {
        student = createStudent(name, year);
        students.push(student);
        return student;
      } else {
        console.log('Invalid Year.');
      }
    },

    enrollStudent(student, courseName, courseCode) {
      let course = {name: courseName, code: courseCode};
      student.addCourse(course);
    },

    addGrade(student, courseName, grade) {
      const  course = getCourse(student, courseName);
      if (course) {
        course.grade = grade;
      }
    },

    getReportCard(student) {
      console.log(student.name);
      student.listCourses().forEach(({grade, name}) => {
        console.log(name + ': ' + String(grade || 'In progress'));
        });
    },

    courseReport(courseName) {
      const courseStudents = students.map(student => {
        const course = getCourse(student, courseName) || {
          grade: undefined
        };
        return {
          name: student.name,
          grade: course.grade,
        };
      }).filter(({grade}) => grade);

      if (courseStudents.length > 0) {
        console.log(`=${courseName} Grades=`);

        const average = courseStudents.reduce((total, {name, grade}) => {
          console.log(`${name}: ${String(grade)}`);
          return total + grade
        }, 0) / courseStudents.length;

        console.log('---');
        console.log(`Course Average: ${String(average)}`);
      }

    },

    getStudent(name) {
      return students.find(student => student.name === name);
    },
  }
})();

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

// console.log(school.students.find(student => student.name === 'paul'));
// console.log(school.students.find(student => student.name === 'Mary'));
// console.log(school.students.find(student => student.name === 'Kim'));

school.getReportCard(paul);
console.log();
school.courseReport('Math');
console.log();
school.getReportCard(mary);
console.log();
school.getReportCard(kim);
console.log();
school.courseReport('Advanced Math');
console.log();
school.courseReport('Physics');