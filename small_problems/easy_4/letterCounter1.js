/*
Write a function that takes a string consisting of zero or more space separated words and returns 
an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

*/ 

// Examples:

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

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


*/