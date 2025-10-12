/*
Search Word (part 1)

Write a function that takes two arguments, a word and a string of text, and returns an integer 
representing the number of times the word appears in the text.

You may assume that the word and text inputs will always be provided, and that all 
word breaks are spaces. Thus, some words will include punctuation such as periods 
and commas. Also assume that the search is case-insensitive.


*/

/*
PEDAC

Problem
Write a function that takes a sentence and a word to search for as an argument, and outputs the number
of times that word appears in the sentence.

Examples / Test Cases
Requirements 
- Accept two arguments, the word to be searched a string of text
- Output the number of times the word appears in the string of text
- A 'word' in the sentence is separated by spaces. 
- Some words will contain punctuation, if it is adjacent to that word and not separated by a space
- If a word is next to some punctuation, the function should still return a positive count for that word
- The word search is case insensitive 

Data Structures 
Input: A word to search for, and text to search
Output: The number of times the word appearas in the text
Intermediate: There are probably a couple of ways to do this. Although its fuzzy, I wonder if you could 
count the number of matches in a regex pattern. You can also split the text into an array of words, filter
the array on the matching words, and then get the length of the array. You could also use reduce and get a 
count. The way you could filter out the non-alphabetic characters using this method would be to use regex
on letters a-z, case insensitive. 

Algorithm 
The program takes a word and text as an input. It then splits the text into an array of words, and iterates
through each word. If the word matches the input word, then it increments a count by 1. When the iteration 
is complete, the program will return the count to the caller.

Step-by-step
- Take a 'searchWord' and 'text' as an input
- Split the text into an array of words 'wordArr'
- Declare a variable 'count' and initialize it to 0
- For each word in wordArr:
  - Strip the non-alphabetic characters from the word
  - See if the stripped word is equal to searchWord
  - If it is, increment count by 1
- Return count 

*/

// Examples

const searchWord = (wordToSearch, text) => {
  return text.split(" ").reduce((totalOccurences, word) => {
    let filteredWord = word.match(/^[a-z]+/gi)[0];
    if (filteredWord.toLowerCase() === wordToSearch.toLowerCase()) {
      totalOccurences += 1;
    }
    return totalOccurences;
  }, 0);
};

const searchWord2 = (wordToSearch, text) => {
  const regex = new RegExp(`\\b${wordToSearch}\\b`, "gi");
  const matches = text.match(regex);

  return matches ? matches.length : 0;
};

const searchWord3 = (wordToSearch, text) => {
  if (!wordToSearch || !text)
    return "Please enter the word to search and the text to search on";
  let regex = new RegExp(`^${wordToSearch}$`, "gi");
  return text.split(" ").reduce((totalOccurences, word) => {
    let filteredWord = word.match(/^[a-z]+/gi)[0];
    return filteredWord.match(regex) ? totalOccurences + 1 : totalOccurences;
  }, 0);
};

const text =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

console.log(searchWord("sed", text)); // 3
console.log(searchWord("laudantium", text)); // 1

console.log(searchWord("qui", text)); // 4

console.log(searchWord2("sed", text)); // 3
console.log(searchWord2("laudantium", text)); // 1

console.log(searchWord2("qui", text)); // 4

console.log(searchWord3("sed", text)); // 3
console.log(searchWord3("laudantium", text)); // 1

console.log(searchWord3("qui", text)); // 4

console.log(searchWord3("qui")); // 4
