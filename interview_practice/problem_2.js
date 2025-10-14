/*
Create a function that takes an array of integers as an argument. The function should return the 
minimum sum of 5 consecutive numbers in the array. If the array contains fewer than 5 elements, 
the function should return null.

*/

// Examples

/*
PEDAC

Problem 
Write a function that accepts an array as an argument, and returns the minimum sum of 5 consequetive numbers
in the input array. 

Examples / Test Cases
Requirements
- Accept an array of numbers of an input
- Input numbers can be positive or negative
- Return the lowest sum of 5 consequetive numbers in the input array out of all possible sums of 5 
consequetive numbers than can be evaluated
- If the array contains less than 5 elements, return null 

Data Structures
Input: Array of numbers 
Output: The minimum sum of 5 consequetive numbers of the input array
Intermediate: I will have to create an array of all the possible sums in the array. Or, maybe not...
Maybe I can have a single value, which is the minimum sum, which I set to any value that is lower than
the current minimum sum as I iterate through the possibilities. Thats what I'll do. 

Algorithm 
Overview 
The function takes an array of numbers as an input. It first checks to see if the array contains at least 5
elements. If it does not, the function returns null to the caller. If it does, then the function iterates through
each possible 5 number sum, and, if the sum is lower than the last computed sum, sets the output value equal
to that sum. It then returns the output value to the caller. 

Step by step
- Accept an array of numbers as an input
- If the array.length is less than 5, return null
- SET minimumSum = infinity
- For each index in the array, while the current index + 5 < array.length:
  - Sum the element at the current index with the elements at the subsequent 4 indices 
  - If the sum is less than the current minimumSum, assign the minimumSum to the recently computed sum
- Return minimumSum

HELPER: Sum the elements at the current index with the elements at the subsequent 4 indices
- Accept a subset of the array that is from the current index and the current index + 4
- SET output = 0
- For each number:
  output += number
- Return number

*/

const minimumSum = (array) => {
  if (array.length < 5) return null;
  let minimumSum = Infinity;

  for (let i = 0; i + 4 < array.length; i++) {
    let currentSum = array.slice(i, i + 5).reduce((acc, cv) => acc + cv, 0);
    if (currentSum < minimumSum) {
      minimumSum = currentSum;
    }
  }

  return minimumSum;
};

const p = console.log;
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
