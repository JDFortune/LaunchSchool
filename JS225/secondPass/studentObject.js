function createStudent(name, year) {
  let courses = [];

  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${name} is a ${year} year student`);
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
        course.note = course.note ? course.note + '; ' + note : note;
      }
    },

    updateNote(code, note) {
      let course = getCourse(code);
      if (course) {
        course.note = note;
      }
    },
    
    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    getCourse(code) {
      return this.courses.find(course => course.code === code);
    },
  }
}

module.exports = createStudent;