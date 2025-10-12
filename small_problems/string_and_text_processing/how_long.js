/*
How long are you?

Write a function that takes a string as an argument and returns an array that contains every word 
from the string, with each word followed by a space and the word's length. If the argument is an 
empty string or if no argument is passed, the function should return an empty array.

You may assume that every pair of words in the string will be separated by a single space.

*/

// Examples

/*
PEDAC
Problem
The problem is asking us to write a function that takes a string as an argument, and returns an array of the 
words in the string, with each word being followed by a single space the length of the word. 

Examples / Test cases
Requirements
- Accept a string as an argument
- Return an array of words in the string, with each word being followed by a single space and the length of the
word.
- Each "word" in the output array is delimited by a single space
- "Words" can contain non alphabetic characters, such as ', ?, and , 
- Those non-alphabetic characters count as the length of the word
- Empty strings return an empty array
- Passing no argument into the function returns an empty array 

Data Structures
Input: String 
Output: An array of words in the string, with each word followed by a single space and the length of the 
word.
Interzediate: The string input will have to be split into an array of words. That array of words will have 
to be iterated through, and a space plus the length of the word will have to be added to it (good candidate for
.map())

Algorithm
Big Picture
The program will accept a string as an argument. It will then split that string into an array of words, using a
single space ' ' as a delimeter. It will then iterate through each word in the array, adding the word, plus a 
single space, plus the length of the word, and adding the result to the corresponding index in a new array.
It will then return the new array to the caller. 

Step by step
- Accept a string as an argument
- Split the string into an array 'wordArr'
- Declare 'outputArr' and initialize it to []
- For each word in wordArr
  - Set outputArr[index of word] = word + ' ' + word.length
- Return outputArr

*/

// Code with intent

const wordLengths = (sentence = "") => {
  if (!sentence) return [];
  return sentence.split(" ").map((word) => `${word} ${word.length}`);
};

console.log(wordLengths("cow sheep chicken"));
// ["cow 3", "sheep 5", "chicken 7"]

console.log(wordLengths("baseball hot dogs and apple pie"));
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

console.log(wordLengths("It ain't easy, is it?"));
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

console.log(wordLengths("Supercalifragilisticexpialidocious"));
// ["Supercalifragilisticexpialidocious 34"]

console.log(wordLengths("")); // []
console.log(wordLengths()); // []
