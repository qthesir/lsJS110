/*
The Fibonacci series is a sequence of numbers in which each number is the sum of the previous two numbers. 
The first two Fibonacci numbers are 1 and 1. The third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, 
the fifth is 2 + 3 = 5, and so on. In mathematical terms, this can be represented as:

F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed 
to the function.
*/

/*
PEDAC

Problem
The problem is asking us to write a recursive function that takes the nth index of the fibonacci number 
we'd like to compute as an argument, and returns the value of the fibonacci number at the nth index.

Examples / Test Cases
- Accept the nth fibonacci number to be computed as an argument
- Return the value of the nth fibonacci number
- The value of the fibonacci number is defined as F(n) = F(n-1) + F(n-2) where n > 2
  - F(1) = 1
  - F(2) = 1
- The function should call itself at least once
- The function should have a base case / ending condition

Data Structures
Input: The nth index of the fibonacci number
Output: The value of the fibonacci number at the nth index
Intermediary: Likely none. This will be simple integer computation

Algorithm 
Mental Model
The function will accept the nth fibonacci number to be computed as an argument. It will check to see if 
the number is equal to 1 or 2, in which case it will return 1. For numbers larger than 1 or 2, the function
will call itself with the index reduced by 1 PLUS itself with the index reduced by 2 - i.e., return 
F(n-1) + F(n-2).

Step by step
- Accept n as an argument
- Check to see if n is equal to 1 or 2
  - If it is, return 1
- Return the value of fibonacci(n-1) + fibonacci(n-2) to the caller

*/

const fibonacci = (n) => {
  if (n <= 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

// Examples

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765

// Testing tail recursion

/*
Ok, so we want to start with the factorial sequence. 
*/

const factorial = (n, a = 1) => {
  if (n === 1) return a;
  return factorial(n - 1, a * n);
};

console.log(factorial(5));

const fibonacciEfficient = (n, a = 0n, b = 1n) => {
  if (n === 0n) return a;
  if (n === 1n) return b;

  return fibonacciEfficient(n - 1n, b, a + b);
};

console.log(fibonacciEfficient(500n));

/*
In both cases, in tail recursion, there is an accumulated value that is passed down to the next recursive call.
When this happens, the execution is similar to a while loop. Its very fast, very efficient. Then, instead
of returning a base case, and going up from there, the accumulated value is returned at the end of the sequence.

This is a neat trick. 
*/
