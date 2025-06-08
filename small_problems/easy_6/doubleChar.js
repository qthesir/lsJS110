/*

Write a function that takes a string, doubles every character in the string, 
and returns the result as a new string.

*/

/*

PEDAC

Problem

Input: String of characters

Output: Input string with every character in the string doubled

Explicit Requirements
- The function takes a string as an input. 
- The input string can contain any character

Implicit Requirements
- Every string element is doubled - including spaces and punctuation.

Mental Model
The program takes a string as an input. It iterates through each element of the string and 
doubles the element. It then returns the string to the caller.

Examples / Test Cases

Data Structures
The program will accept a string and then turn that string into an array for iteration. 

Algorithm
- Accept a string as an input
- Turn the string into an array
- Create an output array
- Iterate through each array element. For each element, add the element to itself, and add it to
the output array.
- Concatenate the output array into a string
- Return the output string to the user

*/

// Code with intent

const repeater = (string) => {
  return [...string].map(ele => ele + ele).join('')
}

const repeater2 = (string) => {
  let doubledArr = []
  let stringArr = string.split('')
  for(let ele of stringArr) {
    doubledArr.push(ele + ele)
  }
  
  return doubledArr.join('')
}

const repeater3 = (string) => {
  return [...string].reduce((acc, cv) => {
    acc.push(cv + cv)
    return acc
  }, []).join('')
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""


console.log(repeater2('Hello'));        // "HHeelllloo"
console.log(repeater2('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater2(''));             // ""

console.log(repeater3('Hello'));        // "HHeelllloo"
console.log(repeater3('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater3(''));             // ""


/*
Notes & Reflection

Could either use reduce or map here to make it easy. I think map is more directly applicable, reduce
would just be recreating map. 
*/