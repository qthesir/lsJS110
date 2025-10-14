/*
Create a function that takes an array of numbers as an argument. For each number, determine how many numbers 
in the array are smaller than it, and place the answer in an array. Return the resulting array.

When counting numbers, only count unique values. That is, if a number occurs multiple times in the array, 
it should only be counted once.
*/

// Examples

/*
PEDAC

Problem
Write a function that accepts an array of numbers as an argument, and returns an array that contains a count
of how many numbers are smaller than each number in the input array. 

Examples
Requirements
- Accept an array of numbers as an argument
- Return an output array which contains the counts of how many numbers are small than each number in the input
array.
- The count of numbers should only include unique values. That is, do not count a number if it appears twice
in the array.
- The count of the number in question should not be evaluated against itself

Data Structures
Input: An array of numbers
Output: Array which contains a count of how many numbers in the input array are smaller than the number at
the current index, for each number in the input array.
Intermediate: Will likely use the .map function here. For each element, iterate through the array, create a new 
array, and return its length. Could use reduce.

Algorithm
High level
The function accepts an array of numbers as an argument. For each number in the array, count how many of the 
other unique numbers in the input array are less than the current number, and add it to a new array. Return 
the new array to the caller. 

Step by step
Main function
- Accept an array of numbers as an input
- SET output = []
- For each number in the array of numbers:
  - Count how many unique numbers in the input array are less than the current number
  - Add the count to the output array
- Return the output array

HELPER: Count unique numbers that are less than the current number 
- Accept the current number and the array of numbers as an argument
- SET output = []
- For each number in the array of numbers:
  - If the current number > number && the number is not already in output
    - Add the number to the output array
- Return the length of the output array

*/

const countUniqueLesserNumber = (currentNumber, array) => {
  return array.reduce((acc, cv) => {
    if (currentNumber > cv && !acc.includes(cv)) {
      acc.push(cv);
    }
    return acc;
  }, []).length;
};

const smallerNumbersThanCurrent = (array) => {
  return array.map((number) => {
    return countUniqueLesserNumber(number, array);
  });
};

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));
