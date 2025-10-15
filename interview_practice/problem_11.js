/*
PEDAC
Problem 
Write a function that takes a string as an argument, and then returns an array that
has a substring from the original string at the first index and a number as the second 
string, such that original string = substring * number. It should be the smallest possible
substring and the highest possible repeat count.

Examples / Test Cases
Requirements 
- Accpet a string as an argument
- The string consists of only lowercase alphabetic letters
- Return an array which contains to values: A substring and a number
- The substring and the number should be such that the subtring * number = input string
- If the only substring is the complete string, the return value should be the original
input string and 1

Data Structures
Input
Output
Intermediate: I'm thinking I can just brute force this. Check every possible substring, and
then multiply it by every value until the length is greater than the lenght of the string.
During each substring multiple, check to see if it is equal to the original string. If 
it is, then you can set the multiple and the current substring equal to the array output,
well, beforehand you have to check if the current multiple is greater.

Algorithm
Write a function that accepts a string as an argument. Set an output value to be [input string, 1]. 
For each substring in the string, multiply it by progressively larger numbers until the
resulting string is greater than the length of the current string. If it equals the 
current string exactly, check to see if the multiple is larger than the multiple on 
the current output array. If it is, then set the new output array values to be the 
substring and the multiple used. When the iteration completes, return the output array
to the caller. 

Step-by-step
- SET output = [input string, 1]
- Get substrings of the string
- For each substring:
  let resultString = ''
  let currentMultiple = 2
  - While resultString.length =< inputString.length:
      resultString = substring * 2
      if resultString === inputString AND multiple > output[1]:
        - Assign output to [substring, multiple]
      currentMultiple++
- Return output to the caller 

HELPER: Get substrings
- Accept a string as an argument
- Output = []
- For each character in the string
  - For each subsequent character
    - take a subsegment of the array from the charactre to the current subsequent 
    character and add it to the output
- Return output

*/

const getSubstringArray = (string) => {
  let substrings = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      substrings.push(string.slice(i, j));
    }
  }
  return substrings;
};

const repeatedSubstring = (string) => {
  let output = [string, 1];
  let substrings = getSubstringArray(string);
  substrings.forEach((substring) => {
    let resultString = "";
    let currentMultiple = 2;
    while (resultString.length <= string.length) {
      resultString = substring.repeat(currentMultiple);
      if (resultString === string && currentMultiple > output[1]) {
        output = [substring, currentMultiple];
      }
      currentMultiple++;
    }
  });
  return output;
};

const repeatedSubstringEfficient = (string) => {
  let output = [string, 1];
  for (let i = 1; i <= string.length / 2; i++) {
    if (string.length % i !== 0) continue;

    let substring = string.slice(0, i);
    let currentMultiple = 2;
    let resultString = "";
    while (resultString.length <= string.length) {
      resultString = substring.repeat(currentMultiple);
      if (resultString === string && currentMultiple > output[1]) {
        output = [substring, currentMultiple];
      }
      currentMultiple++;
    }
  }
  return output;
};

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

p(eq(repeatedSubstring("xyzxyzxyz"), ["xyz", 3]));
p(eq(repeatedSubstring("xyxy"), ["xy", 2]));
p(eq(repeatedSubstring("xyz"), ["xyz", 1]));
p(eq(repeatedSubstring("aaaaaaaa"), ["a", 8]));
p(eq(repeatedSubstring("superduper"), ["superduper", 1]));

p(eq(repeatedSubstringEfficient("xyzxyzxyz"), ["xyz", 3]));
p(eq(repeatedSubstringEfficient("xyxy"), ["xy", 2]));
p(eq(repeatedSubstringEfficient("xyz"), ["xyz", 1]));
p(eq(repeatedSubstringEfficient("aaaaaaaa"), ["a", 8]));
p(eq(repeatedSubstringEfficient("superduper"), ["superduper", 1]));

/*
Come to think of it, I probably did not have to get every single substring. 
I could have just gotten the first substring, and then went up to 1/2 of the 
array, which would have made it considerably more efficient. 
*/
