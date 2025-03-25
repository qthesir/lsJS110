/*
Write another function that returns true if the string passed as an argument is a palindrome, or 
false otherwise. This time, however, your function should be case-insensitive, and should ignore 
all non-alphanumeric characters. If you wish, you may simplify things by calling the isPalindrome 
function you wrote in the previous exercise.
*/

/*
PEDAC 
Problem 

Input: String of characters
Output: True or false, depending on whether the input is a pallindrome

Explicit Requirements
- The function returns true if the argument is a pallindrome, false if it is not
- A palindrome is a string where, when reversed, all the characters remain in the same position.
- The case of a letter does not matter in the evaluation of a palindrome
- Non-alphanumeric characters, like spaces, and &*#$,./, are not considered in the evaluation 
of a palindrome.
- Numbers ARE considered part of the palindrome

Implicit Requirements
- Only string values are accepted as an argument

Mental Model

The program will accept a string as an argument. It will strip out all of the non-alphanumeric 
characters and standardize the remaining alphanumeric characters to be lowercase. Then, it will
reverse the string, and compare it to the original string. If the two strings are equal, the function
will return true. If they are not, they will return false. 

Examples / Test Cases

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

Data Structure

Like the previous problem, the program will accept a string as an argument, convert it to an array
to perform the transformations and the reversal, and then convert the array back into a string to do 
the comparison. 

Algorithm

1. The function accepts a string, string, as an argument
2. Convert the string to an array
3. Convert uppercase characters to lowercase
4. Filter out non-alphanumeric characters in the array
5. Convert the array into a new string filteredString
5. Reverse the array 
6. Convert the array into another string and save it as reversedString
7. Check if reversedString and filteredString are equal 
8. Return the result 

*/

// Code with intent

function isRealPalindrome(string) {
  const ALPHANUMERIC_LOWERCASE = "abcdefghijklmnopqrstuvwxyz0123456789";
  let strArray = string
    .toLowerCase()
    .split("")
    .filter((letter) => {
      return ALPHANUMERIC_LOWERCASE.includes(letter);
    });

  let filteredString = strArray.join("");

  let reversedString = strArray.reverse().join("");

  return reversedString === filteredString;
}

// Examples:

console.log(isRealPalindrome("madam")); // true
console.log(isRealPalindrome("Madam")); // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam")); // true (only alphanumerics matter)
console.log(isRealPalindrome("356653")); // true
console.log(isRealPalindrome("356a653")); // true
console.log(isRealPalindrome("123ab321")); // false

// Here's the LS solution. Its pretty elegant, probably saves a lot of space compared to mine.
// It also does not create more arrays. Mine is a little clunky. 

function isRealPalindrome2(string) {
  string = removeNonLetterNumbers(string.toLowerCase());
  return isPalindrome(string);
}

function removeNonLetterNumbers(string) {
  let result = "";

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx]) || isNumber(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= "a" && char <= "z";
}

function isNumber(char) {
  return char >= "0" && char <= "9";
}

function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join("");
  return reversedStr === str;
}
