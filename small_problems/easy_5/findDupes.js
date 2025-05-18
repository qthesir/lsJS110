/*
Given an unordered array and the information that exactly one value in the array occurs 
twice (every other value occurs exactly once), determine which value occurs twice. 
Write a function that will find and return the duplicate value that is in the array.
*/

// Examples

findDup([1, 5, 3, 1]); // 1
findDup([
  18, 9, 36, 96, 31, 19, 54, 75, 42, 15, 38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81, 8, 63, 95, 99, 30, 65, 78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84, 1, 47, 68, 12, 33, 86, 60, 41, 44, 83, 35, 94, 73, 98, 3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50, 6, 70, 85, 87, 51, 17, 66, 20, 28, 26, 2, 22,
  40, 23, 71, 62, 73, 32, 43, 24, 4, 56, 7, 34, 57, 74, 45, 11, 88, 67, 5, 58,
]); // 73

/*
PEDAC

Problem

Input: Array of values

Output: The value in the input array that occurs twice (the duplicate value in the 
  array)

Explicit Assumptions
- The function takes an input array
- There is one duplicate value in the array. Every other value only occurs once.

Implicit Assumptions
- The function will not accept an empty array, as such an array would contain no 
duplicates.
- Arrays can be arbitrarily large

Questions
- Would we accept a function that, say, only contained duplicates and nothing else?
Where there are no other values except the duplicate values? 

Mental Model
The function accepts an array as an argument. It will then search the array until it 
identifies the element that occurs twice. When that element is identified, it will stop searching and
return that element to the user.

Examples / Test Cases

Data Structure
The algorithm will accept and array and perform array operations on the input array in order to identify the 
duplicate value. The duplicate value will be returned to the caller as a string. 

Algorithm
- Accept an array as an input
- For the first element in the array, compare it to every other element to see if there are any matches
- Perform the same operation on each subsequent element until a match is found
- Return the match to the user 


*/

// Code with Intent

function findDup(array) {
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];

    for (let j = 0; j < array.length; j++) {
      if (i === j) {
        continue;
      }

      if (array[i] === array[j]) {
        return array[i];
      }
    }
  }
}

// There has to be a more elegant way of solving this problem... Maybe we can modularize it? Yes, that 
// would be a great way of doing it... 

console.log(findDup([1, 5, 3, 1])); // 1
console.log(
  findDup([
    18, 9, 36, 96, 31, 19, 54, 75, 42, 15, 38, 25, 97, 92, 46, 69, 91, 59, 53,
    27, 14, 61, 90, 81, 8, 63, 95, 99, 30, 65, 78, 76, 48, 16, 93, 77, 52, 49,
    37, 29, 89, 10, 84, 1, 47, 68, 12, 33, 86, 60, 41, 44, 83, 35, 94, 73, 98,
    3, 64, 82, 55, 79, 80, 21, 39, 72, 13, 50, 6, 70, 85, 87, 51, 17, 66, 20,
    28, 26, 2, 22, 40, 23, 71, 62, 73, 32, 43, 24, 4, 56, 7, 34, 57, 74, 45, 11,
    88, 67, 5, 58,
  ])
); // 73

function findDup2(array) {
  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];

    if(isDupe(i, array)){
      return currentValue
    }
  }

  return undefined 

}

function isDupe(currentIndex, array) {
  for(let i = 0; i < array.length; i++) {
    if (i === currentIndex) {
      continue;
    }
    if(array[i] === array[currentIndex]) {
      return true
    }
  }

  return false 

}

// You can't just do array.includes() because you have to ignore the index currently being operated on


console.log(findDup2([1, 5, 3, 1])); // 1
console.log(
  findDup2([
    18, 9, 36, 96, 31, 19, 54, 75, 42, 15, 38, 25, 97, 92, 46, 69, 91, 59, 53,
    27, 14, 61, 90, 81, 8, 63, 95, 99, 30, 65, 78, 76, 48, 16, 93, 77, 52, 49,
    37, 29, 89, 10, 84, 1, 47, 68, 12, 33, 86, 60, 41, 44, 83, 35, 94, 73, 98,
    3, 64, 82, 55, 79, 80, 21, 39, 72, 13, 50, 6, 70, 85, 87, 51, 17, 66, 20,
    28, 26, 2, 22, 40, 23, 71, 62, 73, 32, 43, 24, 4, 56, 7, 34, 57, 74, 45, 11,
    88, 67, 5, 58,
  ])
); // 73

/*

Notes:

Ok, so, this is a little tricky. If we try to compare each element to every other element in the array, this has
O(n^2) complexity... 

This seems like it would fit with a binary search approach. But then again, we're not searching for a specific
element. We are specifically searching for any element that occurs twice, which means we may need to have 
knowledge of every element in the array simultaneously. 

I suppose I can start with the brute force solution, which is to compare every element to every other element in
the array.

Reflection:

Ah, now I see what the answer was, and it was pretty obvious: You need to give the program a memory, to remember
which elements it has or hasn't seen. To do this, the LS solution is to create an object that keeps track of 
which elements have been "seen" already by the program. This, of course, takes up some memory, but this is a
pretty good tradeoff given the amount of compute required from going from O(n) to O(n^2) complexity.

Other thing that could reduce the complexity (think it would be n log(n) or something) is to only evaluate the
numbers in front of the last number you checked. No need to go backwards - you've already compared the numbers 
back there in previous iterations. So, for each iteration, you have n - 1 less checks to do. 
*/

function findDup3(array) {
  let seen = {};

  for (let idx = 0; idx < array.length; idx += 1) {
    if (seen[array[idx]]) {
      return array[idx];
    } else {
      seen[array[idx]] = true;
    }
  }

  return undefined;
}