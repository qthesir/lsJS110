/*
Given a string of words separated by spaces, write a function that swaps the first 
and last letters of every word.

You may assume that every word contains at least one letter, and that the string 
will always contain at least one word. You may also assume that each string contains 
nothing but words and spaces, and that there are no leading, trailing, or repeated 
spaces.

*/

// Examples:

swap("Oh what a wonderful day it is"); // "hO thaw a londerfuw yad ti si"
swap("Abcde"); // "ebcdA"
swap("a"); // "a"

/*
PEDAC

Problem

Input: String with words separated by spaces

Output: A string where the first and last letter of each word is swapped.

Explicit Assumptions 
- Each string contains nothing but words and spaces
- There are no leading, trailing, or repeated spaces
- Every string will contain at least one word
- Every word will contain at least one letter

Implicit Assumptions 
- A "word" is defined by a sequence of one or more letters, delineated by spaces. It is not clear if there are 
other types of characters in the string. 
- If a word only contains 1 letter, the word in the new string will be equal to the value in the new 
string
- Capitalization (upper or lower case) should be maintained
- Each string will contain at least one letter (by transitive property)
- There will be no empty space cases accepted

Question 
- Can words contain characters other than letters? The text says each string contains only words and spaces, 
and each word contains at least one letter, but it doesn't say words contain only letters; by transitive 
property, the text doesn't explicit state that the strings cannot contain other types of characters. 

Mental Model
The program will accept a string as an input. It will iterate through each word in the string, and for each word,
swap the first letter with the last letter. It will then return the string of words in its original order. 

Examples / Test Cases
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

Data Structure
It would be practical for the words in the string be split into an array (split on the spaces), so each word
can be dealt with separately. Once the first and last letters have been swapped, then concat the 
list back into the string.

On second thought, you may also have to break out each word into an array of characters, so the positions 
can be shifted. Or, you could concat the first letter, the middle characters (if there are any), and the 
last character, and this would avoid breaking it out into an array. But then, that makes it more difficult to 
handle the edge cases; I.e. when there are only 1 or 2 letters.

Algorithm
1. Accept "str" as an argument
2. Convert str into an array "strArray"
3. Swap the first letter for the last letter in the first word
4. Repeat for the remaining words
5. concat strArray into a string 
6. Return the new string to the user

Swap the first letter for the last letter in the first word
1. Accept the word as an argument
2. Break the word into an array of characters
3. Capture the value of the 0th index
4. Capture the value of the word.length - 1 index
5. Set the 0th index equal to the value of the word.length - 1 index
6. Set the word.length - 1 index to the value of the 0th index
7. Return the word to the user.

*/

// Code with intent

function swap(str) {
  let strArr = str.split(" ");
  return strArr
    .map((word) => {
      return swapWord(word);
    })
    .join(" ");
}

function swapWord(str) {
  let strArr = str.split("");
  let firstLetter = strArr[0];
  let lastLetter = strArr[str.length - 1];
  strArr[0] = lastLetter;
  strArr[str.length - 1] = firstLetter;

  return strArr.join("");
}

console.log(swapWord("best"));

// Examples:

console.log(swap("Oh what a wonderful day it is")); // "hO thaw a londerfuw yad ti si"
console.log(swap("Abcde")); // "ebcdA"
console.log(swap("a")); // "a"

/*
Reflection: Per the LS advice of naming functions in a verbose manner, I should have done that with this 
case. "swapFirstAndLastLetter" should have been the name of the helper function, as this is literally 
what the function is doing. Maybe start with what the function is literally doing as a function name, and 
then try to simplify from there? 

If you're mutating the original array as part of your function, this is typically not a good idea. However,
if the array is contained within the function (i.e. there is not an array passed by reference which you want
to retain), and you are not changing the number of elements (just mutating the same ones) then it is typically 
ok. If you were changing them, however, this can easily lead to errors

*/