/*
Alphabet Symmetry
Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would occupy in the alphabet, which are positions 4 and 5. 

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) // [4, 3, 1]

Input will consist of alphabetic characters, both uppercase and lowercase. No spaces.
*/

/*
Algorithm 

- The function accepts an array of strings 'strArray' as an argument
- Declare a result array called 'result'
- For each element in strArray:
  - Count how many letters are in the 'right' position
  - Add the count to the 'result' array
- Return the result array to the caller

Count how many letters are in the right position
- Declare a variable 'alphabet' which has all the letters in the alphabet
- Declare an output variable "count" and set it to 0
- For each character in the string:
  - Check if the index in the character is equal to the index in the alphabet
  - If it is equal, increment count by 1
- Return the count to the caller

*/

const countLettersInRightPosition = (word) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let count = 0;
  word.split("").forEach((letter, index) => {
    if (index === alphabet.indexOf(letter.toLowerCase())) {
      count += 1;
    }
  });
  return count;
};
const solve = (strArray) => {
  let result = [];
  strArray.forEach((word) => {
    result.push(countLettersInRightPosition(word));
  });
  return result;
};

// JavaScript test cases
console.log(solve(["abode", "ABc", "xyzD"])); // [4,3,1]
console.log(solve(["abide", "ABc", "xyz"])); // [4,3,0]
console.log(solve(["IAMDEFANDJKL", "thedefgh", "xyzDEFghijabc"])); // [6,5,7]
console.log(solve(["encode", "abc", "xyzD", "ABmD"])); // [1, 3, 1, 3]
