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

const findExactWeight = (user) => {
  const subjectExactWeight = _.find(user.allGrades, { weight: 1 });
  return subjectExactWeight.subjectName;
};

const result = findExactWeight(user);
console.log(result);
