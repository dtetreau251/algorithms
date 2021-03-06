// --- Directions
// Write a program to implement a circular array
// You MUST use the "%" modular operator
// Use only a single Loop
// This takes two arguments, an array and an integer, n
// It console.logs every value of the array `n` times.
// It returns a new array of the array, duplicated `n` times.
// Think of the index as going in a "circle" around the array `n` times.
// --- Example
//   circularArray([1,2,3], 3);
//   1
//   2
//   3
//   1
//   2
//   3
//   1
//   2
//   3
// Return value = [1,2,3,1,2,3,1,2,3]

const circularArray = (array = [], n = 1) => {
  const result = [];
  const totalLoops = array.length * n;
  let i = 0;

  while (i < totalLoops) {
    let remainder = i % array.length;
    i++;

    console.log(array[remainder]);
    result.push(array[remainder]);
  }

  return result;
};

// Uncomment the below line and run this file with "node" to test the output
circularArray([1, 2, 3], 2);
