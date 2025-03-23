// Sort Strings by Most Adjacent Consonants: Guided PEDAC

/*
Given an array of strings, return a new array where the strings are sorted to the highest number 
of adjacent consonants a particular string contains. If two strings contain the same highest number of 
adjacent consonants they should retain their original order in relation to each other. Consonants 
are considered adjacent if they are next to each other in the same word or if there is a space 
between two consonants in adjacent words.

Note that for this problem, the letters 'y' and 'w' should be treated as consonants.
*/

// P: Understand the Problem

/*
Tasks

You are provided with the problem description above. Your tasks for this step are:

To make notes of your mental model for the problem, including explicit and implicit rules
Write a list of questions for things that aren't clear about the problem from the description 
provided.
*/

/*
Input: Array of Strings
Output: Array of strings sorted by the highest number of adjacent consonants in each particular string.

Explicit Rules
- Strings are sorted by the highest number of adjacent consonents in each string
- If two strings have the same number of adjacent consonents, they should remain in the same order
in relation to each other as in the original string.
- Consonants are considered adjacent if they are right next to each other in the same word, or if 
there is a space between two consonents in adjacent words.
- The letters y and w should be treated as consonents.

Implicit Rules
- Each individuated string element in the array can contain multiple words. They could be sentences or
single words.
- Single consonents do not effect sort order in comparison to strings with no consonents. Only strings with adjacent 
consonents effect sort order. 

Questions
- What consitutes a word? Does it have to be a valid word? Does a misspelled word count? Or is it just
a series of strings separated by spaces?
- Do the strings have to be a valid sentence, or can they be gibberish? 
- Are the strings sorted from low to high or high to low?
- Is it possible for a string to contain no adjacent consonants?
- Is case important?

Mental Model
The program accepts an array of strings. For each string in the array, the program calculates the 
number of adjacent consonants, and sorts the array from the string with the largest number of adjacent
consonants to the lowest. It then returns the sorted array.
*/

// Examples and Test Cases

let list1 = ["aa", "baa", "ccaa", "dddaa"];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ["can can", "toucan", "batman", "salt pan"];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ["bar", "car", "far", "jar"];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ["day", "week", "month", "year"];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']

/*
With reference to your initial mental model and questions from Step 1, make some notes about the 
test cases. Do the test cases confirm or refute different elements of your original analysis and 
mental model? Do they answer any of the questions that you had? Do they raise any further questions?

The following clarifications are implied by the test cases above: 
- Words are sorted from high to low by number of adjacent consonents
- Strings can have 0 adjacent consonents
- Words can be gibberish, or just strings of characters. They do not have to form a valid sentance or be a valid word, per the 
english language or any language. 

It did not clarify, however, whether or not case was important. There are no strings with uppercase, all lowercase, but 
an absence of capital letters does not necessarily indicate that it is prohibited. 
*/

// Data Structure

/*
For this step, with reference to your analysis from the two preceding steps, make some notes regarding whether you might 
need to use any particular data structures as part of your solution. If so, which ones.

The program takes an array as an input and returns an array as an output. You could loop through the array, then loop 
through each string in the array, and compare the current string to the preceding string, and if it matches, count that as an 
adjacent consonent. 

You may also have to use an array of consonents in order to check if a character is a consonent. That is, reference the array each time 
to do the check. If this character is in this array... etc. Like this:

[b, c, d, f, g...].contains(char)

We also will probably have to use some sort of sorting algorithm. Either that, or keep track of the array string and adjacent consonents 
in an object, and then sort the object on the number captured. It will be easier to use a sorting algorithm, though, or at least more elegant. 

Here is the example of the object:

{
  aa: 0
  baa : 0
  ccaa : 2
  dddaa : 3
}
*/

// Algorithm

/*
For this step, use your analysis of the problem so far to write out a high-level algorithm that solves the problem at an 
abstract level. Avoid too much implementation detail at this stage.

Highest level:
- For each string in the input array, determine the highest number of adjacent consonants within that string
- Sort the input array based on the calculated highest number of consonants from step 1
- Return the sorted array

More specific:
- Take the provided Array
- Set a new object to {}
- Take the first string, add it to the object as a property
- Count the number of consonents in the string (separate function) 
- Add the number of consonants as a value to the object property
- Repeat for each string
- Sort the object, from high to low, based on the number of consonents (separate function? Feels like implementation)
- Return the object properties in sorted order

In this algorithm, step 4, count the number of consonents in the word, needs to be expanded upon.

Given a string, find the string with the largest number of adjacent consonents and return the number of adjacent consonents.

Input: string of characters
Output: Length of the largest string of adjacent consonents

Explicit Assumptions
1. The highest number of adjacent consonents are the largest number of consonents that appear consequetively within a string, with
spaces in between words.
2. We are looking for the largest sub-string of adjacent consonents. 

Data Structure
The input will be a string, and we'll use an array to create the substring of adjacent consonents. I.e.,

Input: "aaaddd",

Substring: ['d','d','d']


Consonent Counting Alogrithm:
- Set a new array consonantArray to []
- Set a new variable consonentCount to 0
- If the current character is a consonant add it to the consonant array.
- If the current character is a vowel or the last character in the array, 
  - If the length of the consonentArray is larger than the consonentCount, 
      - Set the length of consonentArray equal to the consonentCount
  - Set consonentArray to []
- If the current character is a space, skip.
- Repeat for each character in the string
- Return consonentCount 

Note: It really helps to write out your thoughts as you're working through the problem. 

Reflection: Shit. I misread what the problem wanted! I thought that it wanted the total number of adjacent consonants, not the highest number
of adjacent consonents. Damnit. This significantly changes the problem that I'm solving. Maybe that's why its good to start at the highest level,
and go from there, so you're not misinterpretting high level details. 

Other thing I messed up here was not going through all of the PEDAC steps for the sub-problem. I should have done that. Had I done that,
I might have defined the problem more effectively... Maybe I will do that right now. 

*/

// Test cases for calculateMaxAdjacentConsonents

console.log(calculateMaxAdjacentConsonents("aaaddd")); // 3
console.log(calculateMaxAdjacentConsonents("aaadd")); // 2
console.log(calculateMaxAdjacentConsonents("")); // 0
console.log(calculateMaxAdjacentConsonents("aa")); // 0
console.log(calculateMaxAdjacentConsonents("day")); // 0
console.log(calculateMaxAdjacentConsonents("bar")); // 0

// Code with Intent

/*
Algo: More specific:
- Take the provided Array
- Set a new object to {}
- Take the first string, add it to the object as a property
- Count the number of consonents in the string (separate function) 
- Add the number of consonants as a value to the object property
- Repeat for each string
- Sort the object, from high to low, based on the number of consonents (separate function? Feels like implementation)
- Return the object properties in sorted order
*/

function sortStringsByConsonants(stringArr) {
  let stringObj = Object();
  let numConsonents;
  let objKey;
  for (let i = 0; i < stringArr.length; i++) {
    numConsonents = calculateMaxAdjacentConsonents(stringArr[i]);
    objKey = stringArr[i];
    stringObj[objKey] = numConsonents;
  }
  let sortedObj = sortObj(stringObj);
  return Object.keys(sortedObj);
}

function calculateMaxAdjacentConsonents(str) {
  const CONSONANTS = "bcdfghjklmnpqrstvwxyz";

  let consonentArray = [];
  let consonentCount = 0;
  for (let i = 0; i < str.length; i++) {
    currentChar = str[i];

    if (currentChar === " ") {
      continue;
    }

    if (CONSONANTS.includes(currentChar)) {
      consonentArray.push(currentChar);
      if (consonentArray.length > consonentCount && consonentArray.length > 1) {
        consonentCount = consonentArray.length;
      }
    } else {
      consonentArray = [];
    }
  }
  return consonentCount;
}

function sortObj(obj) {
  let sortedObj = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  return Object.fromEntries(sortedObj);
}

// Made a couple of changes to the logic. Instead of checking for a vowel or last char, I just did the consonantArray length check against
// the consonentCount after the consonent had been added to the array, in the event the letter is in fact a consonent. If it is not a
// consonent, I just set the array back to empty. There is also a guard clause, for when the letter is a space, in which case the loop
// skips to the next iteration.

// Oof, also need to make sure that the lenth of the consonentArray is at least two, or else there are 0 adjacent consonents.

// The reason that my loop kept messing up: Because the iterator i wasn't declared with let. Wow. That is effing unreal. I actually don't
// believe I had been doing that before, but that makes sense: if i was not declared, it is declared in the global scope, meaning it
// was inhereted in the function.

// The solution removed the spaces from the input string, which, for finding the adjacent consonents, 
// was probably the right move. My conditional skip when a space is detected also works, but it is 
// less elegant. 

// Another interesting decision by the solution was to use the calculateAdjacentConsonents helper 
// function directly in the sort function on the array, as opposed to creating an object first like 
// I did. 
