/*
Write a function that takes two array arguments, each containing a list of numbers, and 
returns a new array containing the products of all combinations of number pairs that 
exist between the two arrays. The returned array should be sorted in ascending numerical 
order.

You may assume that neither argument will be an empty array.
*/

/*
PEDAC

Problem

Input: Two arrays with a list of numbers

Output: An array containing the products of all the combinations of numbers in 
the two arrays.

Explicit Requirements
- The function will accept two arrays as an argument
- The arrays will contain a list of numbers
- The function should take the product of all the combinations of numbers in the two arrays
- The return array should be sorted in ascending order, from lowest to highest 
- Neither array will be empty

Implicit Requirements
- 

Mental Model
The program will take two arrays of numbers as an input. It will compute the product of each number combination 
(believe this would be a permutation or combination) and construct a new array. It will sort the new array in
ascending order and return it to the caller.

Examples / Test Cases

Data Structure

The program will accept two arrays as an argument, iterate throught the two arrays, and create a new array,
which will be returned as an output. 

Algorithm
- Accept two arrays as an argument
- Create a new output array
- Iterate through the first array
  - For each element in the first array, calculate the product of that element multiplied by each 
  element in the second array. Insert the results into the output array.
- Sort the output array in ascending order
- Return the result to the user 
*/

// Code with intent

const multiplyAllPairs = (arr1, arr2) => {
  let output = [];
  arr1.forEach((number1) => {
    arr2.forEach((number2) => {
      output.push(number1 * number2);
    });
  });

  output.sort((a, b) => a - b);

  return output;
};

const multiplyAllPairs2 = (arr1, arr2) => {
  return arr1
    .reduce((output, number1) => {
      arr2.forEach((number2) => output.push(number1 * number2));
      return output;
    }, [])
    .sort((a, b) => a - b);
};

// Examples:

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
console.log(multiplyAllPairs2([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
