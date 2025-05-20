/*
Write a function that takes an array of integers as input, multiplies all of the integers together, 
divides the result by the number of entries in the array, and returns the result as a string with the 
value rounded to three decimal places.
*/

/*
PEDAC

Input: Array of integers

Output: All the values in the array multiplied together divided by the number of entries

Explicit Assumptions
1. Only accepts arrays of integers
2. The program will return the multiplicative average of the array values. That is, the value of the array 
values multiplied together and divided by the number of elements.
3. Output will be rounded to 3 decimal places 

Implicit Assumptions 


Questions
1. Will the program accept negative integers as well?
2. Will the program accept an empty array?  

Mental Model
The program will accpet an array of integers as an input. It will multiply all the elements together, and divide
the result by the number of elements. It will then return the result to the user. 

Examples / Test Cases

Data Structures
The program will take an array as an input, and return a floating point number as an output, rounded to 3 
decimal places.

Algorithm
1. Take an array of integers as an input
2. Mutliply the values of the array together (.reduce would be perfect for this) to get the product
3. Divide the product by the number of elements
4. Round the result to 3 decimal places
5. Return the result to the caller

*/

// Code with intent

function multiplicativeAverage(array) {
  let product = array.reduce((acc, cv) => {
    return acc * cv;
  }, 1);
  let multiAverage = product / array.length;
  return multiAverage.toFixed(3);
}

// Examples
console.log(multiplicativeAverage([3, 5])); // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17])); // "28361.667"

/*
Notes / Reflection

What is the difference between toFixed and toPrecision? 
*/
