/*
Write a function that returns true if its integer argument is palindromic, or false otherwise. 
A palindromic number reads the same forwards and backwards.

*/

// Examples:

isPalindromicNumber(34543); // true
isPalindromicNumber(123210); // false
isPalindromicNumber(22); // true
isPalindromicNumber(5); // true

/*
PEDAC 

Input: Numerical Value 
Output: True if palindrome, false if not

Explicit Requirements
- The function returns true if the argument is a palindrome and false if it is not
- A palindrome, in this case, is a number which has the same digits in the same places if it is reversed
- The function accepts only numerical values; not string values or objects

Implicit Requirements
- The number, when reversed, should have the same value in terms of quantity. 
- If the number is a single digit, it is a palindrome

Mental Model

The program takes a numerical value. It converts that numerical value to a string and reverses its order.
It then converts it back to a number. Finally, it compares the original value to the reversed value,
and returns the result to the caller. 

Examples / Test Cases

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

Data Structure
The number input will have to be coherced to a string. That string could then be converted to 
an array in order to be reversed. It could then be coherced back into a number and compared with
the original value. 

Although, this is not necessarily the case. We could also run a comparison between the 1st and last 
digit, the 2nd and second last digit, and so on, until we reach the middle. This would still require
breaking the original value into a string, however, but it would avoid the step of breaking it into 
an array. This would resemble the "two pointer" technique, as that other guy in the forum put it. 

Algorithm
- The function accepts a number as an argument
- Convert the number into a string
- Convert the string into an array
- Reverse the array
- Turn the array back into a string
- Coherce the string to a number and compare to the original value


*/

// Code with intent

function isPalindromicNumber(number) {
  let reversedNumber = Number(String(number).split("").reverse().join(""));
  return reversedNumber === number;
}

console.log(isPalindromicNumber(34543)); // true
console.log(isPalindromicNumber(123210)); // false
console.log(isPalindromicNumber(22)); // true
console.log(isPalindromicNumber(5)); // true

function isPalindromicNumber2(number) {
  let numberStr = String(number);

  let i = 0;
  let j = numberStr.length - 1;

  while (i < j) {
    if (numberStr[i] === numberStr[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isPalindromicNumber2(34543)); // true
console.log(isPalindromicNumber2(123210)); // false
console.log(isPalindromicNumber2(22)); // true
console.log(isPalindromicNumber2(5)); // true
