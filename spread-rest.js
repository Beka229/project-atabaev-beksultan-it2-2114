// spread-rest.js
// Use spread operator with Array Literals and Spread with Objects.
// Use Rest params according to requirement 16.

// Example usage:
// Spread with Arrays
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];

// Spread with Objects
const obj1 = { key1: 'value1' };
const obj2 = { ...obj1, key2: 'value2' };

// Rest params
function exampleFunction(...args) {
  console.log(args);
}

exampleFunction(1, 2, 3);
