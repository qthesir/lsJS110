/*
Our recursive fibonacci function from an earlier exercise isn't very efficient. It starts slowing down 
with an nth argument value as low as 35. One way to improve the performance of our recursive fibonacci 
function (and other recursive functions) is to use memoization.

Memoization is an approach that involves saving a computed answer for future reuse, instead of computing 
it from scratch every time it is needed. In the case of our recursive fibonacci function, using memoization 
saves calls to fibonacci(nth - 2) because the necessary values have already been computed by the recursive 
calls to fibonacci(nth - 1).

For this exercise, your objective is to refactor the recursive fibonacci function to use memoization.

*/

/*
PEDAC

Problem
The problem is asking us to refactor the recursive fibonacci function to use memoization.

Examples / test cases

Data Structures

Algorithm
Mental model
The function will take the nth fibonacci index as an argument. It has base cases at nth = 0 and nth = 1, where
the two fibonacci numbers both will return 1, respectively. If nth is not 0 or 1, then it will return 
the function with n - 1 plus the function with n - 2, just like the previous exercise. However, there will
now be an object defined outside of the function to store the value of the computation. The program will check
if the value already exists. If it does, then it will use that value instead of calling the recursive function.
If it does not, then it will compute the function as normal.

Step by step 
- Out side the function, declare an empty object called memo
- Declare a function fibonacci
- Accept nth as an argument
- If nth = 0, return 1
- If nth = 1, return 1
- If the memo does not have a value at 10th, set the nth property on the object to  
fibonacci(n-1) + fibonacci(n-2) 
- Return memo[nth]

*/

const fibonacci = (nth) => {
  invocations += 1;
  if (nth <= 2) return 1;
  if (!memo[nth]) memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
  return memo[nth];
};

const fibonacciEfficient = (nth) => {
  invocations += 1;
  if (!memo[nth - 1]) memo[nth - 1] = fibonacciEfficient(nth - 1);
  return memo[nth - 1] + memo[nth - 2];
};

// Examples

let invocations = 0;
let memo = { 1: 1, 2: 1 };
console.log(fibonacciEfficient(7), invocations);
invocations = 0;
memo = { 1: 1, 2: 1 };
console.log(fibonacci(7), invocations); // 6765
// console.log(fibonacci(50)); // 12586269025
// console.log(fibonacci(75)); // 2111485077978050
// console.log(fibonacci(10000));
