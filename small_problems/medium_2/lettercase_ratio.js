/*
Write a function that takes a string and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither
You may assume that the string will always contain at least one character.

*/

// Examples

/*
PEDAC
Problem
The problem is asking us to accept a string as an input, and indicate what percentage of the characters
in the string are uppercase letters, lowercase letters, and neither upper nor lowercase letters. The 
latter category is essentially any character that is not alphabetic. 

Examples / Test Cases
Requirements 
- Take a string as an input
- Return an object as an output which contains three properties: lowercase, uppercase, and neither. 
- The properties in the output object should have corresponding values that represent the percentage 
of characters its respective type represents as a proportion of the total characters in the string. 
- 'Uppercase' alphabetic characters should be the numerator in the 'uppercase' property
- 'Lowercase' alphabetic characters should be the numerator in the 'lowercase' property
- Any character that is not alphabetic should be the numerator in the 'neither' category
- The denominator should be the total number of characters in the string
- The values of the output object should be whole percentages (i.e. 50% is 50.00)
- The values of the output object should be string types

Data Structures
Input: A string 
Output: An object with properties lowercase, uppercase, and neither, each of which has the percentage of 
characters their category represents of the entire string
Intermediate: Thinking through this, there could be an intermediate calculation of the percentages of 
values. Or maybe not. You could just take the fraction of the overall string (i.e. 1/string.length) and 
multiply that by each character that meets the condition for its value, and then add that to the 
object, and a final step could be applied to transform the value into a string type. 

Algorithm
High level
The function accepts a string as an argument. It first divides 1 by the length of the string to get the
overall fraction of the string each character represents. It then creates an output object with the properties 
lowercase, uppercase, and neithe. It then goes through each character of the 
string, checking to see if its an uppercase alphabetic character, a lowercase alphabetic character, or 
neither. It will increment the values in the output object in the approriate category by 1/string.length. 
Finally, it will convert the values on the output object to strings and return the object to the caller. 

Step by step
- Accept a string as an argument
- Declare characterProportion and initialize it to 1 / string.length
- Declare stringBreakdown to an object with properties lowercase, uppercase, and neither. 
- For each character in the input string
  - Determine character type
  - Increment the character type on stringBreakdown object by characterProportion
- Format the stringBreakdown
- Return the formatted stringBreakdown to the caller 

Helper: Determine character type 
  If the character is uppercase:
    return uppercase
  If the character is lowercase:
    return lowercase
  If the character is any other character:
    return neither

Helper: Format the object
- Accept stringBreakdown as an argument
- Multiply the result by 100
- Display 2 decimal places
- Format as a string
- Return a new formatted stringBreakdown to the caller
*/

// Code

const determineCharacterType = (character) => {
  if (/[A-Z]/.test(character)) return "uppercase";

  if (/[a-z]/.test(character)) return "lowercase";

  return "neither";
};

const formatOutput = (stringBreakdown, numChars) => {
  return Object.fromEntries(
    Object.entries(stringBreakdown).map((entry) => {
      let formattedValue = String(((entry[1] / numChars) * 100).toFixed(2));
      return [entry[0], formattedValue];
    })
  );
};

const letterPercentages = (string) => {
  let stringBreakdown = string.split("").reduce(
    (stringBreakdown, character) => {
      let characterType = determineCharacterType(character);
      stringBreakdown[characterType] += 1;

      return stringBreakdown;
    },
    { lowercase: 0, uppercase: 0, neither: 0 }
  );

  return formatOutput(stringBreakdown, string.length);
};

console.log(letterPercentages("abCdef 123"));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages("AbCd +Ef"));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages("123"));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
