/*
Write a function that returns a list of all palindromic substrings of a string. That is, 
each substring must consist of a sequence of characters that reads the same forward and 
backward. The substrings in the returned list should be sorted by their order of 
appearance in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and pay attention to 
case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA' are not. In addition, 
assume that single characters are not palindromes.
*/

/*
PEDAC

Problem

Input: A string 

Output: An array of all palindrome substrings

Explicit Assumptions: 
- Accept a string
- Output an array of all palindrome substrings of the input string
- A palindrome is a string that reads the same forward and backward
- The definition of a palindrome is strict - it should consider all characters and pay attention to case
- Single characters are not palindromes. Must be greater than 1 character. 
- The palindromes should be sorted in the order they appear in the input string
- Duplicate substrings should be included multiple times 

Implicit Assumptions: 
- The "order in which they appear" appears to be based on index of the starting character. If the starting
index of a character is 0, then it will come before a palindrome whose starting index in the original string
was 1, and 1 will come before 2, and so on. It does not matter how long the subsequent strings are, but for
strings with the same starting index, the sort order appears to be by length. 
- If the input string contains no palindromes, then the output will be an empty array. 

Mental Model
The program will accept a string as an input. It will iterate over the string and identify all
of its substrings, and filter out the substrings that are not palindromes. It will then return the 
final, filtered list of substrings to the caller. 

Examples / Test Cases
See above

Data Structures 
The program will take a string as an input, and then iterate over an array, or the string split into an
array, in order to identify the substrings. The substring aarray will then be filtered, and the return value
to the caller will also be an array, per the requirements.

Algorithm
1. Accept a string as an input
2. Transform the string into an array of all its substrings
  - Get an array of trailing substrings
  - For each trailing substring, get the leading substrings
  - Concat the leading substrings into a single array
3. Select the substrings that are palindromes (filter out all non-palindromes)
4. Return the array to the user

*/

// Code with intent

const trailingSubstrings = (string) => {
  return [...Array(string.length)].flatMap((_, index) =>
    string.substring(index, string.length)
  );
};

const leadingSubstrings = (string) => {
  return [...Array(string.length)].map((_, index) =>
    string.substring(0, index + 1)
  );
};

const substrings = (string) => {
  return trailingSubstrings(string).flatMap((trailingSubstring) =>
    leadingSubstrings(trailingSubstring)
  );
};

const isPalindrome = (substring) => {
  if (substring.length <= 1) {
    return false;
  }

  let i = 0;
  let j = substring.length - 1;
  while (i < j) {
    if (substring[i] !== substring[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

const isPalindrome2 = (substring) => {
  return substring.length > 1 && substring === substring.split("").reverse().join("");
};

const palindromes = (string) => {
  return substrings(string).filter((substring) => isPalindrome(substring));
};

// Examples:

console.log(palindromes("abcd")); // []
console.log(palindromes("madam")); // [ "madam", "ada" ]

console.log(palindromes("hello-madam-did-madam-goodbye"));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes("knitting cassettes"));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
