/*
Create a function that takes a single integer argument and returns the sum of all the multiples of 7 or 11 
that are less than the argument. If a number is a multiple of both 7 and 11, count it just once.

For example, the multiples of 7 and 11 that are below 25 are 7, 11, 14, 21, and 22. The sum of 
these multiples is 75.

If the argument is negative, return 0.

*/

/*
PEDAC
Problem
Write a function that accepts a single integer as an argument, and returns the sum of all the integers less than
the argument that are multiples of 7 and 11. If the number is both a multiple of 7 or 11, only include the number
in the sum once

Examples
Requirements
- Accept an integer as an argument
- Return the sum of all the integers less than the argument that are mulitples of 7 or 11. 
- If the number is a multiple of both 7 and 11, include it just once
- It is less than the integer, not inclusive of the integer, when determining the multiples to sum
- If the argument is negative, return 0
- The above can be restated: If the argument is less than 7, return 0

Data Structures
Intermediate: The brute force approach to this problem would be to go through every single number less than the input, 
check if it is a multiple of 7 or 11, and if it is, add it to the sum. An alternative, cheaper approach 
would be to first iterate through the multiples of 7, and then iterate through multiples of 11, and don't 
include the multiple twice if that number has already occured. So you'd have to keep track of the numbers in 
an array. I'm going to go with the more efficient solution.

Alogirhtm
Accept an integer as an argument. If it is less than or equal to 7, return 0. Declare and initialize an
empty array for the output. Iterate through the multiples of 7 and 11, in sequence, and add the multiple to
the array if it is not already in the array. Sum the array, and return the sum to the caller.

Step by step
- Accept int as an argument
- If int < 7 return 0
- SET multiplesToSum = []
- Let multipleOfSeven = 7
- While (multipleOfSeven < int) {
  - Add multipleOfSeven to multiplestoSum
  - mutlipleOfSeven += 7
}
- let multipleOfEleven = 11
- While (multipleOfEleven < int) {
  if (multipleOfEvelen is not in multiplesToSum)
    - Add multiple of eleven to multiplesToSum
  = MultipleOfEleven += 11
}
- Sum multiples to sum
- Return the sum to the caller 

*/

const sevenEleven = (int) => {
  if (int < 7) return 0;
  let multiplesToSum = [];

  // Iterate through multiples of 7
  let multipleOfSeven = 7;
  while (multipleOfSeven < int) {
    multiplesToSum.push(multipleOfSeven);
    multipleOfSeven += 7;
  }

  // Iterate through multiples of 11
  let multipleOfEleven = 11;
  while (multipleOfEleven < int) {
    if (!multiplesToSum.includes(multipleOfEleven)) {
      multiplesToSum.push(multipleOfEleven);
    }
    multipleOfEleven += 11;
  }

  return multiplesToSum.reduce((acc, cv) => acc + cv);
};

const sevenElevenBruteForce = (int) => {
  if (int < 7) return 0;

  let currentNum = 7;
  let total = 0;
  while (currentNum < int) {
    if (currentNum % 7 === 0 || currentNum % 11 === 0) {
      total += currentNum;
    }
    currentNum++;
  }

  return total;
};

const p = console.log;
p(sevenEleven(10) === 7);
p(sevenEleven(11) === 7);
p(sevenEleven(12) === 18);
p(sevenEleven(25) === 75);
p(sevenEleven(100) === 1153);
p(sevenEleven(0) === 0);
p(sevenEleven(-100) === 0);

p(sevenElevenBruteForce(10) === 7);
p(sevenElevenBruteForce(11) === 7);
p(sevenElevenBruteForce(12) === 18);
p(sevenElevenBruteForce(25) === 75);
p(sevenElevenBruteForce(100) === 1153);
p(sevenElevenBruteForce(0) === 0);
p(sevenElevenBruteForce(-100) === 0);
