/*
Write a function that takes a sentence string as an argument and returns that string with 
every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 
'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.
*/

// Example

/* 
PEDAC

Problem
The problem is asking us to take a sentence, convert every word form of a number into its corresponding digit,
and return the sentence to the caller.

Examples / Test Cases
Requirements
- Accept a string as an argument
- Convert each 'number word' to its corresponding digit. E.g., 'five' will become '5' in the output sentence.
- The output sentence will be in the form of a string
- We are only dealing with 'number words' less than 10. 

Questions
- What about dealing with typos? Suppose thats out of scope for this problem. 

Data Structures
Input: A string sentence
Output: The input sentence with 'number words' converted to their respective digits
Intermediate: It may be useful to split the sentence into individual words to identify each one. Hm... Well, the 
words may have punctuation, if I use a space as a delimeter. I could filter out non-alphabetic characters from 
the word in order to account for noise. Or, I could simply use the .includes() array method to identify whether
its the word or not. But I'd have to iterate through each letter / number pairing in the list... The more I think
about it, the more I think it makes sense to do a filter on only alphabetic characters. This is also a more
accurate way of doing it, because the word "boner" technically includes one. Ha!

Algorithm
Mental Model
The function will accept a sentence as an argument. It will split the sentence into individual words. Each 
word will have its non-alphanumeric characters removed (to account for punctuation) and then checked to see 
if it is a digit word. If it is a digit word, the word will be converted to its respective digit before being
added to the output array. The output array will be concatenated back into a sentence separated by 
spaces and returned to the caller.

Step by Step
Main Functions
- Accept a sentence as an argument
- Declare an output array 'output' and initialize it to an empty string
- Split the argument into a word array delimited by spaces
- For each word:
  - Remove extra spaces and punctuation from the word, leaving only alphabetic characters
  - Conver the filtered word to lowercase
  - Check to see if the word is a number word
  - If it is a number word, replace the portion of the word that is the number word with a digit
  - Add the word to the output array
- Concatenate the output array back into a sentence, separating each word by a space
- Return the sentence to the caller 

Helper: Remove extra spaces and punctuation
- Declare the variable 'output' and set it to an empty string
- For each char in the word
  - Convert the word to lowercase 
  - Check to see if the char is alphabetic
  - If it is, add the char to the output
  - If it is not, do nothing
- Return the filtered word to the caller 

Helper: Check to see if the word is a number word (this could simply be accomplished by checking if 
  the word is present in the object and using a terniary)
- Declare and initialize an object that maps the words for 1-9 to their respective digits
- Check to see if the word is in the object. If it is, return its digit. If not, return undefined.

Replace word:
- Accept 

*/

// Code with intent

const NUMBER_WORD_TO_DIGIT = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const filterWord = (word) => {
  return [...word].reduce((acc, char) => {
    let lowerChar = char.toLowerCase();

    lowerChar >= "a" && lowerChar <= "z" ? (acc += char) : acc;

    return acc;
  }, "");
};

const wordToDigit = (sentence) => {
  return sentence
    .split(" ")
    .map((word) => {
      let filteredWord = filterWord(word);
      return NUMBER_WORD_TO_DIGIT[filteredWord]
        ? word.replace(filteredWord, String(NUMBER_WORD_TO_DIGIT[filteredWord]))
        : word;
    })
    .join(" ");
};

console.log(
  wordToDigit("Please call me at five five five one two three four. Thanks.")
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."

/* 
Ah... critical oversight here. Critically fucked up. I need the punctuation. Damnit! I need to isolate the
word and only replace that portion of the word. 

Ok... Lets try to think through this. One option is that I could check to see if theres a dif between the filtered word and the 
unfiltered word, and add the punctuation back onto the word before finishing the map. I could also identify the index of the 
non-alphabetic character - that is, if the character is NON alphabetic, then return the indices of that character. Remove those indices.
And then put them back on after the word has been identified. I could also filter the word JUST for the purposes of identification.
That is, not return the filtered word, but the original word, but... shit... I will need to specifically swap out the portion of the 
word.

Hm. I could have another helper function called "swapForDigit", which takes ONLY the portion of the word that is alphanumeric, swaps
it for a digit, and then concats. Within that function, I could go through each character, REMOVE all alphanumeric characters, and 
then add the digit and the punctuation together. But how do I know which side of the word the punctuation is on? The right, or the left?
I suppose there are very few circumstances under which the punctuation might be on the left side, since it will typically be a space, but 
I want to come up with a general solution that has the ability to identify a specific word in a sequence of characters and then
swap that out with something else.

So I do need a function, "swapForDigit", that accomplishes this task. I need something that checks to see if the word contains 
the word at all - the 'filtered word" and then I need something that effectively goes into that word and specifically replaces 
those letters with the right value. So I have the infrastructure to do this.

In the node, I could simply do 'five.'.replace('five', '5') and that would effectively replace its value. But how is replace working 
under the hood? I would like to write my own to see. 

*/