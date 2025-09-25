/*Modify the function from the previous exercise so it ignores non-alphabetic characters when 
determining whether it should uppercase or lowercase each letter. The non-alphabetic characters 
should still be included in the return value; they just don't count when toggling the desired case.
*/

// Example:

/*
PEDAC

Problem
The problem is asking me to capitalize every other letter of an input string, ignoring the non-alphabetic
characters in between those letters. It also needs to lowercase the otherwise capital letters, so this
needs to be explicitly handled by the program.

Examples / Test Cases
Requirements
- Take a string as an input
- Return the string with every other alphabetic character capitalized
- Ignore the non-alphabetic characters in between the alphabetic characters for capitalization order
- The capitalization order starts with a capitalized character, and then alternatives to a lower case
character.

Data Structures
Input: A string
Output: The same string with every other alphabetic character capitalized
Intermediate: I could transform the string into an array to use built in array methods, but it will not be
necessary. I will, however, have to create a variable that contains all the letters in the alphabet to check
to see if the character is alphabetic or not. This will be a const at the top of my program and a string.

Algorithm
The program will accept a string as an input. It will iterate through each character in the string. For 
each character, it will check if it is an alphabetic character, and whether or not the previous 
character was capitalized. If its alphabetic and the previous character was not capitalized, it will 
capitalize the character. If its alphabetic and the previous character was not capitalized, it will lowercase
the character. If it is not alphabetic, the character will be added to the new string as is.

Algorithm
- Accept a string as an argument
- Declare an output string 'output' and initiliaze to ''
- Declare a variable 'lastLetterCapitalized' and set it to 'false'
- For each character in the string:
  - If the character is alphabetic (lower or uppercase) && the lastLetterCapitalized is false:
    - Change the character to uppercase
    - set lastLetterCapitalized to true
  - Otherwise
    - Change the character to lowercase
  - Add the character to the output string
- Return the output string

*/

ALPHABETIC_CHARACTERS = "abcdefghijklmnopqrstuvwxyz";

const staggeredCase = (string, countNonAlphabeticCharacters = false) => {
  let output = "";
  let lastLetterCapitalized = false;

  if (countNonAlphabeticCharacters) {
    output = string.split("").reduce((acc, cv, index) => {
      index % 2 === 0 ? (acc += cv.toUpperCase()) : (acc += cv.toLowerCase());
      return acc;
    }, "");
  } else {
    for (let i = 0; i < string.length; i++) {
      if (
        ALPHABETIC_CHARACTERS.includes(string[i].toLowerCase()) &&
        !lastLetterCapitalized
      ) {
        output += string[i].toUpperCase();
        lastLetterCapitalized = true;
      } else if (ALPHABETIC_CHARACTERS.includes(string[i].toLowerCase())) {
        output += string[i].toLowerCase();
        lastLetterCapitalized = false;
      } else {
        output += string[i];
      }
    }
  }
  return output;
};

const staggeredCase2 = (string, countNonAlpha = false) => {
  let output;
  let needUpper = false;
  output = [...string]
    .map((char) => {
      char = char.toLowerCase();
      if (!(char <= "z" && char >= "a") && !countNonAlpha) {
        return char;
      }
      needUpper = !needUpper;
      return needUpper ? char.toUpperCase() : char.toLowerCase();
    })
    .join("");

  return output;
};

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

console.log(staggeredCase("I Love Launch School!", true)); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase("ALL_CAPS", true)); // "AlL_CaPs"
console.log(staggeredCase("ignore 77 the 4444 numbers", true)); // "IgNoRe 77 ThE 4444 nUmBeRs"

console.log(
  staggeredCase2("I Love Launch School!") === "I lOvE lAuNcH sChOoL!"
);
console.log(staggeredCase2("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase2("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

console.log(staggeredCase2("ALL CAPS"));

console.log(staggeredCase2("I Love Launch School!", true)); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase2("ALL_CAPS", true)); // "AlL_CaPs"
console.log(staggeredCase2("ignore 77 the 4444 numbers", true)); // "IgNoRe 77 ThE 4444 nUmBeRs"
