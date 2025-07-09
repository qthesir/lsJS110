/*
Write a function that takes a string argument and returns a list of substrings of 
that string. Each substring should begin with the first letter of the word, and the 
list should be ordered from shortest to longest.
*/

/*
PEDAC

Problem

Input: String of letters

Output: Array with a list of substrings of the input string 

Explicit Requirements
- Accept a string argument
- Return an array with the leading substrings
- Order the list from shortest to longest string

Implicit Requirements
- The output does not contain all the combinations of sub-strings, but rather the leading substring. That is,
the first letter, followed by the first letter and second letter, followed by first, second, and third 
letter, and so on. 
- The order of the letters in leading substrings is the order of the original string passed in. 
It is not alphabetical.
- Assuming that empty string will return an empty array

Questions
- Does the string accept characters other than letters? Suppose it does not matter, since the string is not 
ordered in alphabetical order.
- How to handle empty string?

Mental Model
The program will accept a string as an argument. It will construct each leading substrings of the input
string and add them to an array. It will return the array to the caller. 

Examples / Test Cases
See above

Data Structures
The function will accept a string as an input and return an array of leading substrings as an output. What
I'm thinking here, is that I can iterate over the length of the string and and do .substring to the original
string, between 0 and the current index, and add that to the array. 

Algorithm
- Accept a string as an input
- Set an output array
- Iterate over the length of the string
- For each iteration, add a substring between 0 and the current index + 1 to the output array
- Return the output array to the caller

*/

// Code with intent

const leadingSubstrings = (str) => {
  return [...Array(str.length)].map((_, index) => str.substring(0, index + 1));
};

const leadingSubstrings2 = (str) => {
  return str.split("").map((_, index, array) => {
    return array.slice(0, index + 1).join("");
  });
};

// Examples

console.log(leadingSubstrings("abc")); // ["a", "ab", "abc"]
console.log(leadingSubstrings("a")); // ["a"]
console.log(leadingSubstrings("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]

console.log(leadingSubstrings2("abc")); // ["a", "ab", "abc"]
console.log(leadingSubstrings2("a")); // ["a"]
console.log(leadingSubstrings2("xyzzy")); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
