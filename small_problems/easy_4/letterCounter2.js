/*
Modify the wordSizes function from the previous exercise to exclude non-letters when determining 
word size. For instance, the word size of "it's" is 3, not 4.

*/

/*

PEDAC

Problem

Input: String sentence

Output: Object containing properties of character lengths with a value of how often that character
appears 

Explicit Requirements
- Input has to be a string
- Words are separated by spaces
- A string with only one word can be accepted 
- Non-letter characters should be excluded


Implicit Requirements
- Output object is in ascending order, according to the property with the number of letters in  word.
- The function should return an empty object when it takes an empty string is input
- The size of a word refers to the length of the word in terms of how many characters it has, per 
the test cases

Mental Model

The program will take a string as an input and strip out the non-letter characters. It will then 
iterate each word, record the length of that word, and the number of times it occurs in an object.
The object will then be returned to the user.

Examples / Test Cases 


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "2": 1, "3": 1, "5": 1 }
wordSizes('');                                            // {}

/*

Algorithm

Algorithm

High level
1. Accept a string as an input
2. Strip the string of non-letter characters 
3. Take the character length of each word and add it to the object.
4. Sort the object from lowest to highest character count
5. Return the object 

1. Accept a string str as an input
2. Create an empty output object {} called output
3. Strip non-letter charactes from the string
4. Turn the string into an array of words called wordsarray
5. For each word in the array:
  - count the length of the word
  - If the word length exists in the object, increment the value by 1. If it does not, 
  set the new property to 1
6. Sort the object from lowest to highest character count
7. Return the object

*/

// Code with intent

function wordSizes(str) {
  if (!str) {
    return {};
  }

  let filteredStr = filterLetters(str);
  let output = {};
  let wordArray = filteredStr.split(" ");
  wordArray.forEach((word) => {
    output[word.length] = output[word.length] + 1 || 1;
  });

  return output;
}

function filterLetters(str) {
  const LETTERS_AND_SPACES = "abcdefghijklmnopqrstuvwxyz ";
  let filteredStr = str
    .toLowerCase()
    .split("")
    .filter((letter) => {
      return LETTERS_AND_SPACES.includes(letter);
    })
    .join("");

  return filteredStr;
}

// Examples

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes("")); // {}
