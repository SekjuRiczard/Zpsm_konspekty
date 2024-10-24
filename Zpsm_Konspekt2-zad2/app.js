const _ = require("lodash");

const tab = [1, 2, 3, 4, 5, 6, 7, 8];
const avg = _.mean(tab);
const min = _.min(tab);
const max = _.max(tab);
console.log(
  "srednia: ",
  avg,
  " wartosc minimalna: ",
  min,
  " wartosc maksymalna: ",
  max
);
