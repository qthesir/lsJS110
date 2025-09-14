/*
Write a function that rotates an array by moving the first element to the end of the array. 
Do not modify the original array.

If the input is not an array, return undefined.
If the input is an empty array, return an empty array.
Review the test cases below, then implement the solution accordingly.
*/

/*
PEDAC

Problem

Input: Any value

Output: If an array, return a copy of the array with the first element moved from the first index to the last index.
If any value other than an array, return undefined. 

Explicit Assumptions
- Accept any value as an argument 
- If the argument is not an array, return undefined
- If the argument is an empty array, return an empty array
- If the argument is an array with at least 1 element, return a copy of the array with the element at 
the first index moved to the last index.
- The function WILL NOT mutate the array

Implicit Assumptions 
- The function IS NOT recursive. That is, in the case of nested arrays or nested objects, the function only 
acts on the outer array. 

Questions
- Is the input array a shallow copy or deep copy? 

Examples / Test Cases
See above

Data Structures
The function will accept any input, but only perform the logic of the operation if it is an array. So an array will be accepted
as an argument, a copy of the array will be created, and then the element on the first index will be removed and added to the last index
of the array. The array (copy) will then be returned to the caller. 

To note, I should not be "swapping" the first index with the last index. This will not work. Such an operation would leave the element
at the last index at the beginning of the array, when it should instead be the second to last. 

Algorithm
- Accept a value as an argument
- If the input is not an array 
  - Return undefined
- If array.length === 0
  - Return an empty array
- Create a copy of the array
- Remove the element at the first index of the copied array
- Add the element at the first index to the last index (arr.length) of the copied array
- Return the copied array to the caller 


Hmmm... Maybe an edge case here for the case where the array is empty. If you set the value of an element in an empty array, it will be undefined,
and now the array has 1 element "undefined" instead of 0.
*/

// Code with intent

const rotateArray = (array) => {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length === 0) {
    return [];
  }

  let arrCopy = [...array];
  arrCopy.push(arrCopy.shift());

  return arrCopy;
};

const rotateArray2 = (array) => {
  if (!Array.isArray(array)) return undefined;

  if (array.length === 0) return [];

  return [...array.slice(1), array[0]];
};

console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(["a", "b", "c"])); // ["b", "c", "a"]
console.log(rotateArray(["a"])); // ["a"]
console.log(rotateArray([1, "a", 3, "c"])); // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([])); // []

// return `undefined` if the argument is not an array
console.log(rotateArray()); // undefined
console.log(rotateArray(1)); // undefined

// the input array is not mutated
let array = [1, 2, 3, 4];
console.log(rotateArray(array)); // [2, 3, 4, 1]
console.log(array); // [1, 2, 3, 4]

console.log(rotateArray2([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
console.log(rotateArray2(["a", "b", "c"])); // ["b", "c", "a"]
console.log(rotateArray2(["a"])); // ["a"]
console.log(rotateArray2([1, "a", 3, "c"])); // ["a", 3, "c", 1]
console.log(rotateArray2([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
console.log(rotateArray2([])); // []

/*
Learned a couple things thinking about how the arrCopy.push(arrCopy.shift()) works under the hood. The way I understand it, is that 
the arrCopy.push() is pushed onto the call stack, but is not evaluated, and then arrCopy.shift() is pushed onto the call stack. 
arrCopy.shift() is evaluated and the value returned, which mutates arrCopy. Now, arrCopy.push() is evaluated, and the arrCopy push 
is calling is the now mutated array from .shift(). 
*/
