/*
Write a function that takes two array arguments, each containing a list of numbers, and returns a 
new array that contains the product of each pair of numbers from the arguments that have the same 
index. You may assume that the arguments contain the same number of elements.
*/

/*
PEDAC


Problem 

Input: Two arrays with numbers

Output: A single array with the product of each pair of numbers with the same index in the argument arrays.

Explicit Assumptions
- The program accept two arrays as an argument
- The arrays can only contain numbers.
- The program will return an array that contains the product of each of the elements in the argument arrays 
with the same index.
- The arguments will contain the same number of elements

Implicit Assumptions 
- 

Questions
1. Can the numbers be floating point, or just integers?

Mental Model
The program will accept two array values with numbers as elements as an argument. It will iterate through the 
first array and multiply each element by the element at the same index in the second array, and add the result
to an output array. It will then return the output array to the caller. 


Examples / Test Cases

Data Structures 
The program will accept two arrays as an input, and use the two arrays to create a new, output array, which will
be returned to the user.


Algorithm
- The program accepts two arrays
- It will iterate through the first array and:
  - Multiplying each element by the element at the same index in 
the second array.
  - Add the product to the output array
- Return the output array to the caller

*/

const multiplyList = (array1, array2) => {
  return array1.map((ele, index) => ele * array2[index]);
};

const multiplyList2 = (array1, array2) => {
  return array1.reduce((acc, cv, index) => {
    acc.push(cv * array2[index])
    return acc
  }, [])
}

// Example

console.log(multiplyList([3, 5, 7], [9, 10, 11])); // [27, 50, 77]
console.log(multiplyList2([3, 5, 7], [9, 10, 11])); // [27, 50, 77]
