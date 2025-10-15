/*
Create a function that takes an array of integers as an argument. Determine and return the index N 
for which all numbers with an index less than N sum to the same value as the numbers with an index 
greater than N. If there is no index that would make this happen, return -1.

If you are given an array with multiple answers, return the index with the smallest value.

The sum of the numbers to the left of index 0 is 0. Likewise, the sum of the numbers to the right of 
the last element is 0.
*/

/*
PEDAC
Problem
Write a function that accepts an array of numbers as an argument. Return the index where all numbers less than
that index sum to the same value as the numbers greater than that index. 

Examples / Test cases
Requirements
- Accept an array of numbers as an argument
- Return the index where all numbers less than that index sum to the same value as the numbers greater than 
that index
- In other words, the index is splitting the array in two halves around the index. In order for the index to be 
a valid index, both of those halves should have the same value
- Return -1 if there is no valid index
- If the index is at the end of the array (0 or arr.length - 1), then the left-hand or right hand sides, respectively,
will equal 0, so the remainder of the array must equal 0. 
- The sum of the values being returned do not include the current index.

Data Structures
Intermediate: Ok, this is a pretty trick problem, but it can be broken down into two main parts: The 
first part is to calculate the value on the left and right hand side of the index. The second part is 
to iterate through the indices. If the index is a "balancedIndex" you could call it, that index should
be returned, and the iteration is over. 

Algorithm
The function accepts an array of numbers as an argument. For each index in the array, calculate the 
values of the values at the indices to the left and right of the current index, and check to see if they
are equal. If they are equal, return the current index. Otherwise, if the iteration termiantes without finding
a balanced index, return -1. 

Step by step
- Accept an array of numbers as an argument
- For each index in the array: 
  - Check to see if the sum of the numbers before the current index and after the current index
  are euqal
    - If they are equal, return the index to the caller and terminate the function 
- Return - 1

Helper: Check to see if the current index has a balanced sum (hasBalancedSum)
- Accept an index and the array as arguments
- Take a subset of the array from 0 to the current index and obtain its sum
- Take a subset of the array from the current index to the end of the array and obtain its sum
- Check if the values are equal
- Return true if they are, false if they are not 

*/

const hasBalancedSum = (index, array) => {
  let leftSum = array.slice(0, index).reduce((acc, cv) => acc + cv, 0);
  let rightSum = array
    .slice(index + 1, array.length)
    .reduce((acc, cv) => acc + cv, 0);

  return leftSum === rightSum;
};

const equalSumIndex = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (hasBalancedSum(i, array)) {
      return i;
    }
  }
  return -1;
};

const p = console.log;
p(equalSumIndex([1, 2, 4, 4, 2, 3, 2]) === 3);
p(equalSumIndex([7, 99, 51, -48, 0, 4]) === 1);
p(equalSumIndex([17, 20, 5, -60, 10, 25]) === 0);
p(equalSumIndex([0, 2, 4, 4, 2, 3, 2]) === -1);

// The following test case could return 0 or 3. Since we're
// supposed to return the smallest correct index, the correct
// return value is 0.
p(equalSumIndex([0, 20, 10, -60, 5, 25]) === 0);
