const grades = [99, 83, 87, 91, 77];

//Find the first grade that is less than 80.
const firstGradeLessThan80 = grades.find(grade => grade < 80);
console.log('firstGradeLessThan80:', firstGradeLessThan80);

//Find the index of the first grade that is over 80.
const firstGradeOverThan80 = grades.findIndex(grade => grade > 80);
console.log('firstGradeOverThan80:',firstGradeOverThan80);
