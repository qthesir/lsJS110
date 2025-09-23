/* Write a function that takes an array of numbers and returns the sum of the sums of each 
leading subsequence in that array. Examine the examples to see what we mean. You may assume 
that the array always contains at least one number.
*/

/*

PEDAC

Problem
The problem is asking us to take an array of numbers, add the sum of sums of all the 
numbers in the array, and return that value. The sum of sums appears to be defined
in a specific way. Its not a combination or a permutation, but it appears to start
with the sum of just the first element, then the sum of the 1st and 2nd elements, then
the 1st, 2nd, and 3rd elements, and so on, until it sums all the values in the array, 
and then the returned result is the sum of those sums. 

Examples / Test Cases
Requirements
- The function will accept an array of numbers
- The array will have at least one value
- The function will return the sum of sums
- The sum of sums is defined as summing the 1st element, then summing the 1st and 
2nd element, then the 1st, 2nd, and 3rd element, and so on, until there are no elements
left in the array, and then those individual sums are summed into 1 sum, which is returned
as to the caller of the function. 
- No negative values

Data Structures

Input: Array of Numbers
Output: An integer sum of sums of the input array
Intermediate: I will probably use an accumulator to keep track of the sums. I may 
have to keep track of which indices I've already included. Hmmm... Actually, probably
not. I can just use a for loop with the index incremented by 1, and then loop through the
values of the array from 0 to the current index. 

Algorithm
Mental Model
The function will accept an array of integers as an input. It will loop through each element
of the array. For each element, sum the elements of the array from index 0 to the current
index in the loop, and add that sum to a sum of sums. Return the sum of sums to the 
caller. 

Step by Step
- Accept numArray as an input
- Declare the variable sumOfSums and initialize it to 0
- For each index in numArray,
  - Sum the value from 0 to the current index
  - Add the result to the sumOfSums
- Return sumOfSums to the caller 

Sum the value from 0 to the current index
- Accept the array and current index as an input
- Declare and initialize a variable sum
- For each element from 0 to current index:
  - Add the value of the element to sum
- Return sum to the caller 

*/

// Code with intent

const sum = (partialArray) => {
  return partialArray.reduce((acc, cv) => acc + cv)
};

const sumOfSums = (numArray) => {
  return numArray.reduce((acc, _, index, array) => acc + sum(array.slice(0, index + 1)))
};

// Examples

console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35

// The use of .map in one of the solutions is interesting. It does make sense to, since 
// you are creating a new value for each element. 