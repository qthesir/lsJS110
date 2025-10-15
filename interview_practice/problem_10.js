/*
Problem
Write a function that takes a string of numbers as an argument, and returns the number
of even substrings. 

Examples / Test Cases
Requirements
- Accept a string of numbers as an argument
- Return the count of even-numbered substrings
- In this case, you should identify all substrings. Every possible combination of 
numbers in the string. 
- The substrings are directional. A reversed version of the substring should not be 
considered. 

Data Structure
Intermediate: This is pretty straightforward. I should do a for each, taking a slice of 
each of the substrings as I iterate through, then checking to see if, when coerced to a number,
the modulo of that number equals 0. If it does, add it to the count.

Algorithm
The function accepts a string of numbers as an argument. For each element, find all 
the substrings between the current element and the end of the string. Check to see
if each substring is even. If it is, increment a count by one. When the iteration 
is complete, return the count to the caller.

Step by step
- Accept a string of numbers as an argument
- SET count = 0
- For each character in the string:
  - For each subsequent character after the current character:
    - Check to see if the substring between the current character and the subsequent 
    character is even
    - If it is even, increment count by one
- Return count

*/

const evenSubstrings = (numberString) => {
  let evenSubstrings = 0;
  for (let i = 0; i < numberString.length; i++) {
    for (let j = i + 1; j <= numberString.length; j++) {
      if (Number(numberString.slice(i, j)) % 2 === 0) {
        evenSubstrings += 1;
      }
    }
  }
  return evenSubstrings;
};

const p = console.log;
p(evenSubstrings("1432") === 6);
p(evenSubstrings("3145926") === 16);
p(evenSubstrings("2718281") === 16);
p(evenSubstrings("13579") === 0);
p(evenSubstrings("143232") === 12);
