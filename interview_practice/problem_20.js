/*


*/

/*
Problem
Write a function that takes an array of numbers, all of which are the same except for 
1. Return the number in the array that differs from the rest. 

Examples 
Requirements
- Accept an array as an input
- The input array has all the same numbers, except 1, which is different
- The array will always contain at least 3 numbers
- Return the number that is different in the input array

Data Structures
The brute-force way to do this would be to make a count map of the numbers and check
which one is equal to 1. You could also use a set to get the two unique values, and then
filter each the array on each of those unique values, seeing which one is equal to 1.
I think with the time constraint, I'm going to go with the count map. 

Algorithm
Accept an array of numbers as an argument, which contains all the same values except for 
one. Count the number of each number is in the array using a count map. Iterate through the 
count map, and return the key where the value is equal to 1.

Step by step
- Accept an array of numbers as an argument
- SET numberFrequency = {}
- for each number in array:
  - add the number to numberFrequency
- Check see which value is equal to 1
- Return the key with the value of 1

*/

const whatIsDifferent4 = (array) => {
  let numberFrequency = array.reduce((acc, cv) => {
    acc[cv] = (acc[cv] || 0) + 1;
    return acc;
  }, {});

  return Number(
    Object.entries(numberFrequency).find((entry) => entry[1] === 1)[0]
  );
};

const whatIsDifferent2 = (array) => {
  let numberFrequency = array.reduce((acc, cv) => {
    acc[cv] = (acc[cv] || 0) + 1;
    return acc;
  }, {});

  return Number(
    Object.keys(numberFrequency).find((key) => numberFrequency[key] === 1)
  );
};

const whatIsDifferent3 = (array) => {
  return array.find((x) => array.indexOf(x) === array.lastIndexOf(x));
};

const whatIsDifferent = (array) => {
  let freq = new Map();
  for (const num of array) freq.set(num, (freq.get(num) || 0) + 1);
  console.log(freq);
  for (const [num, count] of freq) if (count === 1) return num;
};

const p = console.log;
p(whatIsDifferent([0, 1, 0]) === 1);
p(whatIsDifferent([7, 7, 7, 7.7, 7]) === 7.7);
p(whatIsDifferent([1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1]) === 11);
p(whatIsDifferent([3, 4, 4, 4]) === 3);
p(whatIsDifferent([4, 4, 4, 3]) === 3);

/*
If I just want to get 1 value, .find is the better option. Then I'm not have to parse out
a 1 element array, its just the 1 element it finds first. 

its also called a frequency map. I should keep that in mind. As a naming convention.

Alright, well... I did every single one of those except 1 in under 20 minutes. Pretty
good. Think I'm, mostly, ready for tomorrow. 
*/
