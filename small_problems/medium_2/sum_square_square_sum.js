/*
Write a function that computes the difference between the square of the sum of the 
first count positive integers and the sum of the squares of the first count 
positive integers.
*/

/*
PEDAC

Problem 
The problem is asking use to subtract the sum of the squares of the first count positive
integers from the square of the sum of the first count positive integers. That is:

If we have 3 as an input, take (1+2+3)**2 - (1**2 + 2**2 + 3**2).

More generally, take n as an input (1 + 2 + ...n)**2 - (1**2 + 2**2 + ...n**2)

Examples / Test Cases

Requirements
- Take an integer value greater than 0 as an input
- Return the sum of the squares of the first count positive integers substracted from
the sum of first count integers squared
- The 'first count positive integers' means the integers between 1 and the input value
- The sum of of the squares of the first count positive integers means squaring each 
integer between 1 and the input and summing them
- The square of the sum of first count positive integers means summing the numbers 
1 to the input value and then squaring the result. 

Data Structures
Input: Positive integer
Output: Sum of squares substracted from the square of sums 
Intermediate: The problem could be broken down into getting the sum of squares and getting
the square of the sum, and subtracting from one another. Both will just be an accumulated
value, and reduce can be used to accomplish this. Taking the square of the sum will have to
square the reduce value. Could also use a while loop... Perhaps that is better,
so as to not create an array.

Algorithm
- Take a positive integer as an input n
- Compute the sum of squares
- Compute the square of the sum
- Return the square of the sum - sum of squares

Helper: sum of squares
- Take the input n as an input
- Declare "sum" and initialize it to 0
- Declare 'iter' and initialize it to 1
- Iterate through the values 1...n
  - Increment sum by iter squared
  - Increment iter by 1
Return sum

Helper: square of the sum
- Take input n as an input
- Declare 'sum' and initalize it to 0
- Declare 'iter' and initialize it to 1
- Iterate through the values 1...n
  Increment sum by the iter
  Increment iter by 1
Return sum**2
  
I could potentially make this more efficient by computing both values 
at once, and returning it as an array. Confusing though.

*/

// Code with intent

const sumOfSquares = (n) => {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cv) => {
    return acc + cv ** 2;
  }, 0);
};

const squareOfSum = (n) => {
  return (
    Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cv) => {
      return acc + cv;
    }, 0) ** 2
  );
};

const sumSquareDifference = (n) => {
  return squareOfSum(n) - sumOfSquares(n);
};

const sumSquareDifference2 = (n) => {
  let sum = 0;
  let sumOfSquares = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
    sumOfSquares += i ** 2;
  }

  return sum ** 2 - sumOfSquares;
};

// Examples

console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150

/*
I suppose that sometimes it makes more sense to trade off clarity for efficiency. 
My solution is far less efficient - it has to compute two different values, and go through
two different iterations, create two different arrays, instead of just doing it once.
I did mull this over while I was thinking about how to write the function, and I did, 
in fact, consider this tradeoff, but I decided to go with readability. I guess I 
was not correct here. 

Hm... Could also consider using reduce, and having the summed value be an object, 
and that way, I'd be able to compute both totals. 
*/
