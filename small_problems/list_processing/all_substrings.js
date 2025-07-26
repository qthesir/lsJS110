/*
Write a function that returns a list of all substrings of a string. Order the returned list
by where in the string the substring begins. This means that all substrings that start at 
index position 0 should come first, then all substrings that start at index position 1, 
and so on. Since multiple substrings will occur at each position, return the substrings at 
a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the previous exercise.
*/

// Example :

/*
PEDAC

Problem

Input: string of characters

Output: An array of all substrings

Explicit Assumptions:
- The function takes a string as an input
- Output a list of all substrings
- The order of the list should be determined by where in the string the substring begins.
- This means that all substrings starting at index 0 should come first, followed by index 1, 
and so on.
- To sort multiple strings with the same starting index, order the substrings from shortest 
to longest.  

Implicit Assumptions:
- 

Questions:
- What about an empty string? Should it return an empty array object?

Mental Model: 
The function will accept a string as an input. It will iterate through the string, identify
all of the substrings, and add each substring to an array. It will then return the value
to the caller. 

Examples / Test Cases
See above

Data Structures
The function will take a string. It will then break that string into an array. Perhaps
an array of leading substrings here would make sense... The string can be passed into 
the subfunction. Then, the leading substrings will be broken up into their individual 
substrings. Then that array will be returned to the user.

Algorithm

Main Algorithm
- Accept a string as an input
- Create an output array
- Get the array of leading substrings
- For each leading substring:
  - For each character within the substring:
    - Take the substring from the 0th index to the ith index in the iteration
    - Add it to the output array 
- Return the output array to the user

Get the array of leading substrings
- Accept a string as an input
- Create a new array
- For each character in the string:
  - Take the substring from the ith index to the last index
  - Add the substring to the array
- Return the new array

The main algorithm should put the substrings in the proper order. 

*/

const trailingSubstrings = (string) => {
  return [...Array(string.length)].reduce((acc, _, index) => {
    acc.push(string.substring(index, string.length));
    return acc;
  }, []);
};

const leadingSubstrings = (str) => {
  return [...Array(str.length)].map((_, index) => str.substring(0, index + 1));
};

const substrings = (string) => {
  let output = [];
  let trailingSubstringArray = trailingSubstrings(string);
  trailingSubstringArray.forEach((trailingSubstring) => {
    trailingSubstring.split("").forEach((_, index) => {
      output.push(trailingSubstring.substring(0, index + 1));
    });
  });

  return output;
};

const substrings2 = (string) => {
  let trailingSubstringArray = trailingSubstrings(string);
  return trailingSubstringArray.reduce((acc, trailingSubstring) => {
    trailingSubstring.split("").forEach((_, index) => {
      acc.push(trailingSubstring.substring(0, index + 1));
    });
    return acc;
  }, []);
};

const substrings3 = (string) => {
  let output = [];
  let trailingSubstringArray = trailingSubstrings(string);
  for (let i = 0; i < trailingSubstringArray.length; i++) {
    output.push(...leadingSubstrings(trailingSubstringArray[i]));
  }

  return output;
};

const substrings4 = (string) => {
  return trailingSubstrings(string).reduce((acc, trailingSubstring) => {
    acc.push(...leadingSubstrings(trailingSubstring));
    return acc;
  }, []);
};

console.log(substrings("abcde"));
console.log(substrings(""));
console.log(substrings2("abcde"));
console.log(substrings3("abcde"));
console.log(substrings4("abcde"));

// console.log(leadingSubstrings("abcde"));

// returns
[
  "a",
  "ab",
  "abc",
  "abcd",
  "abcde",
  "b",
  "bc",
  "bcd",
  "bcde",
  "c",
  "cd",
  "cde",
  "d",
  "de",
  "e",
];
