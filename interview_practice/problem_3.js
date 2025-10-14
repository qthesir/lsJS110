/*
PEDAC

Problem
Write a function that takes a string as an argument, and returns a copy of the string argument with every second 
character of every third word capitalized. 

Examples 
Requirements
- Accept a string as an argument
- Return a copy of the string with every other letter in every third word capitalized 
- "words" in this case are delimited by spaces
- If the word only contains 1 letter, no letters are capitalized 
- The first word, at the 0th index, is not capitalized 

Data Structures
Input: A string
Output: A copy of the input string with every other letter of every third word capitalized
Intermediate: I will first split the string into an array of words. Then, I will loop through the words.
If the index + 1 is a multiple of 3, then I will loop through the word, and capitalize every character if the
index + 1 is a multiple of 2

Algorithm 
The function will accept a string as an argument. It will split the string into an array of words. For each word,
the function will check if the index + 1 is a multiple of 3. If it is, it will iterate through each character of
that word, and if the character's index + 1 is a multiple of 2, then it will capitalize that character. 

Step by step
- Accept a string as an input
- SET output = []
- Split the string into an array of words
- For each word:
  - Check if the current index + 1 is a multiple of 3
  - If it is, capitalize every other letter
  - Add the word to the output string
- Concatenate the output string
- Return the output string to the caller

HELPER: Capitalize every other letter 
- Accept a word as an argument
- SET newWord = ''
- For each character in the word:
  - If the index + 1 is a multiple of 2:
      - Capitalize the letter
  - Add the character to newWord
- Return newWord

*/

// Code with intent

const weirdCaseWord = (word) => {
  let newWord = "";
  for (let i = 0; i < word.length; i++) {
    if ((i + 1) % 2 === 0) {
      newWord += word[i].toUpperCase();
    } else {
      newWord += word[i];
    }
  }
  return newWord;
};

const weirdCaseWord2 = (word) => {
  return word
    .split("")
    .map((char, index) => ((index + 1) % 2 === 0 ? char.toUpperCase() : char))
    .join("");
};

const toWeirdCase = (string) => {
  return string
    .split(" ")
    .map((word, index) => {
      if ((index + 1) % 3 === 0) {
        return weirdCaseWord2(word);
      }
      return word;
    })
    .join(" ");
};

const p = console.log;

const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

let original = "Lorem Ipsum is simply dummy text of the printing world";
let expected = "Lorem Ipsum iS simply dummy tExT of the pRiNtInG world";
p(toWeirdCase(original) === expected);

original = "It is a long established fact that a reader will be distracted";
expected = "It is a long established fAcT that a rEaDeR will be dIsTrAcTeD";
p(toWeirdCase(original) === expected);

p(toWeirdCase("aaA bB c") === "aaA bB c");

original =
  "Mary Poppins' favorite word is " + "supercalifragilisticexpialidocious";
expected =
  "Mary Poppins' fAvOrItE word is " + "sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS";
p(toWeirdCase(original) === expected);
