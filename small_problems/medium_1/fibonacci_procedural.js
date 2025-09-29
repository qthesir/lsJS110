/*
In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number. 
In a language that is not optimized for recursion, some (but not all) recursive 
functions can be extremely slow and may require massive quantities of memory and/or stack space. 
If you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci number 
already takes a significant amount of time.

Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.

Rewrite your recursive fibonacci function so that it computes its results without using recursion.

*/

/*
Problem
The problem is asking us to write a procedural version of the fibonacci calculation, which should also 
accept the nth fibonacci index as an argument and return the calculation for that index. 

Examples / Test Cases
Requirements
- The function should accept the nth fibonacci index as an argument
- The function should return the fibonacci number at the index
- It should operate procedurally - that is, more computationally efficient. Using a loop of something
similar.

Data Structures 
Input: nth fibonacci index
Output: fibonacci number at the nth index
Intermediary: None. I could use an array to keep track of fibonacci numbers and use the historical values to 
calculate the new value, but this would waste memory. 

Algorithm
High level
The function will accept the nth fibonacci index as an input. It will have variables for the current and previous
values, and have a third value that will capture the new fibonacci value. On each iteration, the current value 
will become the new fibonacci value, and the previous value will become the current value. When the number of 
iterations reaches the index passed in as an input, the loop will terminate, and the function will return the 
most recently calculated fibonacci value. 

Step by step
- Accept n as an input
- Declare a variable "previous value" and set it to 0
- Declare a variable "current value" and set it to 1
- Set fibonacci equal to current value + previous value
- Declare a variable "current index" and set it to 1
- While current index < n
  - Set fibonacci equal to current value + previous value
  - Set current value to fibonacci
  - Set previous value to current value 
  - Increment index by 1
- Return fibonacci to the caller 
*/

// Code with intent

const fibonacci = (n) => {
  let [firstValue, secondValue] = [1, 1];
  let index = 2;
  while (index < n) {
    [firstValue, secondValue] = [secondValue, firstValue + secondValue];
    index++;
  }

  return secondValue;
};

// Examples

console.log(fibonacci(2));
console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050
console.log(fibonacci(10000)); 

