/*
Write a function that takes an array of integers between 0 and 19 and returns an array of 
those integers sorted based on the English word for each number:

zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, 
fourteen, fifteen, sixteen, seventeen, eighteen, nineteen
*/

/*
PEDAC

Problem

Input: A list of numbers, number type

Output: A sorted list of numbers sorted by their english word equivalent

Explicit Requirements: 
- Take an array of numbers as an input
- The numbers will be between 0 and 19 
- Sort by the english word equivalent of each number
- 

Implicit Requirements:
- Sort by the entire word; no special operation
- Sort by unicode value 
- The english letters are all lowercase

Mental Model:
The program will take an array of numbers as an input. It will map those numbers to their english word equivilant.
It will then sort the array by the english words.

Examples / Test Cases
See above

Data Structures
The program will take an array as an input, use an object with a mapping from numbers to their english words
equivilant, and reference that array object while iterating through the sort array method, and return the sorted 
object. At least, this is the technique I will likely go with. I should remember that sort is destructive so, in 
the interest of making sure the function either returns a value or has a side effect and does not do both,
I should not mutate the original array. 

Algorithm
1. Take an array of numbers "numArr" as an input
2. Set NUMBER_OF_WORDS to the mapping between numbers and words 
3. Sort numArr based on the english word mapping of each number in NUMBER_OF_WORDS
4. Return the sorted array

*/

// Code with intent

const NUMBER_TO_WORD = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
};

const alphabeticNumberSort = (numArr) => {
  return [...numArr].sort((firstNumber, secondNumber) => {
    if (NUMBER_TO_WORD[firstNumber] < NUMBER_TO_WORD[secondNumber]) {
      return -1;
    } else if (NUMBER_TO_WORD[firstNumber] > NUMBER_TO_WORD[secondNumber]) {
      return 1;
    } else {
      return 0;
    }
  });
};

// Example

console.log(
  alphabeticNumberSort([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ])
);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
