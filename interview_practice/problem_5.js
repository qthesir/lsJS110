/*
PEDAC 

Problem 
Write a function that accepts a string as an argument. Return the character that 
occurs most often in the string. 

Examples
Requirements
- Accept a string as an argument
- Return the character that appears most frequently in the string
- The character count should be case insensitive. A = a
- If two characters have the same count, return the one that appears first in the string

Data Structures
Input: A string
Output: The character that appears most frequently in the string
Intermediate: 

Algorithm
The algorithm will accept a string as an argument. It will first go through the string 
and count the total number of each character using an object. Then, it will determine the 
character that occurs most frequently in that object. It will then return that character 
to the caller. 

Step by step
- Accept a string as an argument
- SET charCount = {}
- For each character in the string:
  - Convert the character to lowercase
  - If the character already exists, incrememnt the number of characters by 1. If the 
  character does not exist, initialize it to 1. 
- Determine the most frequently occuring character in the object
- Return the most frequently occuring character to the caller 

HELPER: Determine the most frequently occuring character
- Accept an object with the character counts as an argument
- SET mostFrequentChar = Object.keys[0]
- For each character on the object:
  - If count of current char is greater than count of the mostFrequentChar:
    - Set the mostFrequentChar to the current char
- Return mostFrequentChar
*/

// Code with intent

const determineMaxChar = (charCount) => {
  let mostFrequentChar = Object.keys(charCount)[0];
  Object.keys(charCount).forEach((char) => {
    if (charCount[mostFrequentChar] < charCount[char]) {
      mostFrequentChar = char;
    }
  });
  return mostFrequentChar;
};

const mostCommonChar = (string) => {
  let charCount = {};
  string.split("").forEach((char) => {
    let lowercaseChar = char.toLowerCase();
    charCount[lowercaseChar]
      ? (charCount[lowercaseChar] += 1)
      : (charCount[lowercaseChar] = 1);
  });
  return determineMaxChar(charCount);
};

const p = console.log;
p(mostCommonChar("Hello World") === "l");
p(mostCommonChar("Mississippi") === "i");
p(mostCommonChar("Happy birthday!") === "h");
p(mostCommonChar("aaaaaAAAA") === "a");

let myStr = "Peter Piper picked a peck of pickled peppers.";
p(mostCommonChar(myStr) === "p");

myStr = "Peter Piper repicked a peck of repickled peppers. He did!";
p(mostCommonChar(myStr) === "e");
