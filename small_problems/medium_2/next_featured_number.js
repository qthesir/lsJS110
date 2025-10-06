/*

*/

/*
Problem
The problem is asking us to identify the next featured number that occurs after an
input integer value, with a featured number being defined as a number that is 
a multiple of 7, odd, and has all of its digits occur exactly once. 

Examples / Test Cases
Requirements 
- Accept an integer as an input 
- Return the next featured number greater than the input
- A featured number is a number that is a multiple of 7, 
odd, and has its digits appear exactly once.
- The largest possible featured number is 9876543201
- If the input value is greater than or equal to the largest possible featured number, 
the program should display an error message that says:
  - "There is no possible number that fulfills those requirements."
- If the input value is a featured number, do not return that number - get the 
next featured number after that number. 

Data Strucutres
Input: Integer value 
Output: The next featured number after the integer value
Intermediate: We can find the most recent multiple of 7 by adding one until modulo of
that number equals 0. Then, we check if that number is a featured number, which will 
(for the step of identifying whether there are any duplicate digits) involve transforming
it to a string and potentially doing some array operations. 

1. Need to figure out what the next multiple of 7 is
2. Continue adding 7 to that number 
3. Check if the number is a featured number
4. If it is not, add 7 again. 

Algorithm
The function accepts an integer as an input. It then determines what the next 
multiple of 7 is. It will check if that number is a featured number. If it is not,
it will keep adding 7 to the current value until a featured number is identified.
Once the featured number is identified, it will return that number to the caller. 

Step by Step
- Accept an integer as an input
- If if the number is greater than 9876543201, in which case the caller should be returned 
the string message "There is no possible number than fulfills that requirement"
- Determine the the next multiple of 7 that occurs after the input value
- Declare "currentMultipleOfSeven" and set it equal to that value
- Check if the currentMultipleOfSeven is a featured number
- If it is not, continue adding 7 to the number until it is a featured number
- Return currentMultipleOfSever to the caller

Helper: determineNextMultipleOfSeven
- Take the input of the main function as an input
- Add one to the input (in case the current number is a multiple of 7)
- While number % 7 !== 0:
  - Add 1 to number
- Return number

Helper: isFeaturedNumber
(We know it is a multiple of 7 already, no need to check this)
- take currentMultipleOfSeven as an input
- If currentMultipleOfSeven % 2 !== 0 AND allUniqueDigits returns true:
  - Return true
  - Else, return false

Helper: allUniqueDigits
- Turn the input number into a string
- For each digit in the string number:
  - Check to see if the digit appears anywhere else in the string
  - If it does, return false
- Return true 

*/

const LARGEST_FEATURED_NUMBER = 9876543201;

const allUniqueDigits = (currentMultipleOfSeven) => {
  let numArr = String(currentMultipleOfSeven).split("");
  for (let i = 0; i < numArr.length; i++) {
    let allOtherDigits = [...numArr];
    let currentDigit = allOtherDigits.splice(i, 1)[0];
    if (allOtherDigits.includes(currentDigit)) return false;
  }

  return true;
};

const isFeaturedNumber = (currentMultipleOfSeven) => {
  return (
    currentMultipleOfSeven % 2 !== 0 && allUniqueDigits(currentMultipleOfSeven)
  );
};

const determineNextMultipleOfSeven = (int) => {
  int++;
  while (int % 7 !== 0) {
    int++;
  }
  return int;
};

const featured = (int) => {
  if (int >= LARGEST_FEATURED_NUMBER) {
    return "There is no possible number that fulfills those requirements.";
  }
  let currentMultipleOfSeven = determineNextMultipleOfSeven(int);
  while (!isFeaturedNumber(currentMultipleOfSeven)) {
    currentMultipleOfSeven += 7;
  }
  return currentMultipleOfSeven;
};

// Test cases

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543186)); // 9876543201
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."

/*
Hm... I have an edge case where it is all the same. 

To note, the Launch school solution did a couple things different that were 
more optimal: First, it got the next odd and multiple of 7, then incremented by 14
to ensure it remained odd. This is more efficient, and simplifies the logic somewhat. 
Second, it used a 'seen' object instead of making a copy of the array on every
iteration and taking the current digit out. In terms of memory, this is far more 
efficient, because its only storing the current digit, instead of the entire 
array every single time. You can also reference the digit by name, which makes 
things a little easier to read IMO. 
*/
