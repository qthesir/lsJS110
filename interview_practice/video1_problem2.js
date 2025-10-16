/*


*/

/*
PEDAC

Problem
Write a function that accepts two strings: One string is the string "resevoir", and the 
other string is the word to be constructed. Return true if the string to be constructed can
be created by re-arranging a subset of the letters in the string resevoir

Examples / Test Cases
Requirements
- Accept two strings as arguments: str1 and str2
- Return true if str2 can be constructed out of the characters in str1, false otherwise
- The order of the letters in str1 do not matter with regard to using in str2. It 
just needs to exist in str1. 
- Each letter can only be used one time. Once its used, it cannot be used in str2 again. 
- Only lowercase letters will be included in the input string

Data Structures 
Intermediate: I'm thinking that I can split the str resevoir into a string, and 
then iterate through each character of str2. If the character exists in str1, then 
remove the character and continue the loop. if it does not exist, return false to the
caller. If the loop completes, return true. 

Algorithm
Accept two strings, str1 and str2, as arguments. For each character in str2, check to see
if it is in str1. If it is, remove the character from str1 and continue the loop. If it is 
not in str1, return false to the caller. If the loop completes without returning false, 
return true.

Step by step
- Accept str1 and str2 as an argument
- Split str1 into an array
- For each char in str2:
  - Check to see if that char is in str1 array
    - If it is, remove it from the array
    - If it is not, return false
- Return true

*/

const scramble = (str1, str2) => {
  let resevoir = str1.split("");
  for (let char of str2) {
    if (!resevoir.includes(char)) return false;
    resevoir.splice(resevoir.indexOf(char), 1);
  }
  return true;
};

// Examples

console.log(scramble("javaass", "jjss") === false);
console.log(scramble("rkqodlw", "world") === true);
console.log(scramble("katas", "steak") === false);
console.log(scramble("scriptjava", "javascript") === true);
