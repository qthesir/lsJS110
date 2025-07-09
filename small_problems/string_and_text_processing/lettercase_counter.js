/*
Write a function that takes a string and returns an object containing three properties: 
one representing the number of characters in the string that are lowercase letters, one 
representing the number of characters that are uppercase letters, and one representing the 
number of characters that are neither.
*/

/*
Problem

Input: String 

Output: Object with three properties: lowecase, uppercase, and neither. 

Explicit Assumptions
- Accept a string as an input
- Return an object with the following structure: { lowercase: Number, uppercase: Number, neither: Number}
- Count the number of characters that are lowercase Alphabetic characters, uppercase Alphabetic characters,
and those that fit neither of those categories
- The character count for lowercase characters should be captured in the "lowercase" property, the
uppercase in the "uppercase" property, and every other type of character (special characters, numbers, 
whitespace etc) should be captured in the "neither" category.

Implicit Assumptions
- When the program receives an empty string as an argument, return 0 for all object property values.
  Makes me think - could initialize the data structure here. 

Mental Model
The program accepts a string as an input. It iterates through each character of the string, summing 
the number of lowercase letters, uppercase letters, and characters which fit neither category. It then
returns the sums in an object to the user. 

Examples / Test Cases
See above

Data Structures
The program will take a string as an input, and output an object with the following structure:
{lowercase: <Number>, uppercase: <Number>, neither: <Number>}. It would also be a good strategy to 
turn the string into an array so that it can be iterated over with built-in array methods. 

Algorithm
- Accept string "str" as an input
- Set the variable letterCount as an object with {lowercase: 0, uppercase: 0, and neither: 0}
- Break the string into an array strArray
- Iterate over each character in the string
  - If it is an uppercase letter, increment the uppercase value by 1
  - If it is a lowercase letter, increment the lowercase value by 1
  - If it is neither, increment neither by 1
- Return letterCount to the caller. 


*/

// Code with intent

const LETTERS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const letterCaseCount = (str) => {
  return str.split("").reduce(
    (acc, cv) => {
      if (LETTERS.includes(cv.toLowerCase())) {
        cv === cv.toLowerCase() ? (acc.lowercase += 1) : (acc.uppercase += 1);
      } else {
        acc.neither += 1;
      }
      return acc;
    },
    { lowercase: 0, uppercase: 0, neither: 0 }
  );
};

// Examples

console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }

/*
It occured to me that this is why you have test cases. Test cases allow you to repeatedly test your code
to see if its working probably for all the scenarios that you've already defined. This could also extent to 
test driven development as well. Launch school is giving me the test cases right now, but presumably I will
at some point be required to write my own. 

*/