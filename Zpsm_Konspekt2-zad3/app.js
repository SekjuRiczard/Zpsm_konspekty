const _ = require("lodash");

const user = {
  name: "Damian",
  surname: "Kowalski",
  allGrades: [
    { subjectName: "Matematyka", grades: [5, 4, 3, 2, 1], weight: 3 },
    { subjectName: "Fizyka", grades: [3, 3, 5, 2], weight: 1 },
    { subjectName: "Chemia", grades: [4, 3, 3.5], weight: 5 },
  ],
};

const calculateWeightedAverages = (user) => {
  console.log(user.name, "", user.surname);
  user.allGrades.forEach((subject) => {
    const { grades, weight } = subject;
    let totalTop = 0;
    let totalBottom = 0;

    grades.forEach((grade) => {
      totalTop += grade * weight;
      totalBottom += weight;
    });

    const weightedAverage = totalTop / totalBottom;
    console.log(
      `Średnia ważona dla ${subject.subjectName}: ${weightedAverage}`
    );
  });
};

calculateWeightedAverages(user);
