/*
A prime number is a positive number that is evenly divisible only by itself and 1. Thus, 23 is prime since 
its only divisors are 1 and 23. However, 24 is not prime since it has divisors of 1, 2, 3, 4, 6, 8, 12, and 24. 
Note that the number 1 is not prime.

Write a method that takes a positive integer as an argument and returns true if the number is prime, 
false if it is not prime.


*/

/*
PEDAC
Problem
Write a function that accepts an integer as an argument, and then returns true if the integer is a prime number,
and false if it is not.

Examples / Test cases
Requirements
- Accept an integer as an input
- Return true if the integer is a prime number, false if it is not
- There is this strange way that the last two test cases have been written. In the repl, they translate to normal
integers, separated by commas, so I will assume that this is the intent.
- A prime number is defined as a number that is only evenly divisible by itself and 1. That is, 23 is a prime 
number because it only divides evenly into 23 and 1.
- The number 1 is not prime (why? this is an edge case). 

Aside: The number 1 is not a prime number because a prime number is defined as having exactly two distinct devisors:
1 and itself. 

Data Structures
Input: whole integer 
Output: True if the input is a prime number, false if it is not
Intermediate: I need to find a rule that determines whether or not a number is a prime number. The brute force 
approach would be to simply check every single number between 2 and the input - 1, with 1 and 2 as edge cases. If 
any of those values with the input % the current number return 0, then it is not prime. 

I may just be able to check if its divisible by numbers 2 through 10, because if its divisible by those numbers,
then it will be divisible by more. I will try that. Actually, maybe just the single digit prime numbers 
would suffice... 2, 3, 5, and 7. But wouldn't numbers also be uniquely divisible by 23 then? maybe thats the deal
with prime numbers... You have to check if a number is divisible by prime numbers in order to determine if its prime. 

Algorithm
The function accepts a whole number integer as an input. It checks to see if that integer is evenly divisible by
2, 3, 5, or 7. If it is not, the input is a prime number, and function returns true. If it is evenly divisible 
by at least one of those numbers, the input is not a prime number, and the function returns false.

Step by Step
- Accept an integer as an input
- If the number is 1, return false
- If the number is 2, 3, 5, or 7, return true
- For [2,3,5,7]:
  - If integer % the current element:
    - Return false
- Return true

*/

const isPrime = (int) => {
  if (int === 1) return false;
  let maxDivisor = Math.sqrt(int)
  for (let divisor = 2; divisor <= maxDivisor; divisor++) {
    if (int % divisor === 0) {
      return false;
    }
  }
  return true;
};

// Examples

console.log(isPrime(1) === false); // true
console.log(isPrime(2) === true); // true
console.log(isPrime(3) === true); // true
console.log(isPrime(4) === false); // true
console.log(isPrime(5) === true); // true
console.log(isPrime(6) === false); // true
console.log(isPrime(7) === true); // true
console.log(isPrime(8) === false); // true
console.log(isPrime(9) === false); // true
console.log(isPrime(10) === false); // true
console.log(isPrime(23) === true); // true
console.log(isPrime(24) === false); // true
console.log(isPrime(997) === true); // true
console.log(isPrime(998) === false); // true
console.log(isPrime(3_297_061) === true); // true
console.log(isPrime(23_297_061) === false); // true

/*
This is kind of a strange pattern... You can just divide by 3 or 2 and it dictates everything? Huh....

Nope. My original intuition was correct... You need to check all the numbers, but there is a small optimization you can do 
to only check up to the square root. But, basically, you can compose non-prime numbers by any prime number, and that number (say
11 * 23) will only by divisible by the lowest of those two numbers. You cannot, for example, divide 11 x 23 = 253 by anything lower
than 11.
*/