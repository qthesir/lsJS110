/*
Write a function that rotates the last count digits of a number. To perform the rotation, 
move the first of the digits that you want to rotate to the end and shift the remaining digits to the left.
*/

/*

PEDAC

Problem

Input: A number to be rotated, and a number of the first number's last digits to rotate. Lets call the first value 
the "Target", and the second value the "Last Digits to Rotate".

Output: The Target value's Last Digits to Rotate rotated. That is, the Last Digits To Rotate of the Target should 
have the first value inserted onto the end of those digits, and the remaining digits shifted to the left. 

Explicit Assumptions
- The function will accept two arguments: A number to be rotated (the "Target") and a number of the Target's last 
digits to rotate. 
- A rotation, as defined by the problem, is the first digit moved to the end of the array, with the remaining 
digits shifted to the left to make space for the digit inserted on the end. 
- 

Implicit Assumptions 
- The function will only accept number types
- If the number of digits to rotate is equal to the number of digits in the Target, then the whole Target is 
rotated

Questions:

- What if the number of digits indicated by the second argument exceed the number of digits in the 
rotation? 
  - I'm going to assume that this will just be the entire target again. 

Examples / test cases
- See above 

Data Structures
There are a couple of ways I could go about doing this. So the steps, in general, are to split the digits into 
an array, perform the rotation, and then turn the digits back into a number. I could either use a string as an 
intermediary, or I could turn the digits directly into an array using the modulo. I could then turn the array
back into a digit using a string as an intermediary, or multiply each digit by the position it represents. 

Why don't I start with the easy way, which is to use a string, and then do the advanced way, where I do not use
a string at all? 

Algorithm
- Accept the Target and Last Digits to Rotate as arguments
- Turn the Target into an array
- Take a subsegment of the array at the index from [array.length - Last Digits to Rotate, array.length - 1]
- Rotate the digits in the subsegment
- Concatenate the subsegment with the remainder of the array
- Turn the Array back into a number
- Return that number to the caller

Turn the target into an array
- Coherece the number to a string
- Split the string with the delimeter ''
- Return the array

Turn the array into a number
- Join the array back into a string with delimeter ''
- coherece the string to a number
- return the number

Rotate the digits in the subsegment
- Take the array (subsegment) as an argument
- Remove the first digit from the array and save it as firstDigit
- Insert firstDigit to the end of the array
- Return the rotated array to the caller 

Note - will need to deal with the case where array.length - Last Digits to Rotate is less than 0. If this is 
the case, then you do a the rotation on the whole array. 

Perhaps I can use rotation_1 from the last problem to perform the rotation on the subsegment.

*/

// Code with Intent

const fancyNumToArray = (number) => {
  let numArr = [];
  let numberToModulo = 10;

  while (true) {
    let lastDigits = number % numberToModulo;
    numArr.unshift(lastDigits / (numberToModulo / 10));
    number = number - lastDigits;
    if (number === 0) {
      break;
    }
    numberToModulo = numberToModulo * 10;
  }

  return numArr;
};

const fancyArrayToNum = (array) => {
  return array.reduce((acc, cv, index, arr) => {
    return acc + cv * 10 ** (arr.length - 1 - index);
  }, 0);
};

const rotateArray = (array) => {
  if (!Array.isArray(array)) return undefined;
  if (array.length === 0) return [];
  return [...array.slice(1), array[0]];
};

const rotateStr = (str) => {
  return str.slice(1) + str[0];
};

const rotateRightmostDigits = (target, lastDigitsToRotate) => {
  let digitArr = String(target).split("");

  if (lastDigitsToRotate >= digitArr.length) {
    return Number(rotateArray(digitArr).join(""));
  }

  let arrayWithRotatedLastDigits = [
    ...digitArr.slice(0, digitArr.length - lastDigitsToRotate),
    ...rotateArray(digitArr.slice(digitArr.length - lastDigitsToRotate)),
  ];

  return Number(arrayWithRotatedLastDigits.join(""));
};

const rotateRightmostDigitsWithNoStringConversion = (
  target,
  lastDigitsToRotate
) => {
  let digitArr = fancyNumToArray(target);

  if (lastDigitsToRotate >= digitArr.length) {
    return Number(rotateArray(digitArr).join(""));
  }

  let arrayWithRotatedLastDigits = [
    ...digitArr.slice(0, digitArr.length - lastDigitsToRotate),
    ...rotateArray(digitArr.slice(digitArr.length - lastDigitsToRotate)),
  ];

  return fancyArrayToNum(arrayWithRotatedLastDigits);
};

const rotateRightmostDigitsWithStringOnly = (target, lastDigitsToRotate) => {
  let digitStr = String(target);

  if (lastDigitsToRotate >= digitStr.length) {
    return Number(rotateStr(digitStr));
  }

  let firstPart = digitStr.slice(0, digitStr.length - lastDigitsToRotate);
  let secondPart = rotateStr(
    digitStr.slice(digitStr.length - lastDigitsToRotate)
  );

  let resultStr = firstPart + secondPart;

  return Number(resultStr);
};

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917
console.log(rotateRightmostDigits(735291, 7)); // 352917

console.log(fancyNumToArray(13453));
console.log(fancyArrayToNum(fancyNumToArray(13453)));

console.log(rotateRightmostDigitsWithNoStringConversion(735291, 1)); // 735291
console.log(rotateRightmostDigitsWithNoStringConversion(735291, 2)); // 735219
console.log(rotateRightmostDigitsWithNoStringConversion(735291, 3)); // 735912
console.log(rotateRightmostDigitsWithNoStringConversion(735291, 4)); // 732915
console.log(rotateRightmostDigitsWithNoStringConversion(735291, 5)); // 752913
console.log(rotateRightmostDigitsWithNoStringConversion(735291, 6)); // 352917
console.log(rotateRightmostDigitsWithNoStringConversion(735291, 7)); // 352917

console.log("------- String only ----------");

console.log(rotateRightmostDigitsWithStringOnly(735291, 1)); // 735291
console.log(rotateRightmostDigitsWithStringOnly(735291, 2)); // 735219
console.log(rotateRightmostDigitsWithStringOnly(735291, 3)); // 735912
console.log(rotateRightmostDigitsWithStringOnly(735291, 4)); // 732915
console.log(rotateRightmostDigitsWithStringOnly(735291, 5)); // 752913
console.log(rotateRightmostDigitsWithStringOnly(735291, 6)); // 352917
console.log(rotateRightmostDigitsWithStringOnly(735291, 7)); // 352917
/*
- Noticing that its becoming easier to just start writing code. Before it would take all this time. Now, I can get
into it more easily. 

- For difficult to describe things, like this rotation, or the arguments of this rotation, I am seeing the benefit
of giving something a name. It is much easier to reason about it once I have named the thing, at least in english.

After reading the LS solution - this is the 3rd or 4th time I've done this. Converted into an array and used 
array operations when I could have simply used strings. Going forward, I should consider keeping the manipulation
in the form of a string, because turning it into an Array is more expensive. If I don't have to, that is. 
*/
