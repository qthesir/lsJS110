/*
PEDAC
Problem
Write a function that accepts a string as an argument and returns true if its a pangram,
and false if it is not.

Examples
Requirements
- Accept a string as an argument
- Return true if the string is a pangram, false if not 
- A pangram is a sentence that contains every letter of the alphabet. Each letter 
of the alphabet must appear at least once.
- This is a case insensitive program

Data Structures
Intermediate: I could do one of two things here: Could use regex to get the array of matches
for every character between a and z, do a count, and check to see if it equals 
the length of the alphabet. Alternatively, I could create an array of the alphabet, 
and then, every time that character appears, remove it from the alphabet array with splice,
that is, iterating through the array and splicing each letter out. If the alphabet 
array is empty, then return true. If it is not, return false.

Algorithm 
The function takes a string as an argument. It then declares and initializes an array
of all the letters in the alphabet. It then iterates through each character in the string.
if the character is in the alphabet, remove it. Once the iteration completes, check the
length of the alphabet array. If it is greater than 0, return false. If it is not, return
true.

Step by step
- Accept a string as an argument
- SET Alphabet = [a,b,c,...z]
- For each character in the string:
  - Convert the character to lowercase
  Check if the character is in the alphabet
    - If it is, remove it
- Return alphabet.length === 0 

*/

const isPangram = (string) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  string
    .toLowerCase()
    .split("")
    .forEach((char) => {
      if (alphabet.includes(char)) {
        alphabet.splice(alphabet.indexOf(char), 1);
      }
    });
  return alphabet.length === 0;
};

const isPangramRegex = (string) => {
  let letters = new Set(string.toLowerCase().match(/[a-z]/gi));
  return letters.size === 26;
};

const p = console.log;
p(isPangram("The quick, brown fox jumps over the lazy dog!") === true);
p(isPangram("The slow, brown fox jumps over the lazy dog!") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in fog.") === true);
p(isPangram("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangram("A wizard’s job is to vex chumps quickly in golf.") === true);

let myStr = "Sixty zippers were quickly picked from the woven jute bag.";
p(isPangram(myStr) === true);

p(isPangramRegex("A wizard’s task is to vex chumps quickly in fog.") === false);
p(isPangramRegex("A wizard’s job is to vex chumps quickly in golf.") === true);
