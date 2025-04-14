/*
In the previous exercise, you developed a function that converts non-negative numbers to strings. 
In this exercise, you're going to extend that function by adding the ability to represent 
negative numbers as well.

Write a function that takes an integer and converts it to a string representation.

You may not use any of the standard conversion functions available in JavaScript, such as 
String() and Number.prototype.toString(). You may, however, use integerToString() from the 
previous exercise.

You might also want to check the Math.sign() function.
*/

/*
PEDAC
Problem

Input: integer

Output: Signed integer string representation

Explicit Assumptions
- The program will take a positive or negative integer as an input 
- The program will output a signed string representation of the integer passed in as an argument
- The function will only take in integers. It will not take strings, arrays, objects, or any other 
value. 

Implicit Assumptions
- Positive and negative values will be represented with a + or a - at the 0th index of the string. 
- If the number is 0, it will have no sign. There is no other number with this characteristic. Every other
value will contain a + or -. 

Mental Model
The program will take an integer as an input. It will determine and capture the sign of the input. Then, 
it will convert the number into its absolute value and capture its individual digits, and turn those 
digits into a string. It will then concatenate the values of the string and return them to the user. 

Data Structures
Like the previous exercise, this exercise will use an array to capture the individual digits in the integer,
and an object to map a numerical digit to its string equivilant. 

Algorithm
Algorithm
1. Accept a non-negative integer as an argument
2. Capture the sign of the number, then convert it to absolute value
3. Turn the larger number into its respective digits
4. Turn each digit into a string
5. Concatenate the string and return it to the user with the with the sign as a prefix. 

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

// Examples

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

function signedIntegerToString(int) {
  let sign;
  switch (Math.sign(int)) {
    case 1:
      sign = "+";
      break;
    case -1:
      sign = "-";
      break;
    default:
      sign = "";
      break;
  }

  int = Math.abs(int);

  let digitArr = integerToDigits(int);

  return sign + digitsToString(digitArr);
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

/*
Notes & Reflection

What's the value of PEDAC? Its a structured way to start writing your thoughts down. 
Its a way to start getting your thoughts into a medium, without swirling in 
overwhelm. 

Got caught with the switch statement - need to include a break statement after
each case, or else it will "fall through" to the last case, and, in this instance,
I'm changing the value of sign with each fall through. 

*/
