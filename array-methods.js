// array-methods.js
// Create and use forEach and the Map methods.
// Use filter & reduce methods according to requirement 17.

// Example usage:
// forEach
const array = [1, 2, 3];
array.forEach(item => console.log(item));

// Map
const mappedArray = array.map(item => item * 2);

// Filter
const filteredArray = array.filter(item => item > 1);

// Reduce
const reducedValue = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
