/*
Problem
Accept a string as an argument, and return true if the 
string can be constructed with a multiple of a substring.

Examples
Requirements
- Accept a string as an argument
- Return true if it can be constructed by a multiple of a substring, false otherwise
- The "multiple" must be 2 or greater. It cannot be the 
whole string. 
- The string consists only of lowercase english letters. 

Data Structures
- 

Algorithm
The function will accept a string as an argument. It will
then break that string into substrings. For each of the 
substrings, repeat by numbers 2 up until the length of the 
substring / 2, and check if the new string is equal to the 
input string. If it is, return true. Otherwise, return false.

Step by Step
- Accept String as an argument
- Get substrings of string
- For each substring: 
    - let multiple = 2
    - while multiple =< string.length / 2
        - substring.repeat(multiple)
        - Check to see if substring is equal to original string 
            - Return true
        - mutiple++
- Return false

HELPER: Get substrings
- Accept the input string as an argument
- SET substrings = []
- For each index in the string:
    for each index + 1 to the end of the string:
        - Take the substring (.slice) from index to newIndex + 1
        - Add the substring to the substrings array
- Return substrings 

*/

const getSubstrings = (string) => {
  let substrings = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      let substring = string.slice(i, j);
      if (substring.length <= string.length / 2) {
        substrings.push(substring);
      }
    }
  }

  console.log(substrings);

  return substrings;
};

const getLeadingSubstrings = (string) => {
  let substrings = [];
  for (let i = 1; i <= string.length; i++) {
    let substring = string.slice(0, i);
    if (
      substring.length <= string.length / 2 &&
      string.length % substring.length === 0
    ) {
      substrings.push(substring);
    }
  }

  console.log(substrings);

  return substrings;
};

const getSubstrings2 = (string) => {
  let regex = /[a-z]/g;
  let substrings = string.match(regex);
  console.log(substrings);
  return substrings;
};

const repeatedSubstringPattern = (string) => {
  let substrings = getLeadingSubstrings(string);
  for (const substring of substrings) {
    let multiple = string.length / substring.length;
    console.log(substring.repeat(multiple));
    if (substring.repeat(multiple) === string) {
      return true;
    }
  }
  return false;
};

console.log(repeatedSubstringPattern("abab") === true);
console.log(repeatedSubstringPattern("aba") === false);
console.log(repeatedSubstringPattern("aabaaba") === false);
console.log(repeatedSubstringPattern("abaababaab") === true);
