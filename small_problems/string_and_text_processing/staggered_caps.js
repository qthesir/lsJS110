/* 
Write a function that takes a string as an argument and returns that string with a staggered 
capitalization scheme. Every other character, starting from the first, should be 
capitalized and should be followed by a lowercase or non-alphabetic character. 
Non-alphabetic characters should not be changed, but should be counted as characters for 
determining when to switch between upper and lower case.
*/

// Examples

/*
PEDAC

Problem

Input: A string of characters

Output: A string of characters with every other character capitalized

Explicit Assumptions
- Accept a string of characters as an input
- Every other character should be capitalized
- The first character capitalized is the first character in the string 
- Non alphanumeric characters should not be changed
- Non alphanumeric characters will count as characters for determining which letters are 
swapped. That is, if you have a1b2, it will be A1B2, not A1b2. 

Implicit Assumptions
- A string with no alphabetic characters will be returned unchanged
- A empty string will also be unchanged
- The program will not accept non-string arguments
- It is irrelevant whether the initial string had capitalized letters or not. If, say, the
first letter in the input string is capitalized, the first letter in the output string will 
also be capitalized. 
- Per the above, if the letter is uppercase, but should be lowercase according to the order,
it will need to be explicitly made lowercase. 

Mental Model 
The program will accept a string as an argument. It will break the string into an array,
and transform every other character to an upper case character, and transform the 
subsequent character to a lowercase character starting with the first.
It will then return the array to the caller. 

Examples / Test Cases
See above

Data Structures
The program will accept a string, but turn that string into an array to be transformed by 
array methods. It is possible to use .reduce to construct the output directly as a string,
as opposed to joining it, but if reduce is not used, then the array will need to be 
concatenated into a string. 

Algorithm
- Accept a string as an argument
- Split the string into an array
- For each character in the array:
  - If the index of the array is even:
      - Transform the character to uppercase
  - If the index of the array is odd: 
      - Transform the character to lowercase
- Concatenate / join the array to a string
- Return the string to the caller 
*/

// Code with intent

const staggeredCase = (string) => {
  return string
    .split("")
    .map((char, index) => {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else {
        return char.toLowerCase();
      }
    })
    .join("");
};

const staggeredCase2 = (string) => {
  return [...string].reduce((acc, cv, index) => {
    return index % 2 === 0
      ? (acc += cv.toUpperCase())
      : (acc += cv.toLowerCase());
  }, "");
};

const staggeredCase3 = (string) => {
  let outputStr = "";
  for (let index = 0; index < string.length; index++) {
    if (index % 2 === 0) {
      outputStr += string[index].toUpperCase();
    } else {
      outputStr += string[index].toLowerCase();
    }
  }

  return outputStr;
};

console.log(staggeredCase("I Love Launch School!")); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase("ALL_CAPS")); // "AlL_CaPs"
console.log(staggeredCase("ignore 77 the 4444 numbers")); // "IgNoRe 77 ThE 4444 nUmBeRs"

console.log(staggeredCase2("I Love Launch School!")); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase2("ALL_CAPS")); // "AlL_CaPs"
console.log(staggeredCase2("ignore 77 the 4444 numbers")); // "IgNoRe 77 ThE 4444 nUmBeRs"

console.log(staggeredCase3("I Love Launch School!")); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase3("ALL_CAPS")); // "AlL_CaPs"
console.log(staggeredCase3("ignore 77 the 4444 numbers")); // "IgNoRe 77 ThE 4444 nUmBeRs"

// Small change here from my original assessment: Its not enough to just uppercase the letters,
// because in some cases, the letters are already uppercase, and need to be made lowercase.
// Thus, even indices need to be explicitly transformed to uppercase, and odd indices
// explicitly transformed to lowercase.
