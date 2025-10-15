/*
Create a function that takes an array of integers as an argument. The function should determine 
the minimum integer value that can be appended to the array so the sum of all the elements equal 
the closest prime number that is greater than the current sum of the numbers. For example, 
the numbers in [1, 2, 3] sum to 6. The nearest prime number greater than 6 is 7. Thus, we 
can add 1 to the array to sum to 7.

Notes:

The array will always contain at least 2 integers.
All values in the array must be positive (> 0).
There may be multiple occurrences of the various numbers in the array.

*/

/*
PEDAC

Problem
Write a function that accepts an array of positive integers as an argument, and returns the number that 
needs to be appended to the array such that the elements sum to a value equal to the next largest prime number. 

In other words, it must return a number that, when added to the current sum of all elements, makes the sum
to be equal to the next prime number.

Examples / Test Cases
Requirements
- Accept an array of positive integers as an argument
- The array will always contain at least 2 ints
- All values in the array must be positive (> 0)
- Numbers can appear more than once in the array
- The return value must be equal to a value that, when added to the sum of all elements, equals the a prime number
that is larger than the current sum of elements.
- A prime number is a number that can only be divided by itself, and no other number.

Data Structures
- Intermediate: So what I can do, is take the current number and increment it by one until a help function 
isPrime returns true. isPrime will have to evaluate every number divided by all numbers lower than itself (brute force)
and return false if any of them equal modulo 0, and true if the loop goes without a hitch. 

Algorithm
Take an array of numbers as an input. Compute the sum of the array of numbers. Declare an output value and 
initialize it to 1 + the sum. While the output value is NOT a prime number, add 1 to the output value. When
it is a prime number, the loop terminates. Return the value to the caller. 

Step by step
- Accept an array of numbers as an argument
- Compute the sum of the array of numbers
- SET valueToAdd = 1
- While ((sum + valueToAdd) is not prime) {
  valueToAdd += 1
}
- Return valueToAdd

Helper: isPrime 
- Take a number as an input
- SET divisor = 2
- while divisor is less than number:
  - If number % divisor === 0:
    return false
  - Increment divisor by 1
- Return true
*/

const isPrime = (number) => {
  let divisor = 2;
  let maxDivisor = Math.sqrt(number);
  while (divisor <= maxDivisor) {
    if (number % divisor === 0) {
      return false;
    }
    divisor++;
  }
  return true;
};

const nearestPrimeSum = (numArray) => {
  let numArraySum = numArray.reduce((acc, cv) => acc + cv);
  let valueToAdd = 1;
  while (!isPrime(numArraySum + valueToAdd)) {
    valueToAdd += 1;
  }
  return valueToAdd;
};

const p = console.log;
p(nearestPrimeSum([1, 2, 3]) === 1); // Nearest prime to 6 is 7
p(nearestPrimeSum([5, 2]) === 4); // Nearest prime to 7 is 11
p(nearestPrimeSum([1, 1, 1]) === 2); // Nearest prime to 3 is 5
p(nearestPrimeSum([2, 12, 8, 4, 6]) === 5); // Nearest prime to 32 is 37

// Nearest prime to 163 is 167
p(nearestPrimeSum([50, 39, 49, 6, 17, 2]) === 4);

/*
It is worth noting that prime numbers basically do not have a pattern. you can reduce
the number of iterations you need to do to check them all, by taking the sqrt of the divisor (if the divisor
is greater than its own sqrt then it basically is a prime number at that point). But you do need to check
them all up to that point. I think this is a known problem in mathematics, that prime numbers are effectively 
unknowable unless computationally checked.

Twin Prime Conjecture, Reinmann hypothesis, Goldbach's conjecture... Now I get what those actually are, and why
they are problems. Cool.
*/
