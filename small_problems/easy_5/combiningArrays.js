/*
Write a function that takes two arrays as arguments and returns an array containing the 
union of the values from the two. There should be no duplication of values in the returned array, 
even if there are duplicates in the original arrays. You may assume that both arguments will always 
be arrays.

*/

// Example

union([1, 3, 5], [3, 6, 9]); // [1, 3, 5, 6, 9]

/*
PEDAC

Problem

Input: Two arrays 

Output: A union of the two arrays 

Explicit Assumptions
- Arguments will always be arrays
- The function can only accept two arrays as an argument
- The output will be a union of two arrays
- There should be no duplicate values in the returned array (hence the definition of union)

Implicit Assumptions
- The output array will be in sorted order (this isn't guaranteed, given there is only one example)
- Actually, going to assume the above is not the case, so the program can handle other data types.
Although, these can be sorted... so. 

Questions
1. Does the program accept empty arrays?
2. Does the program accept nested arrays? If so, how should those be handled? Does the union act at the 
element level of the first array (that is, that the array itself is a unique object) or the values inside 
of the nested array?
3. What data types does the program accept? Is it only number types, or can it accept strings, bigInts,
and so on? 
4. How to handle values like -0, which are considered unique? 
5. If other types are allowed, should they be converted to numbers? Is '3' equal to 3? Or should they 
be unique values? 

Mental Model
The program will accept two arrays as an argument. The program will go through each element of the input
arrays and add it to the output array, checking each element to see if it is already in the output array.
If it is, then don't add that element. If it is not, then add it. Once complete, return the array to the
caller. 

Examples

Data Structure
Arrays, obviously, will be taken as input. An output array will be declared and used to combine the 
two input arrays.

Algorithm
1. SET Output = []
2. Add the first element of the first input array to the output array
3. For each additional element, check to see if it is alreayd in the output array. If it is not,
add it to the array.
4. Repeat for the second input array.
5. Return the output to the user

Could also do:

1. Concatenate the array
2. Remove duplicates
3. Return the user

And finally:

1. SET output = []
2. Concatenate the input arrays
3. For each element in the concatenation, check to see if its in the output array. If it is not 
in the output array, add it to the output array.
4. Return the output array to the user.

*/

// Code With Intent

function union(...args) {
  let output = [];
  // console.log("args value:", args);
  [].concat(...args).forEach((ele) => {
    if (!output.includes(ele)) {
      output.push(ele);
    }
  });

  return output;
}

function union2(array1, array2) {
  return array1.concat(array2).filter((ele, index, arr) => {
    return arr.indexOf(ele) === index;
  });
}

function union3(array1, array2) {
  return [...new Set([].concat(array1, array2))];
}

function union4(array1, array2) {
  let concatArray = array1.concat(array2);

  return concatArray.reduce((acc, cv) => {
    if (!acc.includes(cv)) {
      acc.push(cv);
    }
    return acc;
  }, []);
}

console.log(union([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
console.log(union([], [3, 6, 9]));
console.log(union([], []));
console.log(union([3, 3, 3], ["3", 6, 9]));
console.log(union([3, 3, 3], ["3", 6, 9], [1,3,5]));

console.log(union2([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
console.log(union3([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]
console.log(union4([1, 3, 5], [3, 6, 9])); // [1, 3, 5, 6, 9]

/*
Notes

The solution used the spread operator for the arguments, which would theoretically allow you to 
put in as many arrays as you want. I modified the first function to accept as many arrays as the 
user wants. 

It also utilized a "copyNonDupsTo" function that dealt with the de-depulication. As opposed to 
explicitly returning a value, this function mutates the output array. 

The rest parameter is how you build a function that takes any number of arguments, as opposed to a 
set amount. 
*/