/*
Write a function that takes one argument, an array of integers, and returns the average of all the 
integers in the array, rounded down to the integer component of the average. The array will never be 
empty, and the numbers will always be positive integers.
*/

/*
PEDAC

Input: An array of positive integers

Output: Average of the array of integers, rounded to the nearest integer 

Explicit Requirements
- The program will take an array of integers
- The integers will always be positive, and the array will never be empty
- The average should be rounded to the nearest integer component of the average
- The function takes one argument (one array)

Implicit Requirements
- "Rounded down to the nearest integer component of the average" means to round down to the nearest whole number.
I.e., 26.9 becomes 26. 
- 

Mental Model 

The program will take the array of integers. It will iterate through the array and find the average. It will 
then round down the average to the nearest integer. 

Examples / Test Cases

Data Structures 
The program will take an array as an input, and iterate through the array to find the average. 

Algorithm
- Take the array as an input
- Set avg = 0
- For each element in the array
  - element * (1/array.length)
- Round avg down to the nearest integer (math.floor)
- Return avg

*/

// Code with intent

const average = (array) => {
  return Math.floor(
    array.reduce((acc, ele) => {
      acc += ele * (1 / array.length);
      return acc;
    }, 0)
  );
};

const average2 = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return Math.floor(sum / array.length);
};

const average3 = (array, average = 0, index = 0) => {
  if (index >= array.length) {
    return Math.floor(average);
  }

  average += array[index] / array.length;
  index += 1;

  return average3(array, average, index);
};

// Examples

console.log(average([1, 5, 87, 45, 8, 8])); // 25
console.log(average([9, 47, 23, 95, 16, 52])); // 40

console.log(average2([1, 5, 87, 45, 8, 8])); // 25
console.log(average2([9, 47, 23, 95, 16, 52])); // 40

console.log(average3([1, 5, 87, 45, 8, 8])); // 25
console.log(average3([9, 47, 23, 95, 16, 52])); // 40

/*
Notes and reflection

I'm wonding if I can use the reduce f(x) by multiplying each of the elements by 1/array.length and adding them to
the accumulator. I could also use for_each in this same way. There may also be a sum. Wonder if there's 
a more elegant way to do this.

*/
