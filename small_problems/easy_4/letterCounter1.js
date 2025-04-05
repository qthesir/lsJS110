/*
Write a function that takes a string consisting of zero or more space separated words and returns 
an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

*/

/*
PEDAC
Problem
Write a function that takes a string of words separated by spaces and returns an object that maps the 
number of characters in each word to the frequency at which words of that length appear in the sentence. 

Input: String sentence 
Output: Object with a frequency of how often words of each character length appear in the sentence

Explicit Requirements / Assumptions
- Only accept strings
- A string with only one word can be accepted
- Returns an object with the word length as a property, and the number of times a word of that length
appears in that sentence as a value

Implicit Requirements / Assumptions
- The function should return an empty object when it takes an empty string is input
- The size of a word refers to the length of the word in terms of how many characters it has, per 
the test cases
- Words are defined as strings of characters separated by spaces. All characters are included.
Per the final case "What's up", "what's" is counted as 6 characters, which means the ' is included. 
! is also included in the word size for the second test case. 
- The output object is ordered from the lowest number of character word count to the highest; in 
ascending order. 

Questions
- Are there any other considerations to what constitutes a valid word? 

Mental Model
The program accepts a string as an argument. It iterates through each word, counting the number of 
characters, and records how frequently words of that character length appear in the sentence.
It returns an object that maps the number of characters in a word to the frequency that they appear
in the sentence. 

Examples / Test Cases

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');     

Data Structure

The program will take a string as an input, iterate through the string to find each word, record
the length of each word, and then insert it into an object. In order to iterate through each word 
in the string, it would be effective to break the string into an array, with one word for each 
array slow. For example:

("What's up doc?") -> ["What's", "up", "doc?"]

["What's", "up", "doc?"] -> {"6": 1, "2": 1, "4": 1}

Algorithm

High level
1. Accept a string as an input
2. Take the character length of each word and add it to the object.
3. Sort the object from lowest to highest character count
4. Return the object 

1. Accept a string str as an input
2. Create an empty output object {} called output
3. Turn the string into an array of words called wordsarray
4. For each word in the array:
  - count the length of the word
  - If the word length exists in the object, increment the value by 1. If it does not, 
  set the new property to 1
5. Sort the object from lowest to highest character count
6. Return the object
 
*/

// Code with intent

function wordSizes(str) {
  if (!str) {
    return {}
  }

  let output = {};
  let wordArray = str.split(" ");
  wordArray.forEach((word) => {
    output[word.length] = output[word.length] + 1 || 1;
  });
  
  return output 
}

// Examples:

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?")); // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes("")); // {}

/*
Notes

I could use .forEach() here, or .map(). I could also, I think, use the accumulator. 
Anything you can use .forEach() with that has an output value that is being added to as the function 
iterates, the accumulator can do too. .map may be useful if you wanted to step from an array of 
words to their character count, but I think that is unescessary with .forEach(). 

Also, it seems like the object is automatically put into sorted order. I'm not sure what to make of 
that. I guess this is actually an ES2015 change. 
*/
