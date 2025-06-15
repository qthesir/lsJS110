/*
Write a function that takes a string argument containing one or more words and returns a new string 
containing the words from the string argument. All five-or-more letter words should have their 
letters in reverse order. The string argument will consist of only letters and spaces. Words will be 
separated by a single space.
*/

/*
PEDAC

Problem

Input: A string of words

Output: A string of words with every word that contains 5 or more letters reversed

Explicit Requirements: 
- The function takes a string as an input
- The output will return the same string with words greater than 5 or more letters with their letters
reversed
- The string argument will consist only of letters and spaces (i.e. no special characters or numbers)
- Words will be separated by a single space

Implicit Requirements: 
- Empty string will return an empty string
- The words themselves will remain in the same order. It is the words that will be reversed.

Mental Model

The program will take a string of words (sentence) as an input. It will iterate through each word,
check to see if that word if 5 letters or greater, and if it is, reverse the letters. It will then return
the result to the caller. 

Examples / Test Cases
See above

Data Structures
Like the previous exercise, this function will transform the string input into an array of words in order
to take advantage of JavaScript's built in array methods. It will likely have to do this twice: Once on the 
sentence to get the words, and once on the words that are greater than or equal to 5 characters in length. 

Algorithm
- Take "sentence" as an input, which is a string with words that contains only letters and spaces
- Turn sentence into an array delimited by spaces
- Check if the first word in the array contains greater than 5 letters
- If it does, turn the word into an array of characters, reverse the order, and concatenate 
the characters back into a word.
- Repeat for each word in the array
- Concatenate the array  
- Return the array to the caller 
*/

// Code with intent

const reverseWords = (sentence) => {
  const WORD_LENGTH_MINIMUM = 5;
  return sentence
    .split(" ")
    .map((word) => {
      if (word.length >= WORD_LENGTH_MINIMUM) {
        return reverseWord(word);
      } else {
        return word;
      }
    })
    .join(" ");
};

const reverseWord = (word) => {
  return word.split("").reverse().join("");
};

// Examples

console.log(reverseWords("Professional")); // "lanoisseforP"
console.log(reverseWords("Walk around the block")); // "Walk dnuora the kcolb"
console.log(reverseWords("Launch School")); // "hcnuaL loohcS"

/*
Keep forgetting some important stuff here and there: First, break down the problem into individual
chunks. There was a clear opportunity here to create a separate function for reversing the word that 
would have made the code more readible. Second, you had the "magic number" of the minimum word length,
which was 5. You don't want any magic numbers. These should be declared with a const. Make sure you 
remember these things next time.

I think part of the reason I'm doing that here is because the problem is easy, and I know how to solve
it before I even think about it. 
*/
