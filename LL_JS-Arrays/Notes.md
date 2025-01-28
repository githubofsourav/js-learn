# JavaScript: Arrays

## Arrays: Overview

- Type of object
- Flexible
- List-like
- Built-in properties and methods
- Clean, succint code

## Arrays: Properties and Methods

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

## forEach() method

- Executes a function(callback function) once for each element within an array
- Original array does not change
- Callback function
  - eg:
    - function(currentValue, index, array)
    - array.forEach(function(currentValue, index, array), thisArg), `thisArg -> optional parameter`

## sort() method

- By default, an array is sorted in ascending order.
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
