/*
Write a function that takes a string as an argument and returns that string with every 
lowercase letter changed to uppercase and every uppercase letter changed to lowercase. 
Leave all other characters unchanged.
*/

// Examples

/*
PEDAC

Problem

Input: String of characters

Output: Identical string of characters as the input string but with the upper and lower 
case character's cases reversed. 

Explicit Assumptions:
- The function accepts a string as an argument
- Swap every lowercase letter for an upper case letter and vice versa for upper case letters
- Ignore other characters, which do not have a case (i.e. 1,2,3,-,& etc.)

Implicit Assumptions:
- Return an empty string when an empty string is provided as an input

Questions:

Mental Model:
The program will accept a string as an argument. It will iterate through each letter of the 
string, and, if the letter is alphabetic, swap its case. It will then return the output string
to the caller. 

Examples / Test Cases
See above.

Data Structure
The program will accept a string as an input. It will then turn that string into an
array for easier iteration, and evaluate each character to determine whether or not to 
swap its case. It will then join/concat the individual characters back into a string.

Algorithm
- Accept a string as an input
- Split the string into an array
- For each character in the string
  - Check if the string is alphabetic
    - If it is, check if the string is upper or lower case
      - Swap the case
- Concat the array back into a string
- Return the string to the user 

*/

// Code with intent

const swapCase = (string) => {
  return string
    .split("")
    .map((char) => {
      // console.log("Z".charCodeAt(), "A".charCodeAt())
      if (char <= "z" && char >= "a") {
        return char.toUpperCase();
      } else if (char <= "Z" && char >= "A") {
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join("");
};

console.log(swapCase("CamelCase")); // "cAMELcASE"
console.log(swapCase("Tonight on XYZ-TV")); // "tONIGHT ON xyz-tv"
