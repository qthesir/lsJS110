/*
Implement bubble sort 

Write a function that takes an array as an argument and sorts that array using the bubble sort 
algorithm described above. The sorting should be done "in-place" — that is, the function should mutate the array. 
You may assume that the array contains at least two elements.

*/

/*
PEDAC

Problem 
The problem is asking us to use the bubble sort algorithm to sort an input array of numbers or strings. The sorting should 
mutate the input array, rather than output a new one. 

Examples / Test Cases
Requirements
- Accept an array with at least two elements as an input
- The input array can contain either strings or numbers
- The function should mutate the array in place.
- The function should use the bubble sort algorithm 
- The sort order in the mutated array should be in ascending order
- For strings, the sort order should be alphabetic order

Asides
- Sorting numbers and sorting arrays should have essentially the same operation.


Questions
- Should the array have a return value? Not clear here. We are only console.logging the mutated array.
However, in order to satisfy the test cases, this is not relevant, so we can assume it is not necessary. 

Data Structures
Input: An array of strings or numbers with at least two elements
Output: None
Side effect: Mutate the input array
Intermediate: Given I'll be mutating the array, this is pretty straightforward. I will manipulate the input array
directly.

Algorithm
Overview
The function will take an array as an input. While there are still indices to swap, the function will loop through each
element in the array, comparing the element at index i to the element at index i + 1. If element at index i is greater
than element at index i + 1, it will swap the order of the elements, mutating the array in place. When there are no more indices 
to swap, identified by the program doing a single loop through the array with no swaps performed, the program will return undefined.  

Step by step
- Accept an array as an argument
- Declare a variable "swapsRemaining" and initialize it to true
- WHILE swapsRemaining is true:
  - SET swapsRemaining to false
  - FOR each element in the array, starting at index 1:
    - IF element at index - 1 is > element at index:
      - SWAP the elements
      - SET swaps remaining to true
- Return undefined 

*/

// Code with intent

const bubbleSort = (array) => {
  let swapped = true;
  let unsortedEnd = array.length;
  while (swapped) {
    swapped = false;
    for (let i = 1; i < unsortedEnd; i++) {
      if (array[i - 1] > array[i]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        swapped = true;
      }
    }
    unsortedEnd = unsortedEnd - 1;
  }
};

const bubbleSortOptimized = (array) => {
  let n = array.length;
  while (n > 1) {
    let lastSwapIndex = 0;
    for (let i = 1; i < n; i++) {
      if (array[i - 1] > array[i]) {
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        lastSwapIndex = i;
      }
    }
    n = lastSwapIndex;
  }
};

// Examples

let array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

let array3 = ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"];
bubbleSort(array3);
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

let array4 = [5, 3];
bubbleSortOptimized(array4);
console.log(array4); // [3, 5]

let array5 = [6, 2, 7, 1, 4];
bubbleSortOptimized(array5);
console.log(array5); // [1, 2, 4, 6, 7]

let array6 = ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"];
bubbleSortOptimized(array6);
console.log(array6); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

/*
That was EASY! Holy moly man. I am definitely getting better at this.

Oh, and... I really like the LS solution here. It uses while true, and then uses a break statement if the swapped variable is
still equal to false after the loop. This makes it more readable. Reads more like regular english. 
*/
