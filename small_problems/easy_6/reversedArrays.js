// Reversed Arrays

/*
Write a function that takes an Array as an argument and reverses its elements in place. That is, 
mutate the Array passed into this method. The return value should be the same Array object.

You may not use Array.prototype.reverse().
*/

/*
PEDAC

Problem

Input: An array of elements

Output: The output will be a reversed array. The side effect will be mutating the array passed into the 
function. 

Explicit Requirements
- The input is an array object
- The function should reverse the order of the elements in the array. E.e [1,2,3] should become [3,2,1]
- The function cannot use the array.prototype.reverse method
- The function should mutate the original array passed into the function
- The function should return the same array object.  

Implicit Requirements
- The function will not reverse string elements of the array. I.e., ['abc','efg'] would be ['efg', 'abc']
- An empty array should return the same empty array

Mental Model
The program accepts an array as an argument. It should iterate through the array, reversing the position of 
each element; the last element the first position, the second to last element the second position, and 
so on, mutating the original array. It should then return the array to the caller.

Examples / Test Cases

Data Structures
The program will accept an array as an argument. Although I think I can accomplish this task by using the
pop and unshift array methods, another way to do it is to create an object that keeps track of the original
positions, and using that object to replace the values in the array. This seems rather inefficient, 
however.

Algorithm
1. Accept "Array" as an argument
2. Iterate over the length of the array, starting from index 0 to length - 1
3. Take the value at the last index (.pop) and set it equal to "lastValue"
4. Set the first value equal to lastValue (unshift)
5. Return the array to the caller 

The above did not work. Here is my revised version with the pointer method:

1. Accept array as an argument
2. Set two pointers: i for the begging of the array (equal to 0) and j for the end (equal to array.length)
3. Iterate over the array while j > i
  - swap the value at array[i] with the value at array[j]
  - increment i (i++)
  - decrement j (j--)
4. Return the array to the caller

This is also much more computationally efficient. 
*/

// Code with intent

const reverse = (array) => {
  let i = 0;
  let j = array.length - 1;
  while (i < j) {
    [array[i], array[j]] = [array[j], array[i]];
    i++;
    j--;
  }

  return array;
};

// Examples

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

// The LS solution uses slightly different conventions for this problem. It uses array destructuring in
// order to reverse the positions [array[i], array[j]] = [array[j], array[i]]
