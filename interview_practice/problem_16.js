/*
Create a function that returns the count of distinct case-insensitive alphabetic characters and 
numeric digits that occur more than once in the input string. You may assume that the input 
string contains only alphanumeric characters.

*/

/*
PEDAC
Problem
Write a function that takes a string as an argument, and returns the count of the chars that occur more
than once in the string. 

Examples / test cases
Requirements
- Accept a string as an argument
- The string will only be alphanumeric characters
- The function should return the count of all the unique chars that occur more than once in the string.
- The function is case insensitive 

Data Structures
Intermediate: Ok, so what I'm thinking here, in terms of brute force, is I can create a list of alphanumeric characters
and iterate through each character. For each character, filter the string by that character. If the length of the 
the string is greater than that character, increment the count by 1. Easy. Is there anyway to do this more efficiently?
I could go through a strategy where I progressively remove the elements from the string, and if they have more than
1 that is detected / removed, then increment count. This would be more complicated, however.

Algorithm
The function takes a string as an argument. It creates a list of alphanumeric characters to check. For each 
alphanumeric character, filter the string on the current character. If the length is greater than 1, increment count
by 1. When all characters have been checked, return the count.

step by step
- Accept a string as an argument
- SET alphanumeric characters = [(all alphanumeric characters)]
- Split the string into an array
- SET count = 0
- For each alphanumeric character:
  - Filter the strArray on the character
  - If the filtered array length > 1
    - count += 1
- Return count to the caller
*/

const distinctMultiples3 = (string) => {
  const alphanumericChars = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
  let strArray = string.toLowerCase().split("");
  return alphanumericChars.reduce((acc, cv) => {
    let filteredLength = strArray.filter((char) => char === cv).length;
    if (filteredLength > 1) {
      acc++;
    }
    return acc;
  }, 0);
};

const distinctMultiples2 = (string) => {
  let strArray = string.toLowerCase().split("");
  let count = 0;
  while (strArray.length > 0) {
    let newArray = strArray.filter((char) => char !== strArray[0]);
    if (strArray.length - newArray.length > 1) {
      count++;
    }
    strArray = newArray;
  }

  return count;
};

const distinctMultiples = (string) => {
  let charCount = {};
  string
    .toLowerCase()
    .split("")
    .forEach((char) => {
      charCount[char] = (charCount[char] || 0) + 1;
    });

  return Object.values(charCount).filter((val) => val > 1).length;
};

const p = console.log;
p(distinctMultiples("xyz") === 0); // (none)
p(distinctMultiples("xxyypzzr") === 3); // x, y, z
p(distinctMultiples("xXyYpzZr") === 3); // x, y, z
p(distinctMultiples("unununium") === 2); // u, n
p(distinctMultiples("multiplicity") === 3); // l, t, i
p(distinctMultiples("7657") === 1); // 7
p(distinctMultiples("3141592653589793") === 4); // 3, 1, 5, 9
p(distinctMultiples("2718281828459045") === 5); // 2, 1, 8, 4, 5
