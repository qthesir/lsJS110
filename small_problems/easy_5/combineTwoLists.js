/*
Write a function that combines two arrays passed as arguments, and returns a new array 
that contains all elements from both array arguments, with each element taken in 
alternation.

You may assume that both input arrays are non-empty, and that they have the 
same number of elements.
*/

// Example

interleave([1, 2, 3], ["a", "b", "c"]); // [1, "a", 2, "b", 3, "c"]

/*
PEDAC

Input: Two arrays

Output: Two input arrays combined into one, in alternating order

Explicit Assumptions
- The function will take two arrays as input
- Elements can be of any type
- Input arrays are non-empty
- Input arrays have the same number of elements 
- 

Implicit Assumptions
- The output array is sorted in alternating order starting with the first array, where the
first element in the first array is in the 0th index of the output array, the first
element in the second array is the 1st index of the output array, and so on.
- The alternating sorted order will be in the order of the original input arrays. That is, it will be 
according to the original order of the input arrays, and not in descending, a-z or the like. 

Mental Model
The program will take two arrays of equal length as inputs. It will concatenate the two arrays into one, sorted
in alternating order. The output array will then be returned to the user.

Examples / Test Cases

Data Structures
The input will be array and so will the output. 

Algorithm
1. Take the two inputs, "array1" and "array2"
2. Set an output array "output"
3. Insert the 0th element in array1 into the 0th index of the output array
4. Insert the 0th element in array2 into the 1st index of the output array
5. Repeat until no elements remain
6. Return the output array

*/

// Code with Intent

function interleave(array1, array2) {
  let output = [];

  for (let i = 0; i < array1.length; i++) {
    output.push(array1[i]);
    output.push(array2[i]);
  }

  return output;
}

function interleave2(array1, array2) {
  return array1.reduce((acc, cv, index) => {
    acc.push(cv, array2[index]);
    return acc;
  }, []);
}

function interleave3(array1, array2) {
  let combinedNestedList = array1.map((ele, index) => {
    return [ele, array2[index]];
  });

  return [].concat(...combinedNestedList);
}

function interleave4(array1, array2) {
  let output = [];

  array1.forEach((ele, index) => {
    output.push(ele, array2[index]);
  });

  return output;
}

// Test Cases

console.log(interleave([1, 2, 3], ["a", "b", "c"])); // [1, "a", 2, "b", 3, "c"]
console.log(interleave2([1, 2, 3], ["a", "b", "c"])); // [1, "a", 2, "b", 3, "c"]
console.log(interleave3([1, 2, 3], ["a", "b", "c"])); // [1, "a", 2, "b", 3, "c"]
console.log(interleave4([1, 2, 3], ["a", "b", "c"])); // [1, "a", 2, "b", 3, "c"]

/*

Notes 
Seems like I need to keep track of both the index in the array, and the index / place I need to add the value
to the output array.

Well... Actually, come to think of it, I could just alternate between the two arrays in sequence, and they could
reference the same index, doing the push operation. But push adds to the beginning of the array, so I'd do the 
opposite of push. Cant quite remember that command.

Reflection

I'm noticing that the PEDAC process now doesn't feel like all that much to do... It feels relatively fast and 
natural. I'm noticing that, with many things, not just with programming, I do not dread them as much... Its 
much easier to enjoy myself when I'm doing a big project now. Especially now that I know a lot more about 
what I'm doing. 

*/
