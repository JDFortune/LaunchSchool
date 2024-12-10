class Student {
  #courses;

  constructor(name, year) {
    this.name = name;
    this.year = year;
    this.#courses = [];
  }

  info() {
    console.log(`${this.name} is a ${this.year} year student.`);
  }

  listCourses() {
    return this.#courses;
  }

  addCourse(course) {
    this.#courses.push(course);
  }

  addNote(courseCode, note) {
    let course = this.#getCourse(courseCode);

    if (course) {
      course.note = course.note ? course.note + '; ' + note : note;
    }
  }

  updateNote(courseCode, note) {
    let course = this.#getCourse(courseCode);
    if (course) course.note = note;
  }

  viewNotes() {
    this.#courses.forEach(course => {
      if (course.note) console.log(`${course.name}: ${course.note}`);
    });
  }

  #getCourse(courseCode) {
    return this.#courses.find(course => course.code === courseCode);
  }
}

module.exports = Student;