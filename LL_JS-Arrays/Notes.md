# JavaScript: Arrays

## 1. Arrays: The Basics
### Arrays: Overview

- Type of object
- Flexible
- List-like
- Built-in properties and methods
- Clean, succint code

### Arrays: Properties and Methods

- `array.length`: Returns the number of items in an array
- Arrays in JS are '0' based indexing.

eg:

```javascript
const arr = ["Tim", "Jhonny", "Luke"];
// Points to 1'st value i.e., Tim
console.log(arr[0]);

// Direct Assignment, changes arr[0] value to "Jake"
arr[0] = "Jake"; 
```

### forEach() method

- Executes a function(callback function) once for each element within an array
- Original array does not change
- Callback function
  - eg:
    - function(currentValue, index, array)
    - array.forEach(function(currentValue, index, array), thisArg), `thisArg -> optional parameter`

## 2. Working with Ordered Data
### sort() method

- By default, an array is sorted in ascending order. **Manipulates/Mutates** the original array.
- By default, it converts the elements to strings and compares them lexicographically (like alphabetical order), but you can customize the sorting logic using a **compare function**.
- Compare Function
  - array.sort(function(a, b) { return a -b })
  - array.sort((a, b) => { a - b }) // ES6 syntac
- The compare function can alter the sort order. The function can return a value of **positive**, **negative** or **zero**.
  - eg:

    ```md
    arrays.sort((a, b) => { a - b})
    a - b = +ve -> b sorted before value a
    a - b = -ve -> a sorted before value b
    a - b = 0 -> items stay in the same order
    ```

### reverse() method

- Reverse the order of an array.
- **Implementation**: array.reverse()
- **Important**: the original array will be changed once reverse() is applied.
- e.g:
  ```javascript
    const numbers = [0, 1, 2, 3];
    numbers.reverse(); // [3, 2, 1, 0]
  ```
- `Note`: Use spread operator(...) on array to copy contents of one array to another.
  - e.g:
  ```javascript
  const employees = ['Adams', 'Carter', 'Davis', 'Fraklin', 'Zappa'];
  // Use reverse to change the order of this array,
  // but keep the original array intact.

  // Use spread operator, we can copy the contents of one array to another.
  const reversedEmployees = [...employees];
  reversedEmployees.reverse();

  console.log('Employees:', employees); // ['Adams', 'Carter', 'Davis', 'Fraklin', 'Zappa']
  console.log('reversedEmployees:', reversedEmployees); // [ 'Zappa', 'Fraklin', 'Davis', 'Carter', 'Adams' ]
  ```

### Find a single element with find() and findIndex()

- `find()` and `findIndex()` returns the first element or index that passes the testing function.
- Need More Than One Element? Use **filter()**, *NOT* find() or findIndex().
- First matching value returned.
- Both array methods use the same syntax.
- `find()`: Returns the first element that passes the testing function. No match? Returns **undefined**.
- `findIndex()`: Returns the first index that passes the testing function. No match? Returns **-1**.
- **Callback Function**: function(element, index, array)