/*
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two numbers are 
1 by definition, and each subsequent number is the sum of the two previous numbers. Fibonacci numbers often 
appear in mathematics and nature.

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. 
For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering 
that it takes six iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci number that has the number of 
digits specified by the argument. (The first Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than or equal to 2.

*/

// The last example may take a minute or so to run.

/* PEDAC

Problem
The problem is asking us to build a function that returns the number of fibonacci operations it took 
to produce a number with the number of digits specified in the argument. 

Examples / Test Cases
Requirements
- Accept a BigInt type as an input
- The input represents the number of digits in a fibonacci number
- Calculate the number of operations it takes up until the first number with the number of digits specified
in the argument appears
- Return the number of operations, or the index of the first number to appear, to the user
- The return value should be in a bigint format

Data Structure
Input: BigInt that represents the number of digits
Output: BigInt of the index of the target fibonacci number
Intermediate: This seems to be pretty straightforward. Could be recursion or a while loop, but I just need to check the
digits in the number being produced, and, if it contains the number of digits specified in the argument, then stop and 
return which number operation that occurred on. So I need a variable to track the number of operations.

Algorithm
Overall Description
Accept the number of desired digits as an arguments and declare a variable "operationIndex" and set it to 0.
Start computing fibonacci numbers. For each computation, increment the variable "operationIndex" by 1, and check
the number of digits in the result. If the number of digits in the result is equal to the number of digits passed in 
as an argument, then stop computing and return the operationIndex to the caller.

Step by Step
- Accept the number of desired digits, numDigits, as an argument
- Declare a variable "operationIndex" and initialize it to 1
- Set "output" to 1 
- While num digits in output are less than num digits
  - Compute the next fibonacci number
  - Set it equal to output
  - Increment operationIndex by 1
- Return output

Computing the next fibonacci number
I could just put the operationIndex and pass it into the fibonacci sequence, to say how many times I want to compute it.
How do I even describe a recursive algorithm? I feel like I just have to write it. But I will try.
- If depth = 0, return 1
- Take the depth of fibonacci as an argument plus the base value
- Decrement the depth
- Add the base value to the fibonacci number called on the new depth and the base

*/

// Code with intent

const computeFibonacci = (depth) => {
  let currentValue = 1;
  let previousValue = 0;
  let nextValue;
  while (depth > 1) {
    nextValue = currentValue + previousValue;
    previousValue = currentValue;
    currentValue = nextValue;
    depth--;
  }
  return currentValue;
};

const computeFibonacciRecursive = (depth) => {
  if (depth === 1) {
    return 1;
  } else if (depth < 1) {
    return 0
  }

  return (
    computeFibonacciRecursive(depth - 2) +
    computeFibonacciRecursive(depth - 1)
  );
};

console.log(computeFibonacci(12));
console.log(computeFibonacciRecursive(7));

const findFibonacciIndexByLength = (numDigits) => {};

// Examples:

// findFibonacciIndexByLength(2n) === 7n; // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(3n) === 12n; // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
// findFibonacciIndexByLength(10000n) === 47847n;
