/*
The function from the previous exercise returns the number of occurrences of a word in some text. 
Although this is useful, there are also situations in which we just want to find the word in the 
context of the text.

For this exercise, write a function that takes a word and some text as arguments, and returns 
the text with every instance of the word highlighted. To highlight a word, enclose the word with 
two asterisks ('**') on each side and change every letter of the word to uppercase 
(e.g., '**HIGHLIGHTEDWORD**').

*/

/*
PEDAC

Problem
Write a function that accepts a single word and a body of text, and returns the text with every instance of 
the word capitalized with ** on either side of the word. For ex, **HIGHLIGHTEDWORD**

Examples / Test Cases
Requirements
- Accept a word and a body of text as arguments
- Return the body of text with every instance of the word capitalized with ** on either side of the word, for
ex. **WORD**
- The return text should otherwise be left intact

Data Structures 
Input: word and body of text
Output: body of text with every instance of the word capitalized with ** on either side of the word, for
ex. **WORD**
Intermediate: The program will split the sentence into individual words. On each of the individual words,
given that it matches the regular expression for the whole word (without the comma), it will replace it
with the all caps version with the two ** on either side.

Algorithm
The program will accept a word and a body of text as inputs. It will replace all the instances of the 
word with **word** in the body of text, and return the new body of text to the caller. 

Step by step
- Accept a word and a body of text as arguments
- Define a regex patten for the matching words, based on the word
- Define a replacement value, which should be ** + word.toUpperCase() + **
- Replace all values of the word that match the regex patter with the replacement value
- Return the new text body to the caller

*/

// Code with intent

// Example

const searchWord = (wordToReplace, text) => {
  let regex = new RegExp(`\\b${wordToReplace}\\b`, "gi");
  let replacementWord = `**${wordToReplace.toUpperCase()}**`;
  return text.replace(regex, replacementWord);
};

const searchWord2 = (wordToReplace, text) => {
  let regex = new RegExp(`\\b${wordToReplace}\\b`, "gi");
  return text.replace(regex, (word) => `** ${word.toUpperCase()}**`);
};

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?";

console.log(searchWord("sed", text));
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"

console.log(searchWord("laudantium", text));

console.log(searchWord("qui", text)); // 4

console.log(searchWord2("sed", text));
