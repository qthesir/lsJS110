// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes and 2 or more characters long.
// Consider palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

/*
Input: string
Output: array (new object)

Explicit Assumptions:
1. Palindrome substrings are case sensitive.
2. Palindrome substrings are two characters or greater in length.
3. The function returns all of the substrings from a given string.
Implicit Assumptions:
1. What will happen to space characters?
2. Does the function accept non-string inputs?
3. The output substrings will be an array object. 
4. The same characters can be re-used in a substring, so long as it is a unique substring. 
5. If the input is an empty string, the output should be an empty array. 


*/ 