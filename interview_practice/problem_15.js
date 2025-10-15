/*
Create a function that takes a string argument that consists entirely of numeric digits and computes 
the greatest product of four consecutive digits in the string. The argument will always have more than 
4 digits.

*/

/*
Problem
Write a function that takes a string as an argument and computes the largest product of 4 consequetive digits
in the string. 

Examples / Test Cases
Requirements
- Accept a string of numbers as an argument
- The string will always have more than 4 digits
- The string will consist of only numbers
- The return value should be the largest product of 4 consequetive digits in the string.
- The product of the digits must be consequetive. They cannot appear out of order. 
- Whether the string is backwards or forwards does not matter. Therefore, you only have to look at the 
string left to right.

Data Structures:
Intermediate: This appears like a good use case for the sliding window solution set. Start with the first 4, 
then move from the next index + 3 additional elements, and when the + 3 additional elements exceed the length of
the string, then finish the iteration. When a sub-string is identified, that string will also have to split into
an array, and all the digits need to be converted to numbers. It would be good to do this upfront.

Algorithm
Write a function that takes a string of numbers as an argument. Convert the string of numbers to an array of individual
numbers, and coherce all the strings to number types. For each index, take a subset of the array from the current index
+ 3 additional elements and sum the product. If the product is greater than the current largest product, set the 
largest product to the new value. When the index + 3 is greater than the length of the array, then finish the loop.
Return the current largest product to the caller. 

Step by step
- Take a string of numbers as an argument
- Convert the string of numbers into an array
- Convert all strings in the array to numbers
- SET largestProduct = 0
- While (current index + 4 =< length of the array)
  - Get the product of a subset of the array, from index to index + 4
  - if the current product > largestProduct, set largestProduct to the current product
- Return the largestProduct


*/

const greatestProduct = (numString) => {
  let numArray = numString.split("").map((num) => Number(num));
  let largestProduct = 0;
  let i = 0;
  while (i + 4 <= numArray.length) {
    let currentProduct = numArray.slice(i, i + 4).reduce((acc, cv) => acc * cv);
    if (currentProduct > largestProduct) {
      largestProduct = currentProduct;
    }
    i++;
  }

  return largestProduct;
};

const p = console.log;
p(greatestProduct("23456") === 360); // 3 * 4 * 5 * 6
p(greatestProduct("3145926") === 540); // 5 * 9 * 2 * 6
p(greatestProduct("1828172") === 128); // 1 * 8 * 2 * 8
p(greatestProduct("123987654") === 3024); // 9 * 8 * 7 * 6
