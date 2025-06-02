/*
Write a function that takes one argument, a positive integer, and returns a list of the digits in the number.
*/

/*
PEDAC 

Problem

Input: A positive integer

Output: A list of each of the digits in that integer

Explicit Assumptions:
1. The program takes a single positive integer as an argument
2. It returns a list of the digits in the number, with each digit occupying 1 element in the array.

Implicit Assumptions:
1. The order of the digits in the list will match the order of the digits in the input positive integer. 
2. The digits in the output array will be number type 


Mental Model
The program takes a single positive integer as an argument. It parses the integer, and inserts each of its 
individual digits into an output array. That output array is then returned to the caller.

Examples / Test Cases

Data Structures 
The program will take a positive integer as an input and ouptut an array. Its a question of whether or not 
to use an arithmetic method to extract the digits, or simply turn them into a string, split it, and turn each
digit back into a number type using the Map array method. I think I'm going to start with the string since
I have a clear idea of how I'm going to do that, then I'll go into the arithmetic method for practice.

The arithmetic method, I would guess, is more computationally efficient. 

Algorithm
- Take a positive integer as an input
- Turn the integer into a string
- Split the string into an array
- Turn each digit into a number type 
- Return the array to the caller

Algorithm 2: Arithmetic
- Take a positive integer as an input
- Save output as digitsArray
- While integer is > 1,
  - Take the modulo of the integer and save the remainder 
  - Add the remainder to the digitsArray, at the 0th index
  - Subtract the remainder from the integer and divide by 10 and set that value to the integer
- Return the digitsArray to the caller 

*/

// Code with intent

// Using string transformations
const digitList = (num) => {
  return String(num).split("").map(x => Number(x))
}

// Using arithmetic 
const digitList2 = (num) => {
  let digitsArray = []
  while (num >= 1) {
    let remainder = num % 10
    digitsArray.unshift(remainder)
    num = (num - remainder) / 10
  }
  return digitsArray
}

// Examples

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]

console.log(digitList2(12345));       // [1, 2, 3, 4, 5]
console.log(digitList2(7));           // [7]
console.log(digitList2(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList2(444));         // [4, 4, 4]

/*
Notes and Reflections

I could either represent this as a string and perform string operations, or I could use math to isolate each 
digit. 

Easy thing to do would be to do the string method. Harder would be to do the math method. I've done both before,
so...
*/