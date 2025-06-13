/*
Write a function that takes an integer argument and returns an array containing 
all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer.
*/

/*
PEDAC

Problem

Input: An integer 

Output: An array that contains all the integers between 1 and the input value

Explicit Assumptions
- The program will take an integer as an argument
- The input will always be a positive integer
- The program will output an array that contains values between 1 and the input value, inclusive
- The output will be in ascending order 

Implicit Assumptions

Mental Model
The program will take a positive integer as an input. It will construct an array with elements between 1
and the input value. It will return the array to the user. 

Examples / Test Cases
(see abovee) 

Data Structures
The program will take a positive integer as an input, use it to construct an array, and output 
the array.

Algorithm
- Take number as an input 
- Set output to an empty array
- While number > 0:
  - Add number to the empty array in the first position
  - Subtract 1 from number
- Return output array to the user 
*/

// Code with intent

const sequence = (number) => {
  let output = [];
  while (number > 0) {
    output.unshift(number);
    number--;
  }
  return output;
};

const sequence2 = (number) => {
  let output = [];
  output.length = number;
  output = [...output].map((_, index) => {
    console.log(_)
    return index + 1
  })
  return output

}

// Examples:

console.log(sequence(5)); // [1, 2, 3, 4, 5]
console.log(sequence(3)); // [1, 2, 3]
console.log(sequence(1)); // [1]

console.log(sequence2(5)); // [1, 2, 3, 4, 5]
console.log(sequence2(3)); // [1, 2, 3]
console.log(sequence2(1)); // [1]

/*
No, you cannot use for each or map in the solution because the input is not an array. You have to construct
the array.

Although, actually, you could create an empty array, set the length to the number, and then use forEach to
iterate and add the numbers. 

That didn't work. But adding the spread syntax did. That is kind of strange... Why would the iterable not
iterate over an array with empty items, but the spread syntax will? Based on LSBots answer, the array 
methods will skip over empty items in an array. These arrays are considered "sparse" and javascript 
array methods account for that. 

The push syntax is more computationally efficient because, as opposed to pushing one element at the end of
an array, it has to move them all one space to make room for the new one. Def less efficient.

Imperative vs. Declarative: Declarative is expressing the intent of WHAT you want to do rather than 
How. Imperative is the opposite: Meant to express HOW you're going to do something rather than the what.
In an imperative statement, you'd have the steps explicitly listed out: add the counter, loop, return
the result, etc. Declarative, meanwhile, may use a single function that explicitly says what you 
want it to, like, "findLastNumber" or something like that. That's focusing on what, not how. 
*/

