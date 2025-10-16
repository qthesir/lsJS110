/*
Create a function that takes an array of integers as an argument and returns the integer 
that appears an odd number of times. There will always be exactly one such integer in 
the input array.
*/

/*
PEDAC

Problem 
Write a function that takes an array of integers as an argument, and return the integer that appears an
odd number of times. Exactly one integer will appear in the input array

Examples / Test Cases
- Accept a number array as an argument
- Return the integer that appears an odd number of times as an argument
- There will always be exactly one integer that will appear an odd number of times in the input array

Data structures
Intermediate: I can use an object to count the number of times each given digit appears in the array. So 
all I have to do is iterate through the array, and progressively count those digits on the object. 

Algorithm
The function will accept an array of numbers as an argument. It will declare and initialize a count object, to
keep track of the frequency of each unique value in the array. Then, it will iterate through the array of numbers.
If the number exists on the object, increment by 1; if it does not exist, initialize the property to 1. Then,
find the number that appears an odd number of times in the object. Return the key of that number to the caller.

step by step
- Accept an array of numbers as an argument
- SET numberCount = {}
- For each number in the array:
  - Check if the number is in the object. If it is, add 1. If it is not, set the object property equal to 1
- For each key, value in numberCount:
  if value % 2 !== 0:
    return key
End function

*/

const oddFellow2 = (array) => {
  let numberCount = {};
  array.forEach((num) => {
    numberCount[num] = (numberCount[num] || 0) + 1
  });

  let numberCountEntries = Object.entries(numberCount);
  for (let i = 0; i < numberCountEntries.length; i++) {
    console.log(numberCountEntries[i]);
    if (numberCountEntries[i][1] % 2 !== 0)
      return Number(numberCountEntries[i][0]);
  }
};

const oddFellow = (array) => {
  let numberCount = array.reduce((acc, cv) => {
    acc[cv] = (acc[cv] || 0) + 1;
    return acc;
  }, {});

  let output = undefined;
  Object.keys(numberCount).forEach((number) => {
    if (numberCount[number] % 2 !== 0) {
      output = Number(number);
    }
  });

  return output
};

const p = console.log;
p(oddFellow([4]) === 4);
p(oddFellow([7, 99, 7, 51, 99]) === 51);
p(oddFellow([7, 99, 7, 51, 99, 7, 51]) === 7);
p(oddFellow([25, 10, -6, 10, 25, 10, -6, 10, -6]) === -6);
p(oddFellow([0, 0, 0]) === 0);
