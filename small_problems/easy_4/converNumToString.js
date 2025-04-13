/*

In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. 
In this exercise and the next, you're going to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3, and so on) to the string 
representation of that integer.

You may not use any of the standard conversion functions available in JavaScript, such as String(), 
Number.prototype.toString, or an expression such as '' + number. Your function should do this the old-fashioned 
way and construct the string by analyzing and manipulating the number.

*/

/* 
PEDAC

Problem

Input: non-negative integer 

Output: String representation of the input

Explicit requirements
- The program will accept a non-negative integer

Implicit requirements
- The program will accept 0
- The program will not handle leading 0s 

Mental Model
The program will accept a non-negative integer as an input. It will then distill each of the digits of that number
using some mathematical analysis, concatenate each one to a string, and return it to the user. 

Examples / Test Cases

integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"

Data Structures 
The program will take a number as an input. The transformation of that number will happen mathematically, and 
the result will need to be turned into a string, perhaps via unicode mapping, which  could be stored in an 
object. The string will then have to be concatenated together - this can be done with or without an array. 

Algorithm
1. Accept a non-negative integer as an argument
2. Turn the larger number into its respective digits
3. Turn each digit into a string
4. Concatenate the string and return it to the user

Helper Function: Turn the larger number into its respective digits
1. Accept a value, val as an argument
2. Set the value to be moduloed, mod, to 10 initially
3. digit = (val % mod) / (mod / 10)
4. add the digit to the beggining of an array
5. mod = mod * 10
6. val = val - (val % mod)
6. repeat until no digits remain

Helper Function: Turn each digit into a string
- Accept an array of digits 
- set strNumber = ''
- Convert the first digit into a string
- concatenate that digit to strNumber
- repeat for all numbers in the digits array
- return the string

*/

// Code with intent

function integerToString(int) {
  let digitArr = integerToDigits(int);
  return digitsToString(digitArr);
}

function integerToDigits(int) {
  let digitArr = [];
  let mod = 10;
  do {
    let digit = (int % mod) / (mod / 10);
    // console.log({int, digit, mod})
    digitArr.unshift(digit);
    int = int - (int % mod);
    mod = mod * 10;
  } while (int > 0);

  return digitArr;
}

function digitsToString(digitArr) {
  const DIGITS = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
  };

  let strNumber = "";
  for (let i = 0; i < digitArr.length; i++) {
    strNumber = strNumber + DIGITS[digitArr[i]];
  }
  return strNumber;
}

// Examples:

console.log(integerToString(4321)); // "4321"
console.log(integerToString(0)); // "0"
console.log(integerToString(5000)); // "5000"
console.log(integerToString(1234567890)); // "1234567890"

console.log(integerToDigits(541)); // [5,4,0]

console.log(digitsToString([5, 4, 1]));

/*
Notes and Reflection

Interestingly, instead of string operations, this program will require arithmetic operations to distill the 
individual digits. 

So, how can we distill a numbers individual digits? What strategies can we use here? 

Well, we could use the modulo. This would leave the remainder. But for a number like 54321, I'm getting 1 with 
% 10, but then 21 with % 100. But I just want the 2. Hmmm. 

Could I somehow do the inverse of the log base 10 summation? Like, what would I do here? 

Other option is modulo, and then divide by the next largest digit and round down. This seems kind of 
rough though. 

How do you isolate a digit from a number in a specific spot?

Another way to have done it, as opposed to changing the modulo around and subtracting the value from the 
number on each iteration, you could have done math.floor of the number / 10 each iteration. This would have 
reduced the number by 10, going from the 1s place, to the 10s, to the 100s etc., until the number was equal 
to 0. Very similar in flavor to what I did for my function, but more elegant. Much simpler. This operation
could also be viewed as "chopping off" the rightmost number. That is its effect. 

The other thing: I did not have to use an object. I could have just used an array, and then the values of the digits
I collected would have just been the index. Duh. 


*/
