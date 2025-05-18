/*
Write a function that takes an array as an argument and returns an array that contains two elements, 
each of which is an array. Put the first half of the original array elements in the first element of 
the return value, and put the second half in the second element. If the original array contains an 
odd number of elements, place the middle element in the first half array.

*/

// Examples

halvsies([1, 2, 3, 4]); // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]); // [[1, 5, 2], [4, 3]]
halvsies([5]); // [[5], []]
halvsies([]); // [[], []]

/*

Problem
Input: An array

Output: An array that contains two arrays. The first array contains the leftmost elements of the original array,
while the second array contains the right most. If there are an odd number of elements, the middle element will
be in the first array.

Explicit Assumptions
- The function takes a single array
- The function splits the elements into two arrays, nested in the output array.
- If there is an odd number of elements, put the middle element in the first array
- 

Implicit Assumptions
- If the array is empty, return two empty arrays
- If there is only one element, place the 1 element in the first array, and leave the second array blank. 
- The elements of the original array should be returned in the same order that they were received in the input 
array. 

Questions
1. Can the array contain any elements? 
2. Can the array contain nested arrays? Should the nested arrays be split out into there individual elements
in the output array? I suppose there is nothing that explicitly says this.

Mental Model
The function will take a single array as an input and count the number of elements. It will iterate through the 
array and place the first half of the elements into 1 array, and the second half of the elements into a second
array. It will then add both of these arrays to a single array and return this as the output.

Examples / Test Cases

Data Structures
The input will be an array, and the output array will be a nested array.

Algorithm
1. Take the input array input
2. Take the length of the input array
3. if length % 2 > 0
      midPoint = rounded down(length / 2) + 1
   else 
      midpoint = length / 2
4. SET firstHalf = []
5. SET secondHalf = []
6. For each element in input:
    IF index < midpoint:
      firstHalf.push(element)
    Else
      secondHalf.push(element)
7. Return [firstHalf, secondHalf]

Alternatively, one could use the array method splice on the original array, returning 0 to midpoint, and 
then midpoint to (length - 1)

Higher level

1. Take the input array "input"
2. Determine the midpoint of the array. Specifically, determine where the first half ends, and the second
half begins. 
  - Handle edge cases (empty array, single array etc)
3. Split the array into first half and second half
4. Return the first and second half nested in an array

*/

// Code With Intent

function halvsies(array) {
  let midPoint = 0;

  if (array.length % 2 > 0) {
    midPoint = Math.floor(array.length / 2) + 1;
  } else {
    midPoint = array.length / 2;
  }

  let firstHalf = array.slice(0, midPoint);
  let secondHalf = array.slice(midPoint, array.length);

  return [firstHalf, secondHalf];
}

// Examples

console.log(halvsies([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies([5])); // [[5], []]
console.log(halvsies([])); // [[], []]

function halvsies2(array) {
  let midPoint =
    array.length % 2 ? Math.floor(array.length / 2) + 1 : array.length / 2;

  let firstHalf = [];
  let secondHalf = [];

  array.forEach((ele, index) => {
    if (index < midPoint) {
      firstHalf.push(ele);
    } else {
      secondHalf.push(ele);
    }
  });

  return [firstHalf, secondHalf];
}

console.log(halvsies2([1, 2, 3, 4])); // [[1, 2], [3, 4]]
console.log(halvsies2([1, 5, 2, 4, 3])); // [[1, 5, 2], [4, 3]]
console.log(halvsies2([5])); // [[5], []]
console.log(halvsies2([])); // [[], []]
