/*
You have to create a function that takes a positive integer number
and returns the next bigger number formed by the same digits
*/


/*
PEDAC

Problem
Write a function that takes a positive integer and returns the 
next largest number comprised of the same digits

Examples
Requirements
- Accept a positive integer input
- Return a the next largest number that can be constructed with the digits 
of the input number. In other words, that represents a re-arrangement of the
input number
- If there is no bigger number that can be created using those digits, then return -1

Data Structures
Input: Positive integer
Output: Next largest integer that can be created using the same digits
Intermediate: There are three steps to this problem: increment the number
by 1, starting with a number that is the input + 1, until the number of 
digits is > input number. In each loop, check to see if the current value
has the same digits at the input. If it does, then that digit should 
be returned to the caller.

Algorithm
Accept a positive integer as an input. Set an output digit to 1 + the 
input. While number of digits in the output is less than the number of 
digits in the output, check to see if the current output has the same
digits as the output. If it does, return the value to the caller. If it 
does not, continue the loop, incrementing the output value by 1. If
the loop terminates without returning a value, then return -1.

Step by step
- Accept an integer as an input
- SET output = int + 1
- While the length of output equals the length of the input:
    - Check to see if the output digits are the same as the input
        - If they are, return output
    - output += 1
- Return -1

HELPER: Check to see if the output digits are equal to the input
- Take two inputs: Output digit and input digit
- Turn the digits to a string, then to an array
- Sort the arrays from highest to lowest
- Turn both arrays back into a string and compare
- If they are equal, return true. If they are not equal, return false.

*/

const isSameDigits = (num, biggerNum) => {
  let sortedNum = String(num).split("").sort((a,b) => Number(a) - Number(b)).join("");
  let sortedBiggerNum = String(biggerNum).split("").sort((a,b) => Number(a) - Number(b)).join("");
  return sortedNum === sortedBiggerNum; 
}

const nextBiggerNum = (num) => {
  let biggerNum = num + 1;
  while (String(biggerNum).length === String(num).length) {
      if (isSameDigits(num, biggerNum)) {
          return biggerNum;
      }
      biggerNum++;
  };
  return -1;
}


// Examples
console.log(nextBiggerNum(9) === -1); // true
console.log(nextBiggerNum(12) === 21); // true
console.log(nextBiggerNum(513) === 531); 
console.log(nextBiggerNum(111) === -1); 
console.log(nextBiggerNum(531) === -1);
console.log(nextBiggerNum(123456789) === 123456798);

/*
Fuck... The guy in the video clued in on the pattern much faster than I did.
Or at least, a better pattern. I was incrementing the digits. You can just swap the 
last 2 fuckin digits! No, wait...

1234
1432, 4132

I'm actually right. My approach was the right approach. Brute force baby. 
*/