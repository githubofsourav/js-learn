const condiments = ['ketchup', 'mustard', 'relish', 'mayo'];
// Use reverse to change the order of this array.
condiments.reverse();
console.log('Reversed condiments:', condiments);


const employees = ['Adams', 'Carter', 'Davis', 'Fraklin', 'Zappa'];
// Use reverse to change the order of this array,
// but keep the original array intact.

// Use spread operator, we can copy the contents of one array to another.
const reversedEmployees = [...employees];
reversedEmployees.reverse();

console.log('Employees:', employees);
console.log('reversedEmployees:', reversedEmployees);