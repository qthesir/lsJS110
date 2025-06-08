/*
Write a function that takes a positive integer as an argument and returns 
that number with its digits reversed.
*/

/*
PEDAC

Problem

Input: Positive integer

Output: Reversed version of the integer

Explicit Requirements
- The program accepts positive integers as inputs
- The program will return the same number as the input but reversed 

Implicit Requirements
- The type of the returned reversed output should be a number type
- Leading zeros in the result get dropped if the number has zeros on the end

Mental Model 
The program will accept a positive integer as an input. It will identify each digit in the input and
sort them in reversed order. It will then return the result as an integer. 

Examples / Test Cases

Data Structures
This would be easy to turn into a string, then array, reverse the order, and concatenate back into a string,
and then convert the string to a number. However, I am wondering if this problem could be solved with
pure arithmetic. It would be quite hard. I can separate out the individual digits, but then their place
(10s, 100s, etc) would have to be captured and the order inverted. This would be very tricky indeed, at 
least for me. Lets do the string variation first. 

Algorithm 
Using String Conversion
- Accept a positive integer as an input
- Turn into a string
- Turn into an array
- Reverse the order of the array
- Concatenate the array to a string
- Turn the string into a Number type
- Return the number 

Without Using String conversion
- Accept a positive integer as an input
- Extract digits and capture their place (e.g. 1, 10, 100)
- Reverse the places array, but keep the digits array the same
- Multiply digits by the places array and sum the total
- Return the total

Helper
Extract Digits and Places
- Take positive integer as an input
- Create an array called digits
- Create a value called numPlaces and set to 0
- While integer >= 10
    digit = integer % 10
    digits.push(digit)
    integer = math.floor(integer)
    numPlaces += 1
- call getPlaces(place)
- Return digits, places 
  

Extract Places
- Take numPlaces as an input
- places = []
- placeValue = 1
- While numPlaces > 0:
  - places.push(placeValue)
  - placeValue *= 10
  - numPlaces -= 1
- Return places array

Multiply digits and reversedPlaces array
- Accept digits and reversedPlaces array as input
- Define sum 
- For i in digits:
  - multiple digits[i] by reversedPlaces [i] and add to sum
- Return sum


*/

// Code with intent

const reverseNumber = (number) => {
  return parseInt(String(number).split("").reverse().join(""));
};

function reverseNumber2(inputNumber) {
  if (inputNumber < 10)  return inputNumber;

  let reversedNumber = 0;

  while(inputNumber > 0) {
    reversedNumber += inputNumber%10;
    reversedNumber *= 10;
    inputNumber = (inputNumber - inputNumber%10)/10;
  }

  return reversedNumber/10;
}

// The above works because it doesn't add any digits until a digit is hit. 12,000, for ex, will 
// result in reversedNumber being 0 until it hits 2. This is pretty ingenious. 

const reverseNumberNoString = (number) => {
  let [digits, places] = getDigitsAndPlaces(number);
  let reversedPlaces = places.reverse();

  return sumOfProductOfDigitsAndPlaces(digits, reversedPlaces);
};

const getDigitsAndPlaces = (number) => {
  let digits = [];
  let numPlaces = 0;
  while (number >= 1) {
    let digit = number % 10;
    digits.unshift(digit);
    number = Math.floor(number / 10);
    numPlaces += 1;
  }

  let places = getPlaces(numPlaces);

  return [digits, places];
};

const getPlaces = (numPlaces) => {
  let places = [];
  let placeValue = 1;
  while (numPlaces > 0) {
    places.unshift(placeValue);
    placeValue *= 10;
    numPlaces -= 1;
  }

  return places;
};

const sumOfProductOfDigitsAndPlaces = (digits, reversedPlaces) => {
  return digits.reduce((acc, cv, i) => {
    acc += cv * reversedPlaces[i];
    return acc
  }, 0);
};

// Example

console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(12213)); // 31221
console.log(reverseNumber(456)); // 654
console.log(reverseNumber(12000)); // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1)); // 1

console.log(reverseNumber2(12345)); // 54321
console.log(reverseNumber2(12213)); // 31221
console.log(reverseNumber2(456)); // 654
console.log(reverseNumber2(12000)); // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber2(1)); // 1

console.log(reverseNumberNoString(12345)); // 54321
console.log(reverseNumberNoString(12213)); // 31221
console.log(reverseNumberNoString(456)); // 654
console.log(reverseNumberNoString(12000)); // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumberNoString(1)); // 1

/* 
Notes & reflection


*/
