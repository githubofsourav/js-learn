const pets = ["dog", "cat", "rabbit", "hamster"];
// sort pets array alphabetically
const sortedPets = pets.sort();
console.log('sortedPets:',sortedPets);

const grades = [88, 94, 72, 99, 53, 77];
// asc
const ascGrades = grades.sort((a, b) => (a - b));
console.log('ascGrades:', ascGrades);

// desc
const descGrades = grades.sort((a, b) => (b - a));
console.log('descGrades:', descGrades);
