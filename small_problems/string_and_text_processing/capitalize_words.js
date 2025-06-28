/*
Write a function that takes a string as an argument and returns that string with the 
first character of every word capitalized and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.
*/

/*
PEDAC

Problem

Input: A string

Output: A string with the first character of every word capitalized and all subsequent
characters lowercase

Explicit Requirements
- Take a string as an argument
- Return a string with the first character of every word capitalized
- A word is any sequence of non-whitespace characters 

Implicit Requirements 
- Words wrapped in quotes will not be capitalized.
- If any words in the string after the first character are upper case, they will be turned into lowercase values. 

Questions
- Should words wrapped in anything not be capitalized? That is, if we have (quoted), would this 
also be left lowercase? 
  - The above makes sense given the description of the problem. The problem is asking us to capitalize the 
  FIRST CHARACTER of each word, NOT the first letter. If the character happens to be non aplhabetic, then 
  attempting to upper case that letter will return a regular letter. 

Mental Model
The program will accept a string as an argument. It will iterate over each word (series of strings separated by
  whitespace) and capitalize the first character. Upon completion, it will return the modified string to the 
  caller.

Examples / Test Cases

Data Strutures
The program will accept a string as an argument. It will, based on how I'm thinking of approaching the problem 
currently, break up the setnence into individual words using whitespace as a delimiter. IT will then iterate 
through each word, and capitalize each letter. Once its completed that operation, it will concatenate the 
individual words back into a complete sentence.

Algorithm
1. Accept a string as an argument
2. Split the string into an array using " " as a delimiter. 
3. For each string in the array:
  - Transform the first character into an uppercase 
  - Transform the remainig characters to lowercase
  - add the first character to the remaining characters in the string
  - Set the resulting value to the array index being called
4. Concatenate the string array back into a string
5. Return the value to the user 
*/

// Code with intent

const wordCap = (string) => {
  return string
    .split(" ")
    .map((word) => {
      return (
        word[0].toUpperCase() + word.substring(1, word.length).toLowerCase()
      );
    })
    .join(" ");
};

// Examples:

console.log(wordCap("four score and seven")); // "Four Score And Seven"
console.log(wordCap("the javaScript language")); // "The Javascript Language"
console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'
