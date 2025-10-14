/*
PEDAC

Problem 
Write a function that takes an array of numbers, and returns an array with the pair of numbers
that are closest in value. 

Examples / Test Cases
Requirements
- Accept an array of numbers as an argument
- Return an array that contains a the two numbers that are closest in value
- If there are multiple pairs of numbers that are equally close, choose the first 
pair that appear in the array 
- The difference is based on the absolute value of the difference 

Data Structures
Input: Array of numbers
Output: An array containing a pair of two numbers that are closest in value
Intermediate: I should iterate through the array, and then compare the current 
index to each number coming after the current index, and use a "min pair" variable,
and update it to the current pair if the current pair is less than the currently 
captured pair. 

Algorithm
Accept an array of numbers as an argument. For each number, compare the current
number to all the numbers that come after it in the array. If the pair of numbers
evaluated has a difference that is less than the current identified pair of numbers,
then update the pair of numbers to be that value. When the iteration terminates, 
return that final pair of numbers to the caller.

Step by step
- Accept an array of numbers 'numArray' as an argument
- SET minDifferencePair = [Infinity, 0]
- For each number in numArray:
  - For each number that comes after number in numArray:
    - If the absolute value of the difference between the current number and 
    the subsequent number is less than the difference of the minDifferencePair
      - Update the minDifferencPair with the new pair
- Return minDifferencePair to the caller 

*/

const closestNumbers = (numArray) => {
  let minDifferencePair = [Infinity, 0];
  numArray.forEach((number, index) => {
    numArray.slice(index + 1, numArray.length - 1).forEach((subsequentNumber) => {
      if (
        Math.abs(minDifferencePair[0] - minDifferencePair[1]) >
        Math.abs(number - subsequentNumber)
      ) {
        minDifferencePair = [number, subsequentNumber];
      }
    });
  });
  console.log(minDifferencePair);
  return minDifferencePair;
};

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(closestNumbers([5, 25, 15, 11, 20]), [15, 11]));
p(eq(closestNumbers([19, 25, 32, 4, 27, 16]), [25, 27]));
p(eq(closestNumbers([12, 22, 7, 17]), [12, 7]));
