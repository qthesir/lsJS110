/*
Write a function that takes an array of strings and returns an array of the same string 
values, but with all vowels (a, e, i, o, u) removed.
*/

/*
PEDAC

Problem

Input: An array of strings

Output: An array of strings with all the vowels removed 

Explicit Requirements
- Accept a string as an argument
- Return the string with the vowels removed
- Vowels are (a,e,i,o,u). It does not include y.

Implicit Requirements
- Both capital and lowercase vowels need to be removed 
- If the resulting string is empty, return an empty string in the array slot

Mental Model
The program will accept an array of strings as an argument. It will iterate through the
array and transform each string by removing the vowels. It will then return the new 
array to the caller.

Examples / Test Cases
See above

Data Structures
The program will take an array of strings as an argument, iterate through each string,
transform each string into an array and then concat the characters back together once
the filtering is complete. It will then return the array of strings, with vowels filtered
out, back to the caller.

There will also need to be an array of value that is checked against for the filter.

Algorithm
1. Accept an array of strings
2. SET the list of vowels (a,e,i,o,u)
3. Copy the array
4. For each string in the Array:
  - Filter out the vowels in the string
  - Add the string to the new array
5. Return the new array to the caller

Helper: Filter out the vowels of the string
1. Split the string into an array of characters
2. For each character:
  - Check to see if the lowercase version of the character is a vowel (.includes())
  - If the character is a vowel, remove the character
3. Concatenate the array of characters back into a string and return to the caller.

*/

// Code with intent

const VOWELS = ["a", "e", "i", "o", "u"];

const removeVowels = (arrayOfStrings) => {
  return arrayOfStrings.map((string) => {
    return string
      .split("")
      .filter((char) => !VOWELS.includes(char.toLowerCase()))
      .join("");
  });
};

const removeVowelsWithRegex = (arrayOfStrings) => {
  return arrayOfStrings.map((string) => {
    return string.replace(/[aeiou]/gi, "")
  })
}

// Examples:

console.log(removeVowels(["abcdefghijklmnopqrstuvwxyz"])); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(["green", "YELLOW", "black", "white"])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(["ABC", "AEIOU", "XYZ"])); // ["BC", "", "XYZ"]

console.log(removeVowelsWithRegex(["abcdefghijklmnopqrstuvwxyz"])); // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowelsWithRegex(["green", "YELLOW", "black", "white"])); // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowelsWithRegex(["ABC", "AEIOU", "XYZ"])); // ["BC", "", "XYZ"]

// Thinking .map and then .filter for the strings
