/*
In the previous exercise, you developed a function that converts simple numeric strings to integers. 
In this exercise, you're going to extend that function to work with signed numbers.

Write a function that takes a string of digits and returns the appropriate number as an integer. 
The string may have a leading + or - sign; if the first character is a +, your function should return a 
positive number; if it is a -, your function should return a negative number. If there is no sign, return 
a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript, such as parseInt() and 
Number(). You may, however, use the stringToInteger() function from the previous lesson.
*/

/*
PEDAC
Problem

Input: string of numbers and a plus or minus sign

Output: number type of the string of numbers, negative or positive depending on whether a +, -, or no symbol
are present.

Explicit Requirements
- The input will contain a valid number
- The first character could be a + or -, or it may not. 
- If it is a -, return a negative number. If it is a + or nothing, return a positive number.
- The input will always be a string

Implicit Requirements
- The + and - symbols will only appear at the beginning of the string, not in any other string slot

Questions
- The problem statement says the input will always contain a valid number - 1 singular number. Does that mean 
that there can be characters other than numbers? It isn't explicitly stated. 
  - I think the answer here is yes, per the input being a "string of digits"
- Will this problem, like the previous one, return a base? 

Mental Model
The program will accept a string of digits and a base as an input. It will first determine whether the first digit is
+, -, or a number. It will then convert each individual digit into a number type (with the exception of the + or -,
if this is identified), and sum those digits with the base. Finally, it will return the sum with the sign 
according to what the first digit is. 

Data Structure
In order to more easily iterate through the digits, those digits should be stored in an array. When converting to
number type, the number conversions can be stored in an object, mapping the string (property) to the numerical value.

Algorithm 
1. Accept a string, str, as an argument, and a base, which is set to 10 as a default
2. Evaluate which numerical value the first digit maps to
  - If it is a + or -, store the sign in the variable "sign" and remove the first character
3. Store the number in an array
4. Repeat for each number in the string
5. Sum the numbers using base 10
6. Return the sum to the user
  If the sign is -, return a negative. If it is +, return a positive value. If the sign is empty, return a 
  positive value. 

Sum the numbers
1. Set the total to 0
2. Reverse the array of numbers
3. Multiply the number by the base raised to the index (i.e. 5 * base^(idx))
4. Add the number to the total
5. Repeat for each number in the array
6. Return the total

*/

// Code with intent

// Examples

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

function stringToSignedInteger(numberString, base = 10) {
  if (numberString[0] === "+") {
    return stringToInteger(numberString.slice(1), base);
  } else if (numberString[0] === "-") {
    return -stringToInteger(numberString.slice(1), base);
  } else {
    return stringToInteger(numberString, base);
  }
}

function stringToInteger(numberString, base = 10) {
  let numberArray = [];
  for (let i = 0; i < numberString.length; i++) {
    numberArray.push(convertToNumber(numberString[i].toLowerCase()));
  }
  return sumToBase(numberArray, base);
}

function convertToNumber(number) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };

  return DIGITS[number];
}

function sumToBase(numberArray, base) {
  return numberArray.reverse().reduce((acc, cv, idx) => {
    return acc + cv * Math.pow(base, idx);
  }, 0);
}

// Examples

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

console.log(stringToInteger("4D9f", 16) === 19871); // logs true;
