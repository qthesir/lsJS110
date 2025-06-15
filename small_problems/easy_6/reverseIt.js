/*
Write a function that takes a string argument and returns a new string containing 
the words from the string argument in reverse order.
*/

/*
PEDAC

Problem

Input: A string agument

Output: A string with words in reverse order

Explicit Requirements:
- The program takes a string value as an argument
- The program returns a new string containing the words from the string in reverse order

Implicit Requirements:
- Words are separated by spaces (spaces are the delimiter)
- An empty string as an input will return an empty string 
- Words retain their capital letters. That is, if they were upper cased, they remain upper cased. 

Mental Model:
The program will accept a string as an input. It will then reverse the order of the words in the string. 
It will then return the reversed string to the caller. 

Examples / Test Cases
Above

Data Structures
The program will take a string as an input. In order to perform operations on the words, the string 
will be split into an array of words, and reversed that way. Then, the array of reversed words 
can be concatenated and returned to the user. 

Algorithm 
- Take a string of words as an input
- Turn the string of words into an array of words, using a space as a delimiter
- Reverse the array of words
- Concatenate the array back into a string
- Return the string to the user 

*/

const reverseSentence = (sentence) => {
  return sentence.split(" ").reverse().join(" ");
};

// Examples

console.log(reverseSentence("")); // ""
console.log(reverseSentence("Hello World")); // "World Hello"
console.log(reverseSentence("Reverse these words")); // "words these Reverse"
