/*
PEDAC

Problem
Write a function that takes two strings, and returns true if the second string can 
be built out of the characters in the first string, false if not.  

Examples 
Requirements
- Accpet two strings as an argument
- Return true if the second string can be constructed from characters in the first string,
false if not.
- Characters can only be used once to construct the new string. If the first argument string
contains 1 o for example, that o cannot be used twice. 

Data Structures
Intermediate: What I'm thinking here, is that I can split the first word into an
array and use it as a letter "resevoir" for the second word to be constructed.
I'll iterate through each character in the second string, and see if it exists in the
first string. If it does, I will remove it and continue the loop. If it does not, 
at any point, then the whole function returns false. If the loop completes, then the
function returns true. 

Algorithm
Write a function that takes two strings as an argument. Split the first string into 
an array. For each character of the second string, check to see if that character is in
the first string. If it is, then remove it from the string, and continue the loop. If it
is not, return false to the caller of the function. If the loop completes, return true to
the caller.

Step by step
- Accept two strings as arguments
- Split the first string into an array
- For each character in the second string:
  - Check to see if the character is present in the first string
  - If it isn't present, return false to the caller
  - If it is present, remove it from the string
- Return true

*/

const unscramble = (resevoirString, newString) => {
  let characterResevoir = resevoirString.split("");
  for (let char of newString) {
    if (characterResevoir.includes(char)) {
      characterResevoir.splice(characterResevoir.indexOf(char), 1);
    } else {
      return false;
    }
  }
  return true;
};

const p = console.log;
p(unscramble("ansucchlohlo", "launchschool") === true);
p(unscramble("phyarunstole", "pythonrules") === true);
p(unscramble("phyarunstola", "pythonrules") === false);
p(unscramble("boldface", "coal") === true);
