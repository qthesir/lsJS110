/*
Create a function that takes a non-empty string as an argument. The string consists entirely of 
lowercase alphabetic characters. The function should return the length of the longest vowel substring.
 The vowels of interest are "a", "e", "i", "o", and "u".
*/

/*
Problem
Write a function that accepts a string comprised of entirely lowercase alphabetic characters. Return the length of
the longest vowel substring. 

Examples / Test Cases
Requirements
- Accept a string comprised entirely of lowercase alphabetic characters as an argument
- Return the length of the longest vowel substring 
- Vowels are 'a' 'e' 'i' 'o' 'u'
- A 'substring' is a subset of consequetive characters of the input string 

Data Structures
Intermediate: I'm thinking that I can count consequetive substrings by using a count value, and a longestSubstring
value. If the letter is a vowel, count increments by 1. If it is not a value, set count to 0. If the count is 
greater than longestSubstring, set longestSubstring to count. This should work.

Algorithm
Overview
Accept a string of lowercase alphabetic characters as an argument. Declare & initialize two variables: 
Count and longestSubstring. Every time a vowel is encountered, increment count by 1. If a non-vowel is encountered,
set count to 0. If count, at any point, is greater than longestSubstring, than set longestSubstring to count. 

Step by step
- Accept a string as an argument
- SET Count to 0
- SET longestSubstring to 0
- For each character in string:
  - Check if the character is a vowel
  - If the character is a vowel, increment count by 1
  - If the character is not a vowel, assign count to 0
  - If count > longestSubstring, set longestSubstring to count
- Return longestSubstring

*/

const VOWELS = "aeiou";

const longestVowelSubstring2 = (string) => {
  let vowelSubstringLength = 0;
  let longestVowelSubstringLength = 0;
  for (let i = 0; i < string.length; i++) {
    if (VOWELS.includes(string[i])) {
      vowelSubstringLength++;
    } else {
      vowelSubstringLength = 0;
    }
    if (vowelSubstringLength > longestVowelSubstringLength) {
      longestVowelSubstringLength = vowelSubstringLength;
    }
  }

  return longestVowelSubstringLength;
};

const longestVowelSubstring = (string) => {
  let substrings = string.match(/[a,e,i,o,u]+/g);
  if (substrings === null) return 0;
  console.log(substrings);
  let longestSubstring = 0;
  substrings.forEach((substring) => {
    if (substring.length > longestSubstring) {
      longestSubstring = substring.length;
    }
  });

  return longestSubstring;
};

const p = console.log;
p(longestVowelSubstring("cwm") === 0);
p(longestVowelSubstring("many") === 1);
p(longestVowelSubstring("launchschoolstudents") === 2);
p(longestVowelSubstring("eau") === 3);
p(longestVowelSubstring("beauteous") === 3);
p(longestVowelSubstring("sequoia") === 4);
p(longestVowelSubstring("miaoued") === 5);
