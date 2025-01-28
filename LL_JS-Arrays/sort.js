const pets = ["dog", "cat", "rabbit", "hamster"];

const grades = [88, 94, 72, 99, 53, 77];

// sort descending
const descGrades = grades.sort((a, b) => b - a);
console.log('descGrades', descGrades);
// sort ascending
const ascGrades = grades.sort((a, b) => a - b);
console.log('ascGrades', ascGrades);
