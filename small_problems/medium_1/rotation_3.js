/*
Take the number 735291 and rotate it by one digit to the left, getting 352917. Next, 
keep the first digit fixed in place and rotate the remaining digits to get 329175. 
Keep the first two digits fixed in place and rotate again to get 321759. 
Keep the first three digits fixed in place and rotate again to get 321597. 
Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. 
The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. 
You can (and probably should) use the rotateRightmostDigits function from the previous exercise.
*/

/*
PEDAC

Problem

Input: An integer

Output: The integer after performing a maximum rotation

Explicit Assumptions
- Take a number as an input
- Output the number with a "max rotation"
- A "max rotation" is defined as performing a series of rotations on the number. The first rotation on the whole
number, and then on subsequent indices to the end of the number, until all elements have been traversed. 

Implicit Assumptions
- The function only accepts whole numbers (integers)

Questions 

Mental Model
The function will accept an integer as an argument. It will then perform a rotation of the rightmost digit 
starting with the whole integer, and then the same integer with the last length - 1 rightmost digits, and
then with length - 2 rightmost digits, and so on, until length - 1 = 1. The function will then return the 
integer with the maximum rotation to the caller. 

Examples / Test Cases
See above

Data Structures
The program will accept an integer as an argument. It will then convert it into a string, to make it 
easier to perform the rotation. Once the rotation is complete, it will be coherced back to an integer and 
returned to the caller. 


Algorithm
- Accept an integer as an argument
- Turn the integer into a string
- For each index in the string:
  - Perform a rotation with (string - index) rightmost digits held in place
- Turn the string back into a number
- Return the number to the caller 

*/

// Code with intent

const rotateStr = (str) => {
  return str.slice(1) + str[0];
};

const rotateRightmostDigits = (intToRotate, rightmostDigitsToRotate) => {
  let array = String(intToRotate).split("");
  return Number(
    array
      .concat(array.splice(array.length - rightmostDigitsToRotate, 1))
      .join("")
  );
};

const maxRotation = (number) => {
  let numberLength = String(number).length;
  for (let i = numberLength; i >= 2; i--) {
    number = rotateRightmostDigits(number, i);
  }

  return number;
};

// Examples:

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845

/*

Notes and reflections

What IS a maximum rotation? Its kind of difficult to form a pattern of the input and the output. It seems almost
shuffled. How can I make sense of this with my human mind? Or, perhaps, I'm not supposed to, and the maximum 
rotation steps are what I should use? 

*/
