/*
Write a function that takes a string argument and returns true if all of the alphabetic 
characters inside the string are uppercase; false otherwise. Ignore characters that are 
not alphabetic.
*/

/*
PEDAC

Problem

Input: String 

Output: True if ALL of the alphabetic characters in the string argument are uppercase, false otherwise. 

Explicit Requirements
- Accept a string as an argument
- If all the ALPHABETIC characters in the string argument are uppercase, return true
- If there are any lowercase characters, return false. 
- Ignore non-aplhabetic characters

Implicit Requirements
- An empty string should return true (how does the .every method treat this?) 
- Whitespace is also ignored

Mental Model
The program will accept a string as an input. It will evaluate each character to see if it is uppercase, 
ignoring characters that are not alphabetic. If all alphabetic characters are upper case, return true. 
If any are lowercase, return false.

Examples / Test Cases
See above.

Data Structures
The program will accept a string as an argument. It will then split the characters of that string into an
array in order to perform an array operation. It will then return true or false, a boolean, based on the 
result of the operations performed on the array. 

Algorithm 
1. Accept a string as an argument
2. Split the string into an array
3. For each value in the array:
  - IF the character !== character.toUpperCase()
    - Return false
  - ELSE 
    - Continue
4. Return true

*/

// Code with intent
const isUppercase = (string) => {
  return string
    .split("")
    .every((character) => character === character.toUpperCase());
};

const isUppercase2 = (string) => {
  return !string
    .split("")
    .some((character) => character !== character.toUpperCase());
};

// Examples

console.log(isUppercase("t")); // false
console.log(isUppercase("T")); // true
console.log(isUppercase("Four Score")); // false
console.log(isUppercase("FOUR SCORE")); // true
console.log(isUppercase("4SCORE!")); // true
console.log(isUppercase("")); // true

console.log(isUppercase2("t")); // false
console.log(isUppercase2("T")); // true
console.log(isUppercase2("Four Score")); // false
console.log(isUppercase2("FOUR SCORE")); // true
console.log(isUppercase2("4SCORE!")); // true
console.log(isUppercase2("")); // true

/*
Notes
Can just apply uppercase to the character being evaluated with the every array method. 

*/
