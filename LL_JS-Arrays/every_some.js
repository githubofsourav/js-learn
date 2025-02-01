const states = [
    'California',
    'New York',
    'New Jersey',
    'Alaska',
    'New Mexico',
    'Montana',
];
  
//Use this handy string method to find the solution: startsWith("New")

//Do some of the states in the array start with "New"?
const someStartsWithNew = states.some((state) => state.startsWith('New'));
console.log(someStartsWithNew);

//Does every state in the array start with "New"?
const everyStartsWithNew = states.every((state) => state.startsWith('New'));
console.log(everyStartsWithNew);
