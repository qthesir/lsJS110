/*
Write a function that takes an integer argument and returns an array containing 
all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.
*/

/*
PEDAC

Problem

Input: An integer 

Output: An array that contains all the integers between 1 and the input value

Explicit Assumptions
- The program will take an integer as an argument
- The input will always be a positive integer
- The program will output an array that contains values between 1 and the input value, inclusive
- The output will be in ascending order 

Implicit Assumptions

Mental Model
The program will take a positive integer as an input. It will construct an array with elements between 1
and the input value. It will return the array to the user. 

Examples / Test Cases
(see abovee) 

Data Structures
The program will take a positive integer as an input, use it to construct an array, and output 
the array.

Algorithm
- Take number as an input 
- Set output to an empty array
- While number > 0:
  - Add number to the empty array in the first position
  - Subtract 1 from number
- Return output array to the user 
*/

// Code with intent

const sequence = (number) => {
  let output = [];
  while (number > 0) {
    output.unshift(number);
    number--;
  }
  return output;
};

// Examples:

console.log(sequence(5)); // [1, 2, 3, 4, 5]
console.log(sequence(3)); // [1, 2, 3]
console.log(sequence(1)); // [1]

