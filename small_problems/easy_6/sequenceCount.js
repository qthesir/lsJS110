/*
Create a function that takes two integers as arguments. The first argument is a count, and the second 
is the starting number of a sequence that your function will create. The function should return an array 
containing the same number of elements as the count argument. The value of each element should be a 
multiple of the starting number.

You may assume that the count argument will always be an integer greater than or equal to 0. The 
starting number can be any integer. If the count is 0, the function should return an empty array.

*/

/*
PEDAC

Problem

Input: Two integers: The first integer is the number of rows in an array, or the "count", and the 
second is the starting number of the sequence.

Output: An array with the same number of elements as the count, with each element being a multiple of 
the starting value according to its index. 

Explicit Requirements:
- The program will take two arguments 
- The first argument is count, which is an integer greater than or equal to 0. 
- The second argument is the starting number, which is an integer which can be positive or negative.
- The return value should be an array with the number of elements indicated by count. 
- Each element in the array should be a multiple of the starting value. For instance, with a starting value 
of 2, the value at array element index 0 would be 2, 4 at index 1, 6 at index 2, and so on. 
- If the count is 0, the program should return an empty array. 

Implicit Requirements:
- If the starting integer is negative, the multiples in the rest of the array should also be 
negative.


Mental Model:
The program will accept two arguments - the first argument "count", which is the number of elements
in the output array, and the second "starting value", which is the starting value and the multiple 
in each element. The program will construct an array where the starting value is equal to the starting
value passed in as an argument and each successive value is a multiple of that value according to its
index. The program will then return the value to the caller. 

Examples / Test Cases
See above.

Data Structures
The program will take two integers as an input and output an array. The array will need to be constructed
according to the values of the two integers.

Algorithm
1. Take "count" and "startingInt" as inputs
2. Construct an array with the length of count
3. Iterate through the array, where each element is a multiple of the element's index + 1
4. Return the array to the caller

*/

// Code with intent

const sequence = (count, startingInt) => {
  return [...Array(count)].map((_, index) => startingInt * (index + 1));
};

const sequence2 = (count, startingInt) => {
  return Array.from({ length: count }, (_, index) => startingInt * (index + 1));
};

console.log(sequence(5, 1)); // [1, 2, 3, 4, 5]
console.log(sequence(4, -7)); // [-7, -14, -21, -28]
console.log(sequence(3, 0)); // [0, 0, 0]
console.log(sequence(0, 1000000)); // []

console.log(sequence2(5, 1)); // [1, 2, 3, 4, 5]
console.log(sequence2(4, -7)); // [-7, -14, -21, -28]
console.log(sequence2(3, 0)); // [0, 0, 0]
console.log(sequence2(0, 1000000)); // []
