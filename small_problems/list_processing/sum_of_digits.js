/*
Write a function that takes one argument, a positive integer, and returns the sum of its 
digits. Do this without using for, while, or do...while loops - instead, use a series 
of method calls to perform the sum.
*/

/*
PEDAC

Input: A positive integer

Output: The sum of individual digits in the integer

Explicit Requirements
- Accept a positive integer as an argument
- Return the sum of individual digits
- Write the function with only method calls 

Implicit Requirements
- The function will only accept a positive integer. 
- The function will not accept floating point values 
- The funciton will not accept any data type that is not a number type.

Mental Model
The function will take a positive integer as an input. It will isolate the individual 
integers and sum them. It will then return the result to the caller. 

Examples / Test Cases
See above

Data Structures
Given that this program requires the use of method calls, the number will be cohersed to a 
string and then split into an array of digits. Those digits will then be summed into a
number type, and returned to the user.

Algorithm
1. Accept a positive integer as an argument
2. Coherce the number to a string
3. Split the string into an array
4. SET sum = 0
5. For each digit,
    - sum += digit
6. Return sum to the caller 

*/

// Code with intent
const sum = (int) => {
  return String(int)
    .split("")
    .reduce((sum, digit) => {
      return sum + Number(digit);
    }, 0);
};
// Examples

console.log(sum(23)); // 5
console.log(sum(496)); // 19
console.log(sum(123456789)); // 45
