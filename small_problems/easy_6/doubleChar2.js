/*
Write a function that takes a string, doubles every consonant character in the string, and returns the 
result as a new string. The function should not double vowels ('a','e','i','o','u'), digits, punctuation, 
or whitespace.
*/

/*
PEDAC

Input: String of characters

Output: String of characters with every character doubled except vowels, digits, punctuation, and 
whitespace. 

Explicit Requirements
- The program will accept a string as an input
- The program will output the input string will all characters doubled except vowels, digits, 
punctuation, and whitespace
- 

Implicit Requirements
- Strings will also not double special characters, assuming that they are included in the definition
of punctuation
- Therefore, the only allowable characters will be consonants
  - This actually may not be true... What about other special characters in other languages? Its 
  dangerous to make an assumption about this. 

Questions
- Are special characters considered punctuation?
- In regex, punctuation does include @. The function name is also "doubleConsonants." So I supposed 
I can reasonably assume that the program wants to only double consonants.  

Mental model
The program will take a string as an input. It will iterate through each character in the array,
and check if that character is a vowel, digit, punctuator, or whitespace. If it is, it will not double
the character. If it is not, then it will double the character. It will then return the doubled string
to the caller. 

Examples / Test Cases

Data Structures
Like the previous problem, the program will accept a string as an input, turn it into an array 
to perform array operations, and then turn the array back into a string.

Algorithm
- Accept a string as an input
- Define an output array
- Double each element in the output array except for vowels, digits, punctuations, and whitespace
- Turn the array back into a string
- Return the string to the user

Helper function
Check if the element is in the exclusion list
- Accept a character as an argument
- Check that element against a list of consonants
- If the element is a consonant, return true. 
- If the element is not a consonant, return false.
*/

// Code with intent

const CONSONANTS = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const doubleConsonants = (string) => {
  return string
    .split("")
    .map((ele) => {
      return isConsonant(ele) ? ele + ele : ele;
    })
    .join("");
};

const isConsonant = (element) => {
  return CONSONANTS.includes(element.toLowerCase());
};

// Examples

console.log(doubleConsonants("String")); // "SSttrrinngg"
console.log(doubleConsonants("Hello-World!")); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants("July 4th")); // "JJullyy 4tthh"
console.log(doubleConsonants("")); // ""

/*
I attempted to simplify the requirements to only include alphabetic characters, but this does not 
include special characters, which are not explicitly excluded by the requirements. Therefore, 
and exclusion list is more appropriate, rather than an inclusion list. 

Seems like I may be wrong about this - in regex, punctuation does include @. The function name 
is also "doubleConsonants." So I supposed I can reasonably assume that the program wants 
to only double consonants.  
*/
