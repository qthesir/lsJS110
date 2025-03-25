/*
Write a function that takes an array of numbers and returns an array with the same number of elements, 
but with each element's value being the running total from the original array.
*/


/*
PEDAC

Problem 
Restated:
Write a function that takes an array as an input, and outputs an array, with the same number of elements,
that represents a running total of the input array. 

Input: Array [1,2,3]
Output: Running total of input array [1, 3, 6]

Explicit Requirements:
- The function should return a running total of the input array
- A running total is an array where each successive element is equal to the sum of all previous elements.
- The function only accepts array objects
- Only numbers can occupy slots in the input array. 

Implicit Requirements:
- Empty arrays are accepted. 
- If an empty array is passed, it should return an empty array

Questions
- Does the function accept negative integers? 

Examples / Test Cases
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

Data Structure
The program will take an array as an input, create a new array for the running total, and output
the array with the running total. 

Alogrithm
- Accept an array of numbers of an argument, "numbers"
- Create a new array, "output", and set the first element of the output array to the first element 
in the numbers array
- Set the second element of the output array to the second element of the numbers array plus the 
first element in the output array
- Repeat for each element in the array
- Return the output array

Alternatively, I could use the forEach iterator and use the idx variable to screen out the first 
element. Could also use a do while, potentially. But I could also use .forEach only on the latter
half of the array.
*/

function runningTotal(numbers) {
  let output = numbers.slice(0,1);
  numbers.slice(1).forEach((ele, idx) => {
    output[idx + 1] = ele + output[idx]
  })
  return output
}

// Examples:

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

// Interestig that the forEach method just handles the empty array and the single element cases. 
// If .forEach is called on an empty array, it doesn't run, and returns undefined. 

// I also could have used a sum iterator, and set it to zero. That way, the first element of the 
// array would have been added to 0, which would have kept it the same. 

function runningTotal2(array) {
  let resultArray = [];
  let sum = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    resultArray.push((sum += array[idx]));
  }

  return resultArray;
};

// The solutions answer is also interesting because they utilize the value sum += array[idx] evaluates
// to, which is the current value of the sum, instead of creating a separate line item to update the 
// sum variable and then pass it into the array. 

/*
Further Exploration

Can you rewrite the solution using the Array.prototype.map method? What types of problems 
do you think are well-suited for the Array.prototype.map method?

Could definitely use the accumulator method. But map doesn't really work that well. You'd still need
the sum, per below. You'd also still need the sum in the accumulator method too I think. Or the new 
array. 

*/ 

function runningTotal3(numbers) {
  let sum = 0
  return numbers.map((ele) => {
    sum += ele
    return sum
  })
}


console.log(runningTotal3([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal3([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal3([3]));                    // [3]
console.log(runningTotal3([]));                     // []