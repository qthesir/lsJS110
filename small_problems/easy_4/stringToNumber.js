/*
The parseInt() method converts a string of numeric characters (including an optional plus or minus sign) 
to an integer. The method takes 2 arguments where the first argument is the string we want to convert 
and the second argument should always be 10 for our purposes. parseInt() and the Number() method behave 
similarly. In this exercise, you will create a function that does the same thing.

Write a function that takes a string of digits and returns the appropriate number as an integer. 
You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about invalid characters; assume 
all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript, such as String() and 
Number(). Your function should do this the old-fashioned way and calculate the result by analyzing 
the characters in the string.
*/

/*
PEDAC

Problem

Input: String of numbers, base number = 10

Output: The same number as a number type

Explicit Requirements
- The program accepts a string
- All string characters will be numeric
- There will be no leading + or - signs in the string
- The program will accept two arguments: the string of numbers, and the base 
- The base should be set to 10 in this exercise as a default

Implicit Requirements
- There will be no leading 0s in the input


Questions
- Why take in the 10? Is it because we're converting the strings into base 10 numbers? This would also imply
that our same algorithm should work to convert a number into base 8, or other bases. So I should probably 
understand these types of numbers. 
- Maybe I could convert to numbers from a string by using binary? Like, what are all the attributes of 
a number and a string type that I could use as equivilance? 

Mental Model
The program takes a string of numbers and a base as an input, goes through each digit and converts that
digit to a numerical value, and adds all the numbers to the power of the base (10 in this case) and 
returns the result to the caller.  

Examples / Test Cases

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

Data Structures
String will be the input value. The program will store the mapping between the unicode and number - this is 
making me realize that it could also just be a literal string and a literal number. Could also use a switch
statement. Each digit in the string will need to be evaluated, and the result, for each individual digit,
can be stored in an array. 

Algorithm
1. Accept a string, str, as an argument, and a base, which is set to 10 as a default
2. Evaluate which numerical value the first digit maps to
3. Store the number in an array
4. Repeat for each number in the string
5. Sum the numbers using base 10
6. Return the sum to the user

Sum the numbers
1. Set the total to 0
2. Reverse the array of numbers
3. Multiply the number by the base raised to the index (i.e. 5 * base^(idx))
4. Add the number to the total
5. Repeat for each number in the array
6. Return the total

Evaluate which numerical value the first digit maps to

*/

// Code with intent

function stringToInteger(numberString, base = 10) {
  let numberArray = [];
  for (let i = 0; i < numberString.length; i++) {
    numberArray.push(convertToNumber(numberString[i].toLowerCase()));
  }
  return sumToBase(numberArray, base);
}

function convertToNumber(number) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  };

  return DIGITS[number]
}

function sumToBase(numberArray, base) {
  return numberArray.reverse().reduce((acc, cv, idx) => {
    return acc + cv * Math.pow(base, idx);
  }, 0);
}

// Examples

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

console.log(stringToInteger("4D9f", 16) === 19871); // logs true;

/*
Notes/Reflection

Realizing the step by step, simple to complex approach to problem solving that launch school is teaching is 
exactly how you should solve problems in the real world. With putting little thought to it, I was doing that,
solving for the base case and building more complexity on top of it for the Chris project, and also, at 
Vermont Mutual. This is how I understood edge functions - creating one in a simple environment, and then 
slowly adding complexity on top of that.

This is what this exercise is doing - assume the happy path, or the least complicated input. In Physics,
its start with the most fundamental truth, and then build up from there. They are both similar flavors of the
same approach. 

Based on my reading about binary, hexidecimal, and how values are stored in memory, I have a few options:

- I could create a mapping between the unicode numerical values and their numerical representations. This would
allow me to do the addition on each of the digits with their base value (10 for decimal, 8 for octal, 16 for 
hex) (i.e. "321" would be 10^3 + 10^2 + 10^1) and this would make use of that second parameter, "10" in this 
case. 
- Another option (and this feels a bit like cheating to be honest) is to use implicit type coercion by 
subtracting 0 from the input string. 
- This is still fuzzy, but maybe there is another way to obtain information about the context of the 
string and number values? There aren't any programmatic ways in javascript that are coming to mind.

I'm going to go with option 1. That uses the base value as the input string, and will make this function more 
flexible to be used for other bases (8, 16 etc). 

For getting to the final value of individual digits, I could use the accumulator, adding (3 * base^2 + 
5 * base^1 + 5*base^0) for example and adding each successive one to the total. 

*/
