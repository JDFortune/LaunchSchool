"use strict";

const EXAM_WEIGHT = 0.65;
const EXERCISE_WEIGHT = 0.35;

function generateClassRecordSummary(scores) {
  let studentScores = Object.keys(scores).map(student => {
    return scores[student].scores;
  });
  let examGrades = groupGradesByExam(studentScores.map(studentObj => {
    return studentObj.exams;
  }));

  return {
    studentGrades: getStudentGrades(studentScores),
    exams: getExamStats(examGrades),
  };
}

function getStudentGrades(scores) {
  scores = scores.map(student => {
    let examAvg = student.exams.reduce((total, score) => {
      return total + score;
    }) / student.exams.length;

    let exerciseTotal = student.exercises.reduce((total, score) => {
      return total + score;
    });

    return Math.round((examAvg * EXAM_WEIGHT) +
                      (exerciseTotal * EXERCISE_WEIGHT));
  });

  return scores.map(grade => `${grade} (${letterGrade(grade)})`);
}

function letterGrade(grade) {
  if (grade >= 93) {
    return 'A';
  } else if (grade >= 85) {
    return 'B';
  } else if (grade >= 77) {
    return 'C';
  } else if (grade >= 69) {
    return 'D';
  } else if (grade >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function groupGradesByExam(exams) {
  let scoresByExam = [];

  for (let examIndex = 0; examIndex < exams[0].length; examIndex++) {
    let examGrades = [];
    exams.forEach(studentGrades => examGrades.push(studentGrades[examIndex]));
    scoresByExam.push(examGrades);
  }

  return scoresByExam;
}

function getExamStats(exams) {
  return exams.map(examGrades => {
    return {
      average: getAverage(examGrades),
      minimum: getMinimum(examGrades),
      maximum: getMaximum(examGrades),
    };
  });
}

function getMaximum(examGrades) {
  return Math.max(...examGrades);
}


function getMinimum(examGrades) {
  return Math.min(...examGrades);
}

function getAverage(examGrades) {
  return Number((examGrades.reduce((total, score) => {
    return total + score;
  }) / examGrades.length).toFixed(1));
}

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));
